import './header.css';

const Header = ({text}) => {

    return(

        <div className='header-holder'>
            <h1>{text}</h1>
        </div>
    );
}

export default Header;