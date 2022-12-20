import './rating.css';

const Rating = ({ rating }) => {

    return (

        <div className='d-flex'>
            <p className='me-2'>Rating: </p>

            {(rating < 1) && <p className='bad-rating'>{rating}</p>}
            {(rating > 1 && rating < 2) && <p className='bad-rating'>{rating}</p>}
            {(rating > 2 && rating < 3) && <p className='solid-rating'>{rating}</p>}
            {(rating > 3 && rating < 4) && <p className='good-rating'>{rating}</p>}
            {(rating > 4 && rating < 5) && <p className='excelent-rating'>{rating}</p>}
            {(rating >= 5) && <p className='excelent-rating'>{rating}</p>}



        </div>

    );

}

export default Rating;