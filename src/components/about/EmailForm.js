import React from 'react';

const form = {};

const bindToForm = function(member){
  return function(event){
    form[member] = event.target.value;
  }
}

const submit = function(){
  console.log('sending:', form);
}

const EmailForm = () => (
  <div className="email">
    <div className="prompt">Write Beth a message.</div>
    <input name="name" placeholder="Name" onChange={bindToForm('name')}/>
    <input name="email" placeholder="Email"  onChange={bindToForm('email')}/>
    <textarea name="message" placeholder="Message" rows="5"  onChange={bindToForm('message')}/>
    <button type="submit" onClick={submit}>Send</button>
  </div>
);

export default EmailForm;
