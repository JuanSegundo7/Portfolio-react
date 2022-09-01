import React, {useState} from 'react';
import "./Header.css"
import Toogle from '../Toggle/Toggle'
import { Link } from "react-scroll";
import {Link as Navigator} from "react-router-dom"
import Burger from "../Burger/Burger"



const Header = (props) => {
    const [value, setValue] = useState(false)

    let handleClick = () => {
        setValue(!value)
    }

    return (
        <header>
            <nav>
                <article id="nombre">
                    <Link
                            activeClass="active"
                            to="Welcome"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-100}
                            >
                    <Navigator to="/">
                        <figure>
                            <h3>JSM</h3>
                        </figure>
                    </Navigator>
                    </Link>
                </article>
                <article id="rigth-side" className="desktop-visible">
                    <ul>
                        <li>
                            <Link
                            activeClass="active"
                            to="Principal"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-100}
                            >
                            About
                            </Link>
                        </li>
                        <li>
                            <Link
                            activeClass="active"
                            to="Skills"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-100}
                            >
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link
                            activeClass="active"
                            to="Projects"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-100}
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                            activeClass="active"
                            to="Service"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-100}
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                            activeClass="active"
                            to="Contact"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-100}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </article>
                <article className="mobile-visible" id="burger-article">
                    <article id="burger"onClick={handleClick} className={value ? "active" : null}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </article>
                </article>
                <Toogle theme={props.theme} toggleTheme={props.toggleTheme}/>
            </nav>
            < Burger value={value} handleClick={handleClick} theme={props.theme} toggleTheme={props.toggleTheme}/>
        </header>
    );
}

export default Header;
