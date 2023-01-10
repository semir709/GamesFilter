import "./sidenav.css";
import Navitem from "../nav-item/NavItem";
import svg from "../../utils/svg";
import { Link } from "react-router-dom";

const Sidenav = ({ setQuery, onClick }) => {
  // const takeVal = (e) => {
  //   const value = e.target.closest(".items-holder").getAttribute("data-val");
  //   setQuery(value);
  // };

  return (
    <div className="side-nav-holder ps-3">
      < ul className="mt-5" >
        <li>
          <p>Genres</p>
        </li>
        <li>
          <Link to={'action'} onClick={onClick}>
            <Navitem
              text={"Action"}
              val={"action"}
              hasImg={false}
            />
          </Link>
        </li>
        <li>
          <Link to={'strategy'} onClick={onClick}>
            <Navitem
              text={"Strategy"}
              val={"strategy"}
              hasImg={false}
            />
          </Link>
        </li>
        <li>
          <Link to={"role-playing-games-rpg"} onClick={onClick}>
            <Navitem
              text={"RPG"}
              val={"role-playing-games-rpg"}
              hasImg={false}
            />
          </Link>
        </li>
        <li>
          <Link to={"shooter"} onClick={onClick}>
            <Navitem
              text={"Shooter"}
              val={"shooter"}
              hasImg={false}
            />
          </Link>
        </li>
        <li>
          <Link to={"adventure"} onClick={onClick}>
            <Navitem
              text={"Adventure"}
              val={"adventure"}
              hasImg={false}
            />
          </Link>
        </li>
        <li>
          <Link to={"puzzle"} onClick={onClick}>
            <Navitem
              text={"Puzzle"}
              val={"puzzle"}
              hasImg={false}
            />
          </Link>
        </li>
        <li>
          <Link to={"racing"} onClick={onClick}>
            <Navitem
              text={"Racing"}
              val={"racing"}
              hasImg={false}
            />
          </Link>
        </li>
        <li>
          <Link to={"sports"} onClick={onClick}>
            <Navitem
              text={"Sport"}
              val={"sports"}
              hasImg={false}
            />

          </Link>
        </li>
      </ ul>
    </div >
  );
};

export default Sidenav;
