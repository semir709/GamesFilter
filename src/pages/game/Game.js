import Header from "../../components/header/Header";
import './game.css';
import InfoDate from "../../components/infoCard/InfoDate";
import Platforms from "../../components/platforms/Platforms";
import Image from "../../components/image/Image";

import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Rating from "../../components/rating/Rating";
import parse from 'html-react-parser';
import LightBox from "../../components/lightBox/LightBox";
import Modal from "../../components/lightBox/components/Modal";

const Game = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [screenshots, setScreenshots] = useState(null);
    // const [movies, setMovies] = useState(null);

    const endpoints = [
        `https://api.rawg.io/api/games/${id}`,
        `https://api.rawg.io/api/games/${id}/screenshots`,
        `https://api.rawg.io/api/games/${id}/movies`
    ]

    useEffect(() => {
        axios.all(
            endpoints.map((endpoint) =>
                axios.get(
                    endpoint,
                    {
                        method: 'GET',
                        params: { key: process.env.REACT_APP_KEY }
                    }
                ))).then(res => {
                    console.log(res[0]);
                    setData(res[0].data);
                    // setData(res[0].data);
                    // console.log(res[2].data.results, '------------');
                    // let media = res[2].data.concat(res[1].data.response);
                    // setScreenshots(media);
                });
    }, [id]);

    // console.log(data);
    // console.log(screenshots);



    if (!data) return <p>Loading...</p>


    return (

        <div className="game-page-holder mx-5">

            <Header text={data.name} />

            <div className="game-desc mt-3 mb-5">
                {parse(data.description)}
            </div>


            <div className="game-info-holder mt-4">

                <div className="row justify-content-between">

                    <div className=" col-6 info-game ">


                        <div className="d-flex justify-content-between">

                            <div className="info">
                                <div className="d-flex">{data.genres.map(({ name, id }, Index) => {
                                    return <p key={id} className='me-1'>{name}{data.genres.length - 1 === Index ? '' : ','}</p>
                                })}</div>
                                <InfoDate text={'Relased'} date={data.released} />
                                <Rating rating={data.rating} />
                            </div>

                            <div className="diagram-info-holder">

                                {/* <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-label="Segment one" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                    <div className="progress-bar bg-success" role="progressbar" aria-label="Segment two" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                    <div className="progress-bar bg-info" role="progressbar" aria-label="Segment three" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                </div> */}

                            </div>

                        </div>

                        <div className="platform-info">

                            <div className="platform-header">
                                <p>Platform relased</p>
                                <div className="line"></div>
                            </div>

                            <div>

                                {data.platforms.map(({ platform, id }) => {
                                    return <p className="my-2" key={platform.id}>{platform.name}</p>
                                })}

                            </div>

                        </div>

                        <div className="store-info">

                            <div className="platform-header">
                                <p>Store to buy</p>
                                <div className="line"></div>
                            </div>

                            <div>

                                {data.stores.map(({ store, id }) => {
                                    return <p className="my-2" key={store.id}>{store.name}</p>
                                })}

                            </div>

                        </div>

                        <div className="more-info">
                            <div className="platform-header">
                                <p>Website links</p>
                                <div className="line"></div>
                            </div>

                            <a className="d-block" href={data.website} target="_blank">{data.name} Website</a>
                            <a href={data.reddit_url} target="_blank">{data.reddit_name} Reddit</a>

                        </div>

                    </div>

                    <div className=" col-5 p-0 media-game">

                        {/* <div className="game-video">
                            <Image src={data.background_image_additional} />
                        </div> */}

                        <div className=" mb-4 d-flex justify-content-between row ">
                            {/* <LightBox data={screenshots.results} /> */}
                            <LightBox />
                        </div>


                    </div>


                </div>

            </div>

        </div >

    );
}

export default Game;