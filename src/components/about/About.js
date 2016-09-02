import React from 'react';

import EmailForm from './EmailForm';

const About = () => (
  <div className="about">
    <div className="split">
      <div className="left">
        <h1>Me.</h1>
        <div className="description">
          <p>I have always loved taking pictures of pretty things, but I really fell in love with photography when I first set eyes on my son. It hit me then how important it is to have memories to show future generations. Your wedding is one of the most important days of your life and to be invited into that special day gives me so much joy. I love being able to not only document weddings, but to capture the emotions and personality that make up who you are. These are the memories that you will want to hold on to; the ones that you will want to share with future generations. They are timeless. Classic. Real. These are the memories that can only be told in so many words. But, a picture - a picture says it all.</p>
        </div>
        <h1>My Logo.</h1>
        <div>
            <p>The infinity symbol is one of everlasting love. Lines that go forever and ever signify a union that never ends. The double infinity embodies the two everlasting commitments coming together as one.</p>
            <p>The anchor has a personal meaning to me. I grew up on the water and there is one thing that I know about boating: You have to have a strong anchor or else your boat will drift away. In the middle of the two lives intertwining; stands the anchor, holding fast the everlasting love of a marriage.</p>
            <p>I get chills being part of such a commitment. Capturing the moments that will shape the beginning of a lifelong legacy brings me such joy. Years from now; you, your children, and your children's children will look back on those images and treasure the memories of the day your forever began.</p>
        </div>
      </div>
      <div className="right">
        <img className="profile-pic" src="http://i.imgur.com/nISYFma.jpg"/>
        <a className="blog-link" href="http://www.google.com">My Blog</a>
        <EmailForm/>
      </div>
    </div>
  </div>
);

export default About;
