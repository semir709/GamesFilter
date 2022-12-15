
import './dropfilter.css';
import arrow from '../../assets/svg/arrow_bottom.svg';

const DropFilter = ({ text, setFilter }) => {

    const items = [
        {
            name: "Best rated",
            slug: 'best'
        },
        {
            name: "Latest",
            slug: 'latest'
        },
        {
            name: "Oldest",
            slug: 'oldest'
        },
    ];

    const openOptions = () => {

        const optionsHolder = document.querySelector('#options-holder');
        optionsHolder.classList.toggle('options-show');

    }

    const optionSelect = (e) => {
        const optionsHolder = document.querySelector('#options-holder');
        const value = e.target.getAttribute('data-value');
        const display = document.querySelector('#display-item');

        optionsHolder.classList.remove('options-show');

        setFilter(value);


    }

    return (

        <div className="d-flex dropfilter-holder">

            <div className="btn-holder-filter d-flex align-items-center" onClick={openOptions}>
                <p id='display-item'>Order by: {text}</p>
                <div className="svg-holder-filter">
                    <img src={arrow} alt="" />
                </div>
            </div>

            <div className="options-hoder" id="options-holder">
                <ul>
                    <li onClick={optionSelect} data-value={'best'}>The Best</li>
                    <li onClick={optionSelect} data-value={'oldest'}>From oldest</li>
                    <li onClick={optionSelect} data-value={'latest'}>From newest</li>
                    {/* <li onClick={optionSelect} data-value={'name'}>By name</li> */}
                </ul>
            </div>


        </div >

    );
}

export default DropFilter;