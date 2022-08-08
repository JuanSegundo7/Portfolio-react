import React from 'react';
import "./infoArticle.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InfoArticle = (props) => {
    let array = props.array

    return (
        <article id="wrapper">
            <article id="wrapper-container">
                <article id="wrapper-x">
                    <FontAwesomeIcon icon="fa-xmark" onClick={() => props.setState(false)}/> 
                </article>
                    <h2>{props.title}</h2>
                <article>
                    {array.map((item, i) => {
                        return(
                            <article key={i} className="wrapper-p-article">
                                <FontAwesomeIcon icon="fa-bolt"/> 
                                <p>{item}</p>
                            </article>
                        )
                    })}
                </article>
            </article>
        </article>
    );
}

export default InfoArticle;
