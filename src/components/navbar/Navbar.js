
import {Link} from 'react-router-dom';
import svg from '../../utils/svgLinks/svg';
import Image from '../image/Image';

import './navbar.css';

const Navbar = () => {

    return(

        <header className="navbar-holder d-flex justify-content-between align-items-center mt-3 px-3">

            <Link to={'/'}>Logo</Link>

            <div className='input-group d-flex align-items-center mx-4'>

                <label htmlFor="search-input" className='label-search'>
                    <img src={svg.search} alt="search" />
                </label>

                <input id='search-input' type="text" placeholder='Search...' />

            </div>

            <Link to={'/about'}>About</Link>

        </header>

    );
}

export default Navbar;