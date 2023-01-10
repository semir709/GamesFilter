import { useState } from 'react';
import './image.css'
import civ from '../../assets/images/civ.jpg';
import { LazyLoadImage } from "react-lazy-load-image-component";

const Image = ({ src }) => {

    return (

        <div className="img-holder" >
            <LazyLoadImage
                src={src}
                alt="src"
                className="img-holder"
                effect="blur"
            />
            {/* <img src={src} alt={src} /> */}
        </div>

    );

}

export default Image;