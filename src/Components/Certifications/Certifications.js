import React, {useState} from 'react';
import Digital from "./imgs/digital.png"
import Digital_black from "./imgs/digital_black2.png"
import Henry from "./imgs/soyHenry.png"
import Henry_black from "./imgs/soyHenry-black.png"

import InfoImgs from "../InfoArticle/infoImgs"
import Diploma from "./imgs/diploma-1.png"
import Diploma2 from "./imgs/diploma-2.png"
import "./Certifications.css"


const Certifications = (props) => {
    const [state, setState] = useState(false)

    let info

    if(state === 1){
        info = <InfoImgs img={Diploma} setState={setState}/>
    }else if(state === 2){
        info = <InfoImgs img={Diploma2} setState={setState} />
    }

    
    return (
        <React.Fragment>
    <section id="Certifications">
        <h2>Certifications</h2>
        <div id="Certifications-container">
            <article onClick={() => setState(1)}>
                <figure>
                    <img src={props.theme === "light" ? Digital : Digital_black } id="henry" />
                </figure>
                <div className="view-more">
                    <p>view more</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"/></svg>
                </div>
            </article>
            <article onClick={() => setState(2)}>
                <figure>
                    <img src={props.theme === "light" ? Henry : Henry_black } id="henry" />
                </figure>
                <div className="view-more">
                    <p>view more</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"/></svg>
                </div>
            </article>
        </div>
    </section>
    {info}
    </React.Fragment>
    );
}

export default Certifications;
