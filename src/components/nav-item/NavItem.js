import { Link } from "react-router-dom";
// import Image from "../image/Image";
import './navItem.css';

const Navitem = ({hasImg, src, text, link}) => {

    return(

        <Link className='d-flex align-items-center items-holder' to={link}>
                        
             {hasImg === false ? '' : 

             <div className='icon-box'>
                <img src={src} alt="" />
            </div>
            }           

            <p>{text}</p>  

        </Link>

    );
}

Navitem.contexTypes = {
    hasImg: true,
    src: 'none'
}

export default Navitem;