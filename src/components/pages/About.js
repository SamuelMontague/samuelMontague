import React from 'react';
import PROFILE from '../../assets/images/profile.jpg'

export default function About() {
  return (
    <div>
      <div className="container text-align-center ">
      <h1>About Me</h1>
      <img src={PROFILE} className="profileimg " alt="profile"/>
      <p className="bio">
      I am a new and upcoming web developer!
      I am 28 years old, with a background in Chemical Engineering and Aerospace Engineering.
      Previously I worked at Medtronic and JPL/NASA as a Liquid Fuels Engineer. 
      I am studying to become a web developer to learn and use a new set of skills in the laboratory. 
      I have always been interested in coding but never had time to sit down and learn it! In my free time I love to exercise, read novels and non-fiction, and hang out with my friends and family.
      </p>
      </div>
    </div>
  );
}