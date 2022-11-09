import { Link } from "react-router-dom";
import './dropfilter.css';

const DropFilter = ({text, item}) => {

    return(

        <div className="dropdown ms-3 mt-3 filter-holder">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                {text}
            </button>
            <ul className="dropdown-menu">

                {item.map(({name, link}, index) => {
                    return(
                        <li key={index}><Link className="dropdown-item" href={link}>{name}</Link></li>
                    );
                })}
             
            </ul>
        </div>

    );
}

export default DropFilter;