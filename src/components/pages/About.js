import React from 'react';
import PROFILE from '../../assets/images/profile.jpg'
import PROFILE2 from '../../assets/images/Instapic.jpg'
import PROFILE3 from '../../assets/images/paddleboard1.png'

export default function About() {
  return (
    <div>
      <div className="container text-align-center ">
      <h1>About Me</h1>
      <div className="container row">
      <img src={PROFILE} className="profileimg col-6 col-sm-4" alt="profile"/>
      <p className="bio col-6 col-sm-8">
        I am a new and upcoming web developer! I am currently enrolled in the University of Minnesota full stack flex full-time bootcamp. During the bootcamp I have learned the skills and technologies of html, css, javascript, nodejs, express, mysql, mongodb, react, graphql and more! I have also learned how to use, navigate and deploy to GitHub and Heroku. I am trying to become a react developer, I enjoy using and developing inside of React.In the future I plan on learning more coding languages like Python and C#.
        </p>
      </div>
      <br></br>
      <div className="container row">
      <h3>Education:</h3>
        <p className="bio col-6 col-sm-8">
      In 2015 I graduated from the University of Minnesota College of Science and Engineering with a Bachelors of Science in Chemical Engineering with a focus in Food Science and a minor in Spanish. In 2016 I was offered a scholarship to the California Institute of Technology for Chemical Engineering, included in the scholarship was an internship with JPL/NASA in Pasadena. In 2018 I graduated from Caltech with a Masters of Science in Chemical Engineering with a focus in Fluid Dynamics and Liquid Flow. In 2018 I also recived a Masters of Science in Aerospace Engineering thanks to my published research with JPL/NASA for my work on the Curiosity Rover project.
      </p>
      <img src={PROFILE2} className="profileimg col-6 col-sm-4" alt="profile"/>
      </div>
      <br></br>
      <div className="container row">
        <h3>Personal:</h3>
        <img src={PROFILE3} className="profileimg col-6 col-sm-4" alt="profile"/>
        <p className="bio col-6 col-sm-8"> I am from North Minneapolis, I was born with a disability called Achondroplasia, known more commonly as Dwarfism. I have never let my disability dictate who I am or what I can become. I have a serious passion for learning new things, whether its learning a dish to cook for my partner, or learning a new skill in the laboratory. In my free time I enjoy working out, riding my bicycle, reading a new book, and playing dungeons and dragons. Between graduating from the U of M and joining Caltech for grad school I got an opportunity to travel the world. I traveled through Asia alone, visiting Hong Kong, Thailand, Taipei and Tokyo.  
        </p>
      </div>
      </div>
    </div>
  );
}