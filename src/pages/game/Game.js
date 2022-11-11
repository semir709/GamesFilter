import Header from "../../components/header/Header";
import './game.css';
import InfoDate from "../../components/infoCard/InfoDate";
import Platforms from "../../components/platforms/Platforms";
import Image from "../../components/image/Image";

import { Link } from "react-router-dom";

const Game = () => {

    return(

        <div className="game-page-holder mx-5">

            <Header text={'Civilization VI'} />

            <div className="game-info-holder mt-4">

                <div className="row justify-content-between">

                    <div className=" col-6 info-game ">

                        <div className="d-flex justify-content-between">

                            <div className="info">
                                <p>Action, Strategy</p>
                                <InfoDate text={'Relased'} date={'21.02.2002'} />
                                <p>Rating: 4.27</p>
                                <Platforms />
                            </div>

                            <div className="diagram-info-holder">

                                

                            </div>

                        </div>

                        <div className="platform-info">

                            <div className="platform-header">
                                <p>Platform relased</p>
                                <div className="line"></div>
                            </div>

                            <div className="platform-info pt-4">
                                <InfoDate text={'Windows'} date={'21.02.2002'} />
                                <InfoDate text={'Xbox'} date={'21.02.2002'} />
                                <InfoDate text={'Playstation'} date={'21.02.2002'} />
                            </div>

                        </div>

                    </div>

                    <div className=" col-5 p-0 media-game">

                        <div className="game-video">
                            <Image src={require('../../assets/images/civ.jpg')} />
                        </div>

                        <div className="game-images mb-4 d-flex justify-content-between">

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

                            <div className="text-more-holder">
                                <Link to={'/game/screenshots'} >See More....</Link>
                            </div>

                        </div>

                        
                    </div>


                </div>

            </div>

        </div>

    );
}

export default Game;