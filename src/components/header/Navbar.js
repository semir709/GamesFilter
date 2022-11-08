
import {Link} from 'react-router-dom';
import search from '../../assets/svg/search.svg';
import Image from '../image/Image';

import './navbar.css';

const Navbar = () => {

    return(

        <header className="navbar-holder d-flex justify-content-between align-items-center mt-3 px-5">

            <Link to={'/'}>Logo</Link>

            <div className='input-group d-flex align-items-center'>

                <label htmlFor="search-input">

                    <div className='search-holder'>
                        <Image src={search} />
                    </div>

                </label>

                <input id='search-input' type="text" placeholder='Search...' />

            </div>

            <Link to={'/about'}>About</Link>

        </header>

    );
}

export default Navbar;