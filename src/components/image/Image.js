import { useState } from 'react';
import './image.css'
import civ from '../../assets/images/civ.jpg';

const Image = ({ src }) => {

    const isLoaded = (e) => {
        console.log(e.target);
        e.target.src = src;
    }

    return (

        <div className="img-holder">
            <img src={civ} alt={src} onLoad={isLoaded} />
        </div>

    );

}

export default Image;