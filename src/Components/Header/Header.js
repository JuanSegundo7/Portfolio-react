import React, {useState} from 'react';
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-scroll";
import Burger from "../Burger/Burger"



const Header = () => {
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
                    <figure>
                        <h3>JSM</h3>
                    </figure>
                    </Link>
                </article>
                <article id="rigth-side" className="desktop-visible">
                    <ul>
                        <li><Link
                            activeClass="active"
                            to="Principal"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-100}
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
                            >
                            Contact
                        </Link></li>
                    </ul>
                </article>
                <article className="mobile-visible" id="burger-article">
                    <article id="burger"onClick={handleClick} className={value ? "active" : null}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </article>
                </article>
                <article id="mode" className="desktop-visible">
                    <FontAwesomeIcon icon="fa-sun" id="sun"/>                
                </article>
            </nav>
            < Burger value={value} handleClick={handleClick}/>
        </header>
    );
}

export default Header;
