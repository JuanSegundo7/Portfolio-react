import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Skills.css";

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
                <p>TYPESCRIPT</p>
              </div>
              <div className="badges">
                <FontAwesomeIcon icon="fa-circle-check" />
                <p>NEXT</p>
              </div>
              <div className="badges">
                <FontAwesomeIcon icon="fa-circle-check" />
                <p>REACT-QUERY</p>
              </div>
              <div className="badges">
                <FontAwesomeIcon icon="fa-circle-check" />
                <p>TAILWIND</p>
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
                <p>AUTH0</p>
              </div>
              <div className="badges">
                <FontAwesomeIcon icon="fa-circle-check" />
                <p>REACT-NATIVE</p>
              </div>
              <div className="badges">
                <FontAwesomeIcon icon="fa-circle-check" />
                <p>MATERIAL UI</p>
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
                <p>MONGOOSE</p>
              </div>
              <div className="badges">
                <FontAwesomeIcon icon="fa-circle-check" />
                <p>MONGO</p>
              </div>
              <div className="badges">
                <FontAwesomeIcon icon="fa-circle-check" />
                <p>MVC</p>
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
              <div className="badges">
                <FontAwesomeIcon icon="fa-circle-check" />
                <p>POSTGRESQL</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Skills;
