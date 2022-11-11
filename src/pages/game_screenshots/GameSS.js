import Header from "../../components/header/Header";
import './gamess.css';
import Image from "../../components/image/Image";

const GameSS = () => {

    return(

        <div className="game-ss-holder">
            <Header text={'Civilization VI'} />

            <div className="disc-text mt-5">
                <p>Screen shots</p>
            </div>

            <div className="d-flex mb-5 images-holder">

                <div className=" image-items p-0 mt-2">
                    <Image src={require('../../assets/images/civ.jpg')} />
                </div>

                <div className=" image-items p-0 mt-2">
                    <Image src={require('../../assets/images/civ.jpg')} />
                </div>

                <div className=" image-items p-0 mt-2">
                    <Image src={require('../../assets/images/civ.jpg')} />
                </div>

                <div className=" image-items p-0 mt-2">
                    <Image src={require('../../assets/images/civ.jpg')} />
                </div>

                <div className=" image-items p-0 mt-2">
                    <Image src={require('../../assets/images/civ.jpg')} />
                </div>

                <div className=" image-items p-0 mt-2">
                    <Image src={require('../../assets/images/civ.jpg')} />
                </div>

                <div className=" image-items p-0 mt-2">
                    <Image src={require('../../assets/images/civ.jpg')} />
                </div>

                <div className=" image-items p-0 mt-2">
                    <Image src={require('../../assets/images/civ.jpg')} />
                </div>


            </div>

        </div>

    );

}

export default GameSS;