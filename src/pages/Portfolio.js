import React from 'react';
import Card from '../components/Card';
import './style.css';

const data = [ 
    {
        name: 'Actor Database',
        image: <img src="assets/images/resultPage.PNG" alt="results page" className="database"></img>,
        description: 'This app was created to look up an actor/actress and see their most popular movies, their recent tweets, and recent news about them.',
        repository: <a href="https://www.github.com/m-ray-ofSunshine/actor-database" target="_blank" rel="noreferer">Repo</a>,
        deployed: <a href=" https://www.m-ray-ofsunshine.github.io/actor-database/" target="_blank"rel="noreferer" >Deployed</a>,
        id: 1,
    },
    {
        name: 'Event Organizer ',
    image: <img src="assets/images/eventorganizer222.PNG" alt="landing page" className="dashboard"></img>,
    description: 'This app was created to search events happening near the user or creating their own events',
    repository: <a href="https://www.github.com/neilburt/group-project-2" target="_blank" rel="noreferer" > repo</a>,
    deployed: <a href="https://www.gentle-reaches-60799.herokuapp.com/" target="_blank" rel="noreferer" >deployed</a>,
    id: 2,
    }
]

export default function Display() {
    return (
      <div>
        {data.map((projects) => (
          <Card name={projects.name} description={projects.description} key={projects.id} />
        ))}
      </div>
    );
  }