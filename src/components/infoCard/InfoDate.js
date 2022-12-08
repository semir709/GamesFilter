import './infodate.css';

const InfoDate = ({ text, date }) => {

    return (

        <div className='info-date'>

            <p>{text}: <span>{date === null ? 'No relase date' : date}</span></p>

        </div>

    );
}

export default InfoDate;