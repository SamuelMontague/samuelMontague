import React from "react";
import Card from "../Card";
import DATABASE from "../../assets/images/resultPage.PNG"
import ORGANIZER from '../../assets/images/eventorganizer222.PNG'
import WORKOUTTRACKER from '../../assets/images/ScreenshotFT.PNG'
import NOTETAKER from '../../assets/images/NoteTakerScreenshot.PNG'
import WEATHER from '../../assets/images/Screenshot.png'
import PASSWORD from '../../assets/images/passwordgenerator.PNG'
import GITHUB from '../../assets/icons/github.png'
 

const data = [
  {
    name: "Actor Database",
    image: 
    <a className = "DeployedLink"
        href=" https://www.m-ray-ofsunshine.github.io/actor-database/"
        target="_blank"
        rel="noreferrer"
      >
      <img
        src={DATABASE}
        alt="results page"
        className="database"
      ></img></a>
    ,
    description:
      "This app was created to look up an actor/actress and see their most popular movies, their recent tweets, and recent news about them.",
    repository: 
      <a className = 'Repositorylink'
        href="https://www.github.com/m-ray-ofSunshine/actor-database"
        target="_blank"
        rel="noreferrer"
      >
      <img src={GITHUB}
      alt="github"
      className="githubicon"></img>
      </a>
    ,
    id: 1,
  },
  {
    name: "Event Organizer ",
    image: 
    <a
        href="https://www.gentle-reaches-60799.herokuapp.com/"
        target="_blank"
        rel="noreferrer"
      >
      <img
        src={ORGANIZER}
        alt="landing page"
        className="dashboard"
        
      ></img></a>
    ,
    description:
      "This app was created to search events happening near the user or creating their own events",
    repository: 
      <a
        href="https://www.github.com/neilburt/group-project-2"
        target="_blank"
        rel="noreferrer"
      >
        
        <img src={GITHUB}
      alt="github"
      className="githubicon"></img>
      </a>
    ,
    id: 2,
  },
  {
    name: "Note Taker Express ",
    image: <a
    href="https://intense-garden-88136.herokuapp.com/"
    target="_blank"
    rel="noreferrer"
  >
      <img
        src={NOTETAKER}
        alt="landing page"
        className="notetaker"
      ></img></a>
    ,
    description:
      "This app was created using Express, with the application you can create, edit and delete notes! Very usefull for taking notes during a work meeting or during a college lecture.",
    repository: 
      <a
        href="https://github.com/SamuelMontague/noteTakerExpress"
        target="_blank"
        rel="noreferrer"
      >
       
       <img src={GITHUB}
      alt="github"
      className="githubicon"></img>
      </a>
    ,
    id: 3,
  },
  {
    name: "Dwarven Workout Tracker ",
    image: <a
    href="https://still-refuge-71404.herokuapp.com/"
    target="_blank"
    rel="noreferrer"
  >
      <img
        src={WORKOUTTRACKER}
        alt="landing page"
        className="workout"
      ></img></a>
    ,
    description:
      "This app was created to track one exercise or many within a workout, you can also track the previous workouts you have logged to the site. It tracks both cardio, and strength building workouts. It will also tracked the totals of the workouts, for example the total weight lifted or the total distance traveled.",
    repository: 
      <a 
        href="https://github.com/SamuelMontague/Dwarven-Workout-Tracker"
        target="_blank"
        rel="noreferrer"
      >
       
       <img src={GITHUB}
      alt="github"
      className="githubicon"></img>
      </a>
    ,
    id: 4,
  },
  {
    name: "Weather Outlook",
    image: <a className = "DeployedLink"
    href=" https://samuelmontague.github.io/hw6-weather-outlook/"
    target="_blank"
    rel="noreferrer"
  >
      <img
        src={WEATHER}
        alt="results page"
        className="weather"
      ></img></a>
    ,
    description:
      "This is a front end site showcasing API calls. Using a weather API you can select a city, and see today's weather and a five day forecast. All searched cities are saved for return checks of the forecast.",
    repository: 
      <a className = 'Repositorylink'
        href="https://github.com/SamuelMontague/hw6-weather-outlook"
        target="_blank"
        rel="noreferrer"
      >
        <img src={GITHUB}
      alt="github"
      className="githubicon"></img>
      </a>
    ,
    id: 5,
  },
  {
    name: "Password Generator",
    image: <a className = "DeployedLink"
    href=" https://samuelmontague.github.io/password-generator-hw3/"
    target="_blank"
    rel="noreferrer"
  >
      <img
        src={PASSWORD}
        alt="results page"
        className="password"
      ></img></a>
    ,
    description:
      "This app asks a series of questions about the format for the password then generates a password with the parameters given.",
    repository: 
      <a className = 'Repositorylink'
        href="https://github.com/SamuelMontague/password-generator-hw3"
        target="_blank"
        rel="noreferrer"
      >
        <img src={GITHUB}
      alt="github"
      className="githubicon"></img>
      </a>
    ,
    id: 6,
  },
];

export default function Display() {
  return (
    <div id="portfoliosection">
      {data.map((projects) => (
        <Card
          name={projects.name}
          description={projects.description}
          image={projects.image}
          repository={projects.repository}
          deployed={projects.deployed}
          key={projects.id}
        />
      ))}
    </div>
  );
}
