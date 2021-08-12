import React from 'react';
import Card from '../components/Card';
import './style.css';

const data = [ 
    {
        name: 'Actor Database',
        image: <img src="assets/images/resultPage.PNG" alt="results page" className="database"></img>,
        description: 'This app was created to look up an actor/actress and see their most popular movies, their recent tweets, and recent news about them.',
        repository: <a href="https://www.github.com/m-ray-ofSunshine/actor-database" target="_blank" rel="noreferrer">Repo</a>,
        deployed: <a href=" https://www.m-ray-ofsunshine.github.io/actor-database/" target="_blank"rel="noreferrer" >Deployed</a>,
        id: 1,
    },
    {
        name: 'Event Organizer ',
    image: <img src="assets/images/eventorganizer222.PNG" alt="landing page" className="dashboard"></img>,
    description: 'This app was created to search events happening near the user or creating their own events',
    repository: <a href="https://www.github.com/neilburt/group-project-2" target="_blank" rel="noreferrer" > repo</a>,
    deployed: <a href="https://www.gentle-reaches-60799.herokuapp.com/" target="_blank" rel="noreferrer" >deployed</a>,
    id: 2,
    },
    {
      name: 'Note Taker Express ',
  image: <img src="assets/images/NoteTakerScreenshot.PNG" alt="landing page" className="notetaker"></img>,
  description: 'This app was created using Express, with the application you can create, edit and delete notes! Very usefull for taking notes during a work meeting or during a college lecture.',
  repository: <a href="https://github.com/SamuelMontague/noteTakerExpress" target="_blank" rel="noreferrer" > repo</a>,
  deployed: <a href="https://intense-garden-88136.herokuapp.com/" target="_blank" rel="noreferrer" >deployed</a>,
  id: 3,
  },
  {
    name: 'Dwarven Workout Tracker ',
image: <img src="assets/images/ScreenshotFT.PNG" alt="landing page" className="workout"></img>,
description: 'This app was created to track one exercise or many within a workout, you can also track the previous workouts you have logged to the site. It tracks both cardio, and strength building workouts. It will also tracked the totals of the workouts, for example the total weight lifted or the total distance traveled.',
repository: <a href="https://github.com/SamuelMontague/Dwarven-Workout-Tracker" target="_blank" rel="noreferrer" > repo</a>,
deployed: <a href="https://still-refuge-71404.herokuapp.com/" target="_blank" rel="noreferrer" >deployed</a>,
id: 4,
}
]

export default function Display() {
    return (
      <div>
        {data.map((projects) => (
          <Card name={projects.name} description={projects.description} image={projects.image} repository={projects.repository} deployed={projects.deployed} key={projects.id} />
        ))}
      </div>
    );
  }