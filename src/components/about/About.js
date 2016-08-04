import React from 'react';

import EmailForm from './EmailForm';

const About = () => (
  <div className="about">
    <div className="split">
      <div className="left">
        <h1>Meet Bethanne.</h1>
        <div className="description">
          <p>I get chills being a part of such a commitment. Capturing the moments that will shape the beginning of a lifelong legacy brings me such joy. Years from now, you will look back on those images and treasure the memories of the day your forever began.</p>
        </div>
        <h1>My Logo.</h1>
        <div>
            <p>The infinity symbol is one of everlasting love. Lines that go forever and ever signify a union that never ends. The double infinity embodies the two everlasting commitments coming together as one.</p>
            <p>The anchor has a personal meaning to me. I grew up on the water and there if is one thing that I know about boating: You have to have a strong anchor or else your boat will drift away. In the middle of the two lives intertwining; stands the anchor, holding fast the everlasting love of a marriage.</p>
        </div>
      </div>
      <div className="right">
        <img className="profile-pic" src="http://i.imgur.com/nISYFma.jpg"/>
      </div>
    </div>
    {/*
    <div>
      <ul>
        <li>Wife of a wildly handsome and super supportive husband</li>
        <li>Mommy of two sweet and rowdy boys</li>
        <li>Home right now is Virginia; but has been Pennsylvania, New Jersey, Mississippi, and North Dakota. Who knows what will be next</li>
        <li>Love to garden: I’ve grown Tomatoes, Lettuce, Kale, Peas, Beans, Carrots, Zuchinni, Squash, and have failed at Peppers and Pumpkins </li>
        <li>I also love my flower garden. Sunflowers are my favorites</li>
        <li>I hate coffee, so when I need a caffeine fix, it’s sweet tea</li>
        <li>I’m a sucker for chocolate</li>
        <li>I’m a mom of boys, but hate bugs snakes and spiders</li>
        <li>I love mud, dirt, and sticks though</li>
        <li>And of course…as I’m sure you can guess, I love my Nikon</li>
      </ul>
    </div>*/}
    <EmailForm />
  </div>
);

export default About;
