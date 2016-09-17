import React from 'react';
import Lockr from 'lockr';
import request from 'superagent';
import Q from 'q';

// let's store this on the window
const EMAIL_FORM_KEY = 'EMAIL_FORM_KEY';

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
      sending: false,
      form: Lockr.get(EMAIL_FORM_KEY) || {}
    }
  },
  bindToForm(member){
    return event => {
      this.setState({
        form: Object.assign({}, this.state.form, {
          [member]: event.target.value
        })
      });
    }
  },
  submit(){
    this.setState({ sending: true });
    requestToPromise(
      request.post('/test/email.php')
        .send(this.state.form)
    ).then(function(resp){
      console.log("Got response: ", resp);
      this.setState({
        sending: false
      });
    });
  },
  render() {
    return (
      <div className="email">
        <div className="prompt">Write Beth a message.</div>
        <input name="name" placeholder="Name" onChange={this.bindToForm('name')}/>
        <input name="email" placeholder="Email"  onChange={this.bindToForm('email')}/>
        <textarea name="message" placeholder="Message" rows="5"  onChange={this.bindToForm('message')}/>
        <button type="submit" onClick={this.submit}>
          {this.state.sending ? 'sending... ' : 'Send'}
        </button>
      </div>
    );
  }
});

export default EmailForm;
