import React from 'react';
import "./Projects.css"
import Colombus from "./imgs/instrumentos-react-preview.png"
import {Link} from "react-router-dom"


const Projects = (props) => {
    return (
        <article className="projects-article">
            <figure>
                <Link to={`/projects/${props.id}`}><img src={Colombus} /></Link>
            </figure>
                <h1>{props.title}</h1>
            <article className="flex-buttons">
                <a href="https://github.com/JuanSegundo7/instrumentos-front"><button>Codigo</button></a>
                <a href="https://instrumentoss.herokuapp.com/"><button>Demo</button></a>
            </article>
        </article>
    );
}

export default Projects;
