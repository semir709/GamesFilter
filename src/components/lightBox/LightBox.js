
import { useState } from "react";
import Modal from "./components/Modal";
import './lightBox.css';

const LightBox = ({ media }) => {

    const [clickedImg, setClickedImg] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);
    // const [type, setType] = useState(null);

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
            if (media[totalLength - 1].image?.length > 0) newUrl = media[totalLength - 1].image;
            if (media[totalLength - 1].data?.max.length > 0) newUrl = media[totalLength - 1].data.max;
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


    return (

        <div className="light-box-wrapper">

            {media.map((prop, index) => {

                if (prop.data?.max.length > 0) {
                    return <div key={prop.id} className="content-wrapper wrapper-video">
                        <video src={prop.data.max} controls poster={prop.preview}></video>
                    </div>
                } else if (prop.image?.length > 0) {
                    return <div key={prop.id} className="content-wrapper">
                        <img src={prop.image} onClick={(e) => handleClick(prop, index, e)}></img>
                    </div>
                }
            })}

            <div>

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

        </div>

    );
}

export default LightBox;