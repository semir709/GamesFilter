
import { useState } from 'react';
import { Link } from 'react-router-dom';
import svg from '../../utils/svg';
import Sidenav from '../sidenav/Sidenav';

import './navbar.css';

const Navbar = () => {

    const [searchMenu, setSearchMenu] = useState(false);

    const click_menu_btn = (e) => {
        const menu_items = document.querySelector('#mobile-side-content');
        menu_items.classList.add('show-menu-items');

        const overlay = document.querySelector('#overlay');

        overlay.classList.add('show-overlay');
        document.body.classList.add('stop-scrolling');
    }

    const click_close_btn = (e) => {
        const menu_items = document.querySelector('#mobile-side-content');
        menu_items.classList.remove('show-menu-items');
        const overlay = document.querySelector('#overlay');

        overlay.classList.remove('show-overlay');

        document.body.classList.remove('stop-scrolling');
    }

    return (

        <header className="navbar-holder d-flex justify-content-between align-items-center mt-3 px-3">

            <Link to={'/'}>Logo</Link>

            <div className='search-wrapper'>

                <div className='input-group d-flex align-items-center '>

                    <label htmlFor="search-input" className='label-search'>
                        <img src={svg.search} alt="search" />
                    </label>

                    <input id='search-input' type="text" placeholder='Search...' />

                </div>

                <div className='search-res-wrapper'>

                    {searchMenu && <div className='res-item'>
                        <img src="https://images.pexels.com/photos/14840714/pexels-photo-14840714.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                        <p >Name of the game</p>
                    </div>
                    }
                </div>

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

                    <Link className='about-text' to={'/about'}>About</Link>

                </div>

            </div>


        </header>

    );
}

export default Navbar;