import HTML from '../../assets/icons/html.png'
import CSS from '../../assets/icons/css.png'
import JS from '../../assets/icons/JS.png'
import NODE from '../../assets/icons/nodejs.png'
import MYSQL from '../../assets/icons/mysql.png'
import MONGODB from '../../assets/icons/mongodb.png'
import REACT from '../../assets/icons/react.png'
import GRAPHQL from '../../assets/icons/graphql.png'
import RESUME from '../../assets/images/Resume.PNG'

export default function Resume(){
    return(
        <div className="container text-align-center">
            <h3>Tech Stack Learned</h3>
            <div className="tech-container">
                <li className="tech"><a href="https://www.w3schools.com/html/" target="_blank" rel="noreferrer"><img alt="icon" className="tech-icon display:inline" src={HTML}></img></a></li>
                <li className="tech"><a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"><img alt="icon" className="tech-icon display:inline" src={CSS}></img></a></li>
                <li className="tech"><a href="https://www.w3schools.com/js/" target="_blank" rel="noreferrer"><img alt="icon" className="tech-icon display:inline" src={JS}></img></a></li>
                
                <li className="tech"><a href="https://www.w3schools.com/nodejs/" target="_blank" rel="noreferrer"><img className="tech-icon display:inline" alt="icon" src={NODE}></img></a></li>
                <li className="tech"><a href="https://www.w3schools.com/mysql/" target="_blank" rel="noreferrer"><img className="tech-icon display:inline" alt="icon" src={MYSQL}></img></a></li>
                <li className="tech"><a href="https://www.w3schools.com/nodejs/nodejs_mongodb_create_db.asp"  target="_blank"  rel="noreferrer"><img className="tech-icon display:inline" alt="icon" src={MONGODB}></img></a></li>
                
                <li className="tech"><a href="https://www.w3schools.com/react/" target="_blank"  rel="noreferrer"><img alt="icon" className="tech-icon display:inline" src={REACT}></img></a></li>
                <li className="tech"><a href="https://www.graphql.com/tutorials/" target="_blank" rel="noreferrer"><img alt="icon" className="tech-icon display:inline" src={GRAPHQL}></img></a></li>
            </div>
            <br></br>
            <a href="https://docs.google.com/document/d/1zwVeAYXx2eZBNyKz57fYxExxlIkifMeE6fsSdFhFv1o/edit?usp=sharing">
                <img alt="icon" src={RESUME} className="resume"/>
            </a>
            <p>Click image for direct link to resume via google docs.</p>
        </div>
    )
}