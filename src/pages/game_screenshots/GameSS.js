import Header from "../../components/header/Header";
import "./gamess.css";
import Image from "../../components/image/Image";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Modal from "../../components/lightBox/components/Modal";
import Loading from "../../components/loading/Loading";

const GameSS = () => {
  const { id } = useParams();
  const [media, setMedia] = useState(null);
  const [name, setName] = useState(null);
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index, e) => {
    setCurrentIndex(index);
    setClickedImg(item.image);
    // setType(item.type);
  };

  const handelRotationLeft = () => {
    const totalLength = media.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      let newUrl;
      if (media[totalLength - 1].image?.length > 0)
        newUrl = media[totalLength - 1].image;
      if (media[totalLength - 1].data?.max.length > 0)
        newUrl = media[totalLength - 1].data.max;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = media.filter((item) => {
      return media.indexOf(item) === newIndex;
    });
    let newItem;
    if (newUrl[0].image?.length > 0) newItem = newUrl[0].image;
    if (newUrl[0].data?.max.length > 0) newItem = newUrl[0].data.max;
    const newType = newUrl[0].type;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationRight = () => {
    const totalLength = media.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      // const newUrl = media[0].url;
      let newUrl;
      if (media[0].image?.length > 0) newUrl = media[0].image;
      if (media[0].data?.max.length > 0) newUrl = media[0].data.max;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = media.filter((item) => {
      return media.indexOf(item) === newIndex;
    });
    // const newItem = newUrl[0].url;
    let newItem;
    if (newUrl[0].image?.length > 0) newItem = newUrl[0].image;
    if (newUrl[0].data?.max.length > 0) newItem = newUrl[0].data.max;
    const newType = newUrl[0].type;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const endpoints = [
    `https://api.rawg.io/api/games/${id}`,
    `https://api.rawg.io/api/games/${id}/screenshots`,
    `https://api.rawg.io/api/games/${id}/movies`,
  ];

  useEffect(() => {
    axios
      .all(
        endpoints.map((endpoint) =>
          axios.get(endpoint, {
            method: "GET",
            params: { key: process.env.REACT_APP_KEY },
          })
        )
      )
      .then((res) => {
        setName(res[0].data.name);
        const m = res[2].data.results.concat(res[1].data.results);
        setMedia(m);
      });
  }, [id]);

  // if (!media) return <p>Loading...</p>

  if (!media)
    return (
      <div className="setCenter">
        <Loading fontSize={40} />
      </div>
    );

  return (
    <div className="game-ss-holder ">
      <Header text={name} />

      <div className="disc-text mt-5">
        <p>Screen shots</p>
      </div>

      <div className="d-flex mb-5 game-ss-wrapper">
        {media.map((prop, index) => {
          if (prop.data?.max.length > 0) {
            return (
              <div key={prop.id} className="content-wrapper">
                <video
                  src={prop.data.max}
                  controls
                  poster={prop.preview}
                ></video>
              </div>
            );
          } else if (prop.image?.length > 0) {
            return (
              <div key={index} className="content-wrapper">
                <img
                  src={prop.image}
                  onClick={(e) => handleClick(prop, index, e)}
                ></img>
              </div>
            );
          }
        })}
      </div>

      {clickedImg && (
        <Modal
          clickedImg={clickedImg}
          handelRotationRight={handelRotationRight}
          setClickedImg={setClickedImg}
          handelRotationLeft={handelRotationLeft}
          // type={type}
        />
      )}
    </div>
  );
};

export default GameSS;
