import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import './loading.css';
const Loading = ({ fontSize }) => {

    return (

        <div className='circle-wrapper d-flex justify-content-center'>
            <AiOutlineLoading3Quarters className='circle-icon' fontSize={fontSize} />

            <div className='div'>

            </div>
        </div>
    );

}

export default Loading;