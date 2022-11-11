import './card.css';
import Image from '../image/Image.js'
import Platforms from '../platforms/Platforms';
import InfoDate from '../infoCard/InfoDate';

const Card = ({text}) => {

    return(

        <div className="card-item">
            

            <div className='card-img-holder'>
                <Image  src={require('../../assets/images/civ.jpg')} />
            </div>

            <div className='info-card-holder'>

                <h2>{text}</h2>

                <div className='info-card'>
                    <p>Action, Strategy</p>
                    <InfoDate text={'Relased'} date={'21.02.2002'} />
                </div>

                <div className='d-flex justify-content-between mt-4 footer-card-info'>

                    <p>Rating: 4.27</p>

                    <Platforms />

                </div>

            </div>

        </div>

    );
}

export default Card;