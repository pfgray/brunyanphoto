import React from 'react';
import Lockr from 'lockr';
import request from 'superagent';
import Q from 'q';
import { Valid, validateEmail, nonEmpty } from './validation';
import classNames from 'classnames';

// let's store this on the window
const EMAIL_FORM_KEY = 'EMAIL_FORM_KEY';

window.Lockr = Lockr;

function requestToPromise(req) {
  const deferred = Q.defer();
  req.end((err, res) => {
    if(err) {
      deferred.reject(err);
    } else {
      deferred.resolve(res.body);
    }
  });
  return deferred.promise;
}

const EmailForm = React.createClass({
  getInitialState() {
    return {
      dirty: false,
      sentOnce: false,
      successful: false,
      sending: false,
      form: Lockr.get(EMAIL_FORM_KEY) || {}
    };
  },
  bindToForm(member) {
    return event => {
      const form = Object.assign({}, this.state.form, {
        [member]: event.target.value
      });
      Lockr.set(EMAIL_FORM_KEY, form);
      this.setState({ form });
    };
  },
  submit() {
    this.formValidated()
      .reduce((a, b) => a.and(b), Valid())
      .fold(_ => {
        console.log('tried to send but failed');
        this.setState({
          dirty: true,
          sentOnce: true
        });
      }, _ => {
        if(!this.state.sending && !this.state.successful) {
          this.setState({ sending: true });
          requestToPromise(
            request.post('/test/email.php')
              .send(this.state.form)
          ).then(resp => {
            console.log('Got response: ', resp);
            this.setState({ sending: false, successful: true, form: {} });
          }, resp => {
            this.setState({ sending: false });
          });
        }
      });
  },
  validate(value, ...validations) {
    // console.log("Validating in render: ", value, validations);
    return validations.reduce(
      (curr, f) => curr.and(f(value)), Valid(value));
  },
  formValidated() {
    return [
      this.validate(this.state.form.name, nonEmpty),
      this.validate(this.state.form.email, nonEmpty, validateEmail),
      this.validate(this.state.form.message, nonEmpty)
    ];
  },
  render() {
    const [vName, vEmail, vMessage] = this.formValidated();

    const showError = this.state.dirty && this.state.sentOnce;

    return (
      <div className="email">
        <div className="prompt">Write Beth a message.</div>

        <label htmlFor="name" className={classNames({
          'error': vName.fold(_ => true, _ => false) && showError
        })}>
          Name
          <span className="error">{showError ? vName.fold(_ => `(${_})`, _ => ''): ''}</span>
        </label>
        <input name="name" placeholder="Name" onChange={this.bindToForm('name')} value={this.state.form.name}/>

        <label htmlFor="email" className={classNames({
          'error': vEmail.fold(_ => true, _ => false) && showError
        })}>
          Email
          <span className="error">{showError ? vEmail.fold(_ => `(${_})`, _ => ''): ''}</span>
        </label>
        <input name="email" placeholder="Email" onChange={this.bindToForm('email')}  value={this.state.form.email}/>

        <label htmlFor="message" className={classNames({
          'error': vMessage.fold(_ => true, _ => false) && showError
        })}>
          Message
          <span className="error">{showError ? vMessage.fold(_ => `(${_})`, _ => ''): ''}</span>
        </label>
        <textarea name="message" placeholder="Message" rows="5" onChange={this.bindToForm('message')}  value={this.state.form.message}/>

        <button type="submit" onClick={this.submit} disabled={this.state.successful || this.state.sending}>
          {(() => {
            if (this.state.sending) {
              return 'sending... ';
            } else if(this.state.successful){
              return 'sent.';
            } else {
              return 'Send';
            }
          })()}
        </button>
      </div>
    );
  }
});

export default EmailForm;
