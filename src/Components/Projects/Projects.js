import React from 'react';
import "./Projects.css"
import {Link} from "react-router-dom"


const Projects = (props) => {
    console.log(props)
    return (
        <article className={`projects-article ${props.color === "grey" ? "grey" : "green" }`}>
            <Link to={`/projects/${props.id}`}>
                <figure className={props.color === "grey" ? "grey" : "green" }>
                    <img src={`/imgs/${props.img}`} />
                </figure>
            </Link>
                <h1>{props.title}</h1>
        </article>
    );
}

export default Projects;
