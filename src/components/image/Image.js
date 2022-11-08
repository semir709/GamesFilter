import './image.css'

const Image = ({src}) => {

    return(

        <div className="img-holder">
            <img src={src} alt="" />
        </div>

    );

}

export default Image;