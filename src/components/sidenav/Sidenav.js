import './sidenav.css';
import Navitem from '../nav-item/NavItem';
import svg from '../../utils/svg';


const Sidenav = () => {

    return(

        <div className="side-nav-holder ps-3">

            <ul>
                <li><p>All games</p></li>
                <li><Navitem text={'Platforms'} src={svg.box} link={'/'} /></li>
                <li><Navitem text={'This week'} src={svg.fire} link={'/'} /></li>
                <li><Navitem text={'This Month'} src={svg.calendar} link={'/'} /></li>
                <li><Navitem text={'This year'} src={svg.year} link={'/'} /></li>
                <li><Navitem text={'All'} src={svg.infinite} link={'/'} /></li>
            </ul>

            <ul className='mt-5'>
                <li><p>Genres</p></li>
                <li><Navitem text={'Action'} link={'/'} hasImg={false}/></li>
                <li><Navitem text={'Strategy'} link={'/'} hasImg={false}/></li>
                <li><Navitem text={'RPG'} link={'/'} hasImg={false}/></li>
                <li><Navitem text={'Shooter'} link={'/'} hasImg={false}/></li>
                <li><Navitem text={'Adventure'} link={'/'} hasImg={false}/></li>
                <li><Navitem text={'Puzzle'} link={'/'} hasImg={false}/></li>
                <li><Navitem text={'Racing'} link={'/'} hasImg={false}/></li>
                <li><Navitem text={'Sport'} link={'/'} hasImg={false}/></li>
            </ul>

        </div>

    );
}

export default Sidenav;