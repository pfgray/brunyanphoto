import React from 'react';

const About = () => (
  <div className="email">
    <div className="prompt">Write Beth a message.</div>
    <input name="name" placeholder="Name"/>
    <input name="email" placeholder="Email"/>
    <textarea name="message" placeholder="Message" rows="5"/>
    <button type="submit">Send</button>
  </div>
);

export default About;
