import svg from "../../utils/svg";

const Platforms = () => {

    return(

        <div className='d-flex'>

            <img className='mx-1' src={svg.windows} alt="windows" />
            <img className='mx-1' src={svg.playstation} alt="playstation" />
            <img className='mx-1' src={svg.xbox} alt="xbox" />

        </div>

    );
}

export default Platforms;