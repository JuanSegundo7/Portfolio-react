import React from 'react';
import {useParams} from "react-router-dom"
import Detail from "./Detail_Project"
import Array from "../Info/ProjectsInfo"


const DetailFather = () => {
    const id = useParams()
    let result = Array.filter(object => object.id == id.id)
    let object = result[0]


    return (
        <Detail 
        title={object.title} 
        info={object.info} 
        back={object.back} 
        front={object.front}
        backDepends={object.backDepends}
        frontDepends={object.frontDepends}
        color={object.color}
        img={object.img}
        github={object.github}
        demo={object.demo}
        />
    );
}

export default DetailFather;
