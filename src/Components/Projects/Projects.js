import React from 'react';
import "./Projects.css"
import Colombus from "./imgs/instrumentos-react-preview.png"


const Projects = () => {
    return (
        <section id="Projects">
                <h1>Projects</h1>
                <article id="flex-projects">
                    <article className="projects-article">
                        <figure>
                            <img src={Colombus} />
                        </figure>
                            <h1>Colombus Music</h1>
                        <article className="flex-buttons">
                            <a href="https://github.com/JuanSegundo7/instrumentos-front"><button>Codigo</button></a>
                            <a href="https://instrumentoss.herokuapp.com/"><button>Demo</button></a>
                        </article>
                    </article>
                    <article className="projects-article">
                        <figure>
                            <img src={Colombus} />
                        </figure>
                            <h1>Colombus Music</h1>
                        <article className="flex-buttons">
                            <a href="https://github.com/JuanSegundo7/instrumentos-front"><button>Codigo</button></a>
                            <a href="https://instrumentoss.herokuapp.com/"><button>Demo</button></a>
                        </article>
                </article>
            </article>
        </section>
    );
}

export default Projects;
