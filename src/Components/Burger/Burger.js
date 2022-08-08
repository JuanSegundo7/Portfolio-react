import React, {} from 'react';
import { Link } from "react-scroll";
import "./Burger.css"


const Burger = (props) => {

    return (
        <nav id="mobile-nav" className={props.value ? "is-active" : null}>
            <article>
            <div>
                <li><Link
                    activeClass="active"
                    to="Principal"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    onClick={props.handleClick}
                    >
                    About
                </Link></li>
                <li><Link
                    activeClass="active"
                    to="Skills"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    onClick={props.handleClick}
                    >
                    Skills
                </Link></li>
                <li><Link
                    activeClass="active"
                    to="Projects"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    onClick={props.handleClick}
                    >
                    Projects
                </Link></li>
                <li><Link
                    activeClass="active"
                    to="Service"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    onClick={props.handleClick}
                    >
                    Service
                </Link></li>
                <li><Link
                    activeClass="active"
                    to="Contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    onClick={props.handleClick}
                    >
                    Contact
                </Link></li>
            </div>
            </article>
        </nav>
    );
}


export default Burger;
