
import './navItem.css';

const Navitem = ({ hasImg, src, text, val }) => {

    return (

        <div className='d-flex align-items-center items-holder' data-val={val}>

            {hasImg === false ? '' :

                <div className='icon-box'>
                    <img src={src} alt="" />
                </div>
            }

            <p>{text}</p>

        </div>

    );
}

Navitem.contexTypes = {
    hasImg: true,
    src: 'none'
}

export default Navitem;