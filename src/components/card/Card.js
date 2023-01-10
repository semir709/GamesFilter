import './card.css';
import Image from '../image/Image.js'
import Platforms from '../platforms/Platforms';
import InfoDate from '../infoCard/InfoDate';
import React, { useEffect } from 'react';
import { Link, ScrollRestoration } from 'react-router-dom';
import Rating from '../rating/Rating';
import { memo } from 'react';

const Card = React.forwardRef((props, ref) => {

    return (

        // <Link to={`/game/${props.card_id}`} preventScrollReset={true} target={'_blank'}>

        <div className="card-item" ref={ref}>


            <div className='card-img-holder'>
                <Image src={props.src} />
            </div>

            <div className='info-card-holder'>

                <h2>{props.text}</h2>

                <div className='info-card'>
                    <div className='d-flex mb-3 genres-holder'>
                        {props.genres && props.genres.map(({ name }, Index) => {
                            return <p key={Index} className='me-1'>{name}{props.genres.length - 1 === Index ? '' : ','}</p>
                        })}
                    </div>
                    <InfoDate text={'Relased'} date={props.released} />
                </div>

                <div className='d-flex justify-content-between mt-4 footer-card-info'>

                    <Rating rating={props.rating} />

                    {props.platforms && <Platforms platforms={props.platforms} />}

                </div>

            </div>

        </div>

        /* </Link> */


    );
})

export default Card;