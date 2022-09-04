import React from 'react';
import "./infoArticle.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InfoImgs = (props) => {
    console.log(props)
    return (
        <article id="wrapper">
            <article id="wrapper-container-img">
                <article id="wrapper-x">
                    <FontAwesomeIcon icon="fa-xmark" onClick={() => props.setState(false)}/> 
                </article>
                <h3>{props.diploma}</h3>
                    <figure>
                        <img src={props.img}></img>
                    </figure>
            </article>
        </article>
    );
}

export default InfoImgs;