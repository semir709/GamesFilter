import "./sidenav.css";
import Navitem from "../nav-item/NavItem";
import svg from "../../utils/svg";

const Sidenav = ({ setQuery }) => {
  const takeVal = (e) => {
    const value = e.target.closest(".items-holder").getAttribute("data-val");
    setQuery(value);
  };

  return (
    <div className="side-nav-holder ps-3">
      <ul>
        <li>
          <p>All games</p>
        </li>
        {/* <li>
          <Navitem
            text={"Platforms"}
            val={"platforms"}
            src={svg.box}
            takeVal={takeVal}
          />
        </li> */}
        <li>
          <Navitem
            text={"All"}
            val={"all"}
            src={svg.infinite}
            takeVal={takeVal}
          />
        </li>
        <li>
          <Navitem
            text={"This week"}
            val={"week"}
            src={svg.fire}
            takeVal={takeVal}
          />
        </li>
        <li>
          <Navitem
            text={"This Month"}
            val={"month"}
            src={svg.calendar}
            takeVal={takeVal}
          />
        </li>
        <li>
          <Navitem
            text={"This year"}
            val={"year"}
            src={svg.year}
            takeVal={takeVal}
          />
        </li>
      </ul>

      <ul className="mt-5">
        <li>
          <p>Genres</p>
        </li>
        <li>
          <Navitem
            text={"Action"}
            val={"action"}
            takeVal={takeVal}
            link={"/"}
            hasImg={false}
          />
        </li>
        <li>
          <Navitem
            text={"Strategy"}
            val={"strategy"}
            takeVal={takeVal}
            link={"/"}
            hasImg={false}
          />
        </li>
        <li>
          <Navitem
            text={"RPG"}
            val={"role-playing-games-rpg"}
            takeVal={takeVal}
            link={"/"}
            hasImg={false}
          />
        </li>
        <li>
          <Navitem
            text={"Shooter"}
            val={"shooter"}
            takeVal={takeVal}
            link={"/"}
            hasImg={false}
          />
        </li>
        <li>
          <Navitem
            text={"Adventure"}
            val={"adventure"}
            takeVal={takeVal}
            link={"/"}
            hasImg={false}
          />
        </li>
        <li>
          <Navitem
            text={"Puzzle"}
            val={"puzzle"}
            takeVal={takeVal}
            link={"/"}
            hasImg={false}
          />
        </li>
        <li>
          <Navitem
            text={"Racing"}
            val={"racing"}
            takeVal={takeVal}
            link={"/"}
            hasImg={false}
          />
        </li>
        <li>
          <Navitem
            text={"Sport"}
            val={"sports"}
            takeVal={takeVal}
            link={"/"}
            hasImg={false}
          />
        </li>
      </ul>
    </div>
  );
};

export default Sidenav;
