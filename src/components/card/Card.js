import './card.css';
import Image from '../image/Image.js'
import Platforms from '../platforms/Platforms';
import InfoDate from '../infoCard/InfoDate';
import React from 'react';

const Card = React.forwardRef((props, ref) => {

    return (

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

                    <div className='d-flex'>
                        <p className='me-2'>Rating: </p>

                        {(props.rating < 1) && <p className='bad-rating'>{props.rating}</p>}
                        {(props.rating > 1 && props.rating < 2) && <p className='bad-rating'>{props.rating}</p>}
                        {(props.rating > 2 && props.rating < 3) && <p className='solid-rating'>{props.rating}</p>}
                        {(props.rating > 3 && props.rating < 4) && <p className='good-rating'>{props.rating}</p>}
                        {(props.rating > 4 && props.rating < 5) && <p className='excelent-rating'>{props.rating}</p>}
                        {(props.rating >= 5) && <p className='excelent-rating'>{props.rating}</p>}



                    </div>

                    {props.platforms && <Platforms platforms={props.platforms} />}

                </div>

            </div>

        </div>

    );
})

export default Card;