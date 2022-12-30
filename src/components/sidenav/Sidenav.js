import "./sidenav.css";
import Navitem from "../nav-item/NavItem";
import svg from "../../utils/svg";
import { Link } from "react-router-dom";

const Sidenav = ({ setQuery }) => {
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
          <Link to={'action'}>
            <Navitem
              text={"Action"}
              val={"action"}
              hasImg={false}
            />
          </Link>
        </li>
        <li>
          <Link to={'strategy'}>
            <Navitem
              text={"Strategy"}
              val={"strategy"}
              hasImg={false}
            />
          </Link>
        </li>
        <li>
          <Link to={"role-playing-games-rpg"}>
            <Navitem
              text={"RPG"}
              val={"role-playing-games-rpg"}
              hasImg={false}
            />
          </Link>
        </li>
        <li>
          <Link to={"shooter"}>
            <Navitem
              text={"Shooter"}
              val={"shooter"}
              hasImg={false}
            />
          </Link>
        </li>
        <li>
          <Link to={"adventure"}>
            <Navitem
              text={"Adventure"}
              val={"adventure"}
              hasImg={false}
            />
          </Link>
        </li>
        <li>
          <Link to={"puzzle"}>
            <Navitem
              text={"Puzzle"}
              val={"puzzle"}
              hasImg={false}
            />
          </Link>
        </li>
        <li>
          <Link to={"racing"}>
            <Navitem
              text={"Racing"}
              val={"racing"}
              hasImg={false}
            />
          </Link>
        </li>
        <li>
          <Link to={"sports"}>
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
