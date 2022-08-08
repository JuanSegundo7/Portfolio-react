import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Skills.css"

const Skills = () => {
    return (
        <section id="Skills">
            <h1>Skills</h1>
            <div id="flex-skills">
            <article>
                <h3>Front-end</h3>
                <div id="p-container">
                    <div>
                        <div className="badges">
                            <FontAwesomeIcon icon="fa-circle-check" />
                            <p>HTML</p>
                        </div>
                        <div className="badges">
                            <FontAwesomeIcon icon="fa-circle-check" />
                            <p>JAVASCRIPT</p>                    
                        </div>
                        <div className="badges">
                            <FontAwesomeIcon icon="fa-circle-check" />
                            <p>GATSBY</p>
                        </div>
                    </div>
                    <div>
                        <div className="badges">
                            <FontAwesomeIcon icon="fa-circle-check" />
                            <p>CSS</p>
                        </div>
                        <div className="badges">
                            <FontAwesomeIcon icon="fa-circle-check" />
                            <p>REACT.JS</p>                    
                        </div>
                        <div className="badges">
                            <FontAwesomeIcon icon="fa-circle-check" />
                            <p>NEXT.JS</p>
                        </div>
                    </div>
                </div>
            </article>
            <article>
                <h3>Back-end</h3>
                <div id="p-container">
                    <div>
                        <div className="badges">
                            <FontAwesomeIcon icon="fa-circle-check" />
                            <p>NODE.JS</p>
                        </div>
                        <div className="badges">
                            <FontAwesomeIcon icon="fa-circle-check" />
                            <p>MIDDLEWARES</p>                    
                        </div>
                        <div className="badges">
                            <FontAwesomeIcon icon="fa-circle-check" />
                            <p>MULTER</p>
                        </div>
                    </div>
                    <div>
                        <div className="badges">
                            <FontAwesomeIcon icon="fa-circle-check" />
                            <p>EXPRESS</p>
                        </div>
                        <div className="badges">
                            <FontAwesomeIcon icon="fa-circle-check" />
                            <p>SEQUELIZE</p>                    
                        </div>
                        <div className="badges">
                            <FontAwesomeIcon icon="fa-circle-check" />
                            <p>MYSQL</p>
                        </div>
                    </div>
                </div>
            </article>
        </div>
        </section>         
    );
}

export default Skills;
