import React from 'react';

import EmailForm from './EmailForm';

const About = props => (
  <div>
    <img className="profile-pic" src={props.featuredImage}/>
    <EmailForm />
  </div>
);

export default About;
