import React from 'react';
import {Route,Routes} from "react-router-dom";
import Home from '../Home/Home'
import Detail_Projects from "../Projects/Detail_Projects/Detail_Father"

const SwitchRouter = (props) => {
    return (
        <Routes>
            <Route exact path="/" element={<Home theme={props.theme} />} />
            <Route path="/projects/:id" element={<Detail_Projects/> } />
        </Routes>
    );
}

export default SwitchRouter ;
