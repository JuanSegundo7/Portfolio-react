import React from 'react';
import Projects from "./Projects"
import "./Projects.css"
import ProjectInfo from './Info/ProjectsInfo'

const DetailFather = () => {

    return (
        <section id="Projects">
            <h1>Projects</h1>
            <div className="max-width">
            <article id="flex-container-projects">
                <article id="flex-projects">
                    {ProjectInfo.map((instrumentos, i) => {
                        return <Projects
                        key={instrumentos + i}
                        id={instrumentos.id}
                        title={instrumentos.title}
                        info={instrumentos.info}
                        img={instrumentos.img}
                        color={instrumentos.color}
                        />
                    })}
                </article>
            </article>
            </div>
        </section>
    );
}

export default DetailFather;
