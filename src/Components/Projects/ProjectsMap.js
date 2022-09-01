import React from 'react';
import Projects from "./Projects"
import "./Projects.css"
import ProjectInfo from './Info/ProjectsInfo'

const DetailFather = () => {

    return (
        <section id="Projects">
            <h1>Projects</h1>
            <article id="flex-projects">
                {ProjectInfo.map((instrumentos, i) => {
                    return <Projects
                    key={instrumentos + i}
                    id={instrumentos.id}
                    title={instrumentos.title}
                    info={instrumentos.info}
                    />
                })}
            </article>
        </section>
    );
}

export default DetailFather;
