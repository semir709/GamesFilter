
import {Link} from 'react-router-dom';
import svg from '../../utils/svgLinks/svg';
import Sidenav from '../sidenav/Sidenav';

import './navbar.css';

const Navbar = () => {

    const click_menu_btn = (e) => {
        const menu_items = document.querySelector('#mobile-side-content');
        menu_items.classList.add('show-menu-items');
    } 

    const click_close_btn = (e) => {
        const menu_items = document.querySelector('#mobile-side-content');
        menu_items.classList.remove('show-menu-items');
    } 

    return(

        <header className="navbar-holder d-flex justify-content-between align-items-center mt-3 px-3">

            <Link to={'/'}>Logo</Link>

            <div className='input-group d-flex align-items-center mx-4'>

                <label htmlFor="search-input" className='label-search'>
                    <img src={svg.search} alt="search" />
                </label>

                <input id='search-input' type="text" placeholder='Search...' />

            </div>

            <Link className='about-text' to={'/about'}>About</Link>

            <div className='mobile-side-content-holder'>

                <div className='mobile-menu-open' onClick={click_menu_btn}>
                    <img src={svg.menu} alt="asd" />
                </div>

                <div className='mobile-side-content' id='mobile-side-content'>

                    <div className='mobile-menu-close' onClick={click_close_btn}>
                        <img src={svg.close} alt="" />
                    </div>

                    <Sidenav />

                </div>
                
            </div>


        </header>

    );
}

export default Navbar;