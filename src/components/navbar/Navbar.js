
import { faTruckLoading } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useRef } from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import svg from '../../utils/svg';
import Sidenav from '../sidenav/Sidenav';

import './navbar.css';

const Navbar = () => {

    const [searchMenu, setSearchMenu] = useState(false);
    const [search, setSearch] = useState('');
    const [data, setData] = useState(null);
    const inputRef = useRef(null);
    const [toggleSidebar, setToggleSidebar] = useState(false);
    const [showNavBar, setShowNavBar] = useState(true);

    const click_menu_btn = (e) => {
        // const menu_items = document.querySelector('#mobile-side-content');
        // menu_items.classList.add('show-menu-items');
        setToggleSidebar(true);
        const overlay = document.querySelector('#overlay');

        overlay.classList.add('show-overlay');
        document.body.classList.add('stop-scrolling');
    }

    const click_close_btn = (e) => {
        setToggleSidebar(false);
        // const menu_items = document.querySelector('#mobile-side-content');
        // menu_items.classList.remove('show-menu-items');
        const overlay = document.querySelector('#overlay');

        overlay.classList.remove('show-overlay');
        document.body.classList.remove('stop-scrolling');
    }

    const handleSearch = (e) => {
        setSearch(e.target.value);

        if (e.target.value === '') setSearchMenu(false);
    }

    let cancel;
    useEffect(() => {
        axios.get(`https://api.rawg.io/api/games`, {
            method: 'GET',
            params: {
                key: process.env.REACT_APP_KEY,
                search: search
            },
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            setData(res.data.results);
        }).catch(e => {
            if (axios.isCancel(e)) return
        });

        return () => cancel()
    }, [search]);

    useEffect(() => {

        if (document.activeElement === inputRef.current && inputRef.current.value.length > 0) {
            setSearchMenu(true);
        }

    }, [data]);

    window.onclick = (e) => {
        if (e.target !== inputRef.current) {
            setSearchMenu(false);
            inputRef.current.value = '';
        }
    }

    const sideClick = () => {
        const overlay = document.querySelector('#overlay');
        overlay.classList.remove('show-overlay');
        document.body.classList.remove('stop-scrolling');
        setToggleSidebar(false);
    }

    let oldScrollY = 0;
    const contorlNavbar = () => {

        if (window.scrollY > oldScrollY) {
            setShowNavBar(true);
        } else if (window.scrollY < oldScrollY && window.scrollY !== 0) {
            setShowNavBar(false);
        } else if (window.scrollY < oldScrollY && window.scrollY === 0) {
            setShowNavBar(true);
        }

        oldScrollY = window.scrollY;
    }

    useEffect(() => {
        window.addEventListener('scroll', contorlNavbar);

        return () => {
            window.removeEventListener('scroll', contorlNavbar);
        }
    }, []);

    return (


        <header className={`${showNavBar && 'navbar-holder-show '}  navbar-holder d-flex justify-content-between align-items-center mt-3 px-3`}>

            <Link to={'/'}>Logo</Link>

            <div className='search-wrapper'>

                <div className='input-group d-flex align-items-center '>

                    <label htmlFor="search-input" className='label-search'>
                        <img src={svg.search} alt="search" />
                    </label>

                    <input id='search-input' ref={inputRef} onChange={handleSearch} type="text" placeholder='Search...' />

                </div>

                <div className='search-res-wrapper'>

                    {!data && <div>Loading...</div>}

                    {searchMenu && data.map(({ name, id, background_image }) => {
                        return <Link to={`game/${id}`} key={id}>
                            <div className='res-item'>
                                <img src={background_image} alt="" />
                                <p>{name}</p>
                            </div>
                        </Link>

                    })}
                </div>

            </div>

            <Link className='about-text' to={'/about'}>About</Link>

            <div className='mobile-side-content-holder'>
                <div className='mobile-menu-open' onClick={click_menu_btn}>
                    <img src={svg.menu} alt="asd" />
                </div>

                {toggleSidebar && <div className='mobile-side-content' id='mobile-side-content'>

                    <div className='mobile-menu-close' onClick={click_close_btn}>
                        <img src={svg.close} alt="" />
                    </div>

                    <Sidenav onClick={sideClick} />

                    <Link className='about-text' to={'/about'}>About</Link>

                </div>}

            </div>


        </header>




    );
}

export default Navbar;