import './card.css';
import Image from '../image/Image.js'
import Platforms from '../platforms/Platforms';
import InfoDate from '../infoCard/InfoDate';

const Card = ({ text, src, released, genres, rating, platforms }) => {

    return (

        <div className="card-item">


            <div className='card-img-holder'>
                <Image src={src} />
            </div>

            <div className='info-card-holder'>

                <h2>{text}</h2>

                <div className='info-card'>
                    <div className='d-flex mb-3 genres-holder'>
                        {genres.map(({ name }, Index) => {
                            return <p key={Index} className='me-1'>{name}{genres.length - 1 === Index ? '' : ','}</p>
                        })}
                    </div>
                    <InfoDate text={'Relased'} date={released} />
                </div>

                <div className='d-flex justify-content-between mt-4 footer-card-info'>

                    <div className='d-flex'>
                        <p className='me-2'>Rating: </p>

                        {(rating > 1 && rating < 2) && <p className='bad-rating'>{rating}</p>}
                        {(rating > 2 && rating < 3) && <p className='solid-rating'>{rating}</p>}
                        {(rating > 3 && rating < 4) && <p className='good-rating'>{rating}</p>}
                        {(rating > 4 && rating < 5) && <p className='excelent-rating'>{rating}</p>}


                    </div>

                    <Platforms platforms={platforms}/>

                </div>

            </div>

        </div>

    );
}

export default Card;