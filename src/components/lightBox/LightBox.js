
import { useRef } from "react";
import { useState } from "react";
import Modal from "./components/Modal";
import './lightBox.css';

const data = [
    {
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        type: 'mp4',
        img: 'https://images.pexels.com/photos/14683126/pexels-photo-14683126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        url: 'https://images.pexels.com/photos/14683126/pexels-photo-14683126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        type: 'jpg'
    },
    {
        url: 'https://images.pexels.com/photos/10769588/pexels-photo-10769588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        type: 'jpg'
    },
    {
        url: 'https://images.pexels.com/photos/14840714/pexels-photo-14840714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        type: 'jpg'
    },
    {
        url: 'https://images.pexels.com/photos/14480454/pexels-photo-14480454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        type: 'jpg'
    },
    {
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        type: 'mp4',
        img: 'https://images.pexels.com/photos/14683126/pexels-photo-14683126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
];

const LightBox = () => {

    const [clickedImg, setClickedImg] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [type, setType] = useState(null);

    const handleClick = (item, index, e) => {

        setCurrentIndex(index);
        setClickedImg(item.url);
        setType(item.type);
    };

    const handelRotationLeft = () => {
        const totalLength = data.length;
        if (currentIndex === 0) {
            setCurrentIndex(totalLength - 1);
            const newUrl = data[totalLength - 1].url;
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex - 1;
        const newUrl = data.filter((item) => {
            return data.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0].url;
        const newType = newUrl[0].type;
        setClickedImg(newItem);
        setType(newType);
        setCurrentIndex(newIndex);
    };

    const handelRotationRight = () => {
        const totalLength = data.length;
        if (currentIndex + 1 >= totalLength) {
            setCurrentIndex(0);
            const newUrl = data[0].url;
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex + 1;
        const newUrl = data.filter((item) => {
            return data.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0].url;
        const newType = newUrl[0].type;
        setClickedImg(newItem);
        setType(newType);
        setCurrentIndex(newIndex);
    };


    return (

        <div className="light-box-wrapper">

            {data.map((prop, index) => {

                if (prop.type === 'mp4') {
                    return <div key={index} className="content-wrapper wrapper-video">
                        <video src={prop.url} controls poster={prop.img}></video>
                    </div>
                } else {
                    return <div key={index} className="content-wrapper">
                        <img src={prop.url} onClick={(e) => handleClick(prop, index, e)}></img>
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
                        type={type}
                    />
                )}

            </div>

        </div>

    );
}

export default LightBox;