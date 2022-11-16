import "./main.css";
import Header from "../../components/header/Header";
import DropFilter from "../../components/dropdownFilter/DropFilter";
import Card from "../../components/card/Card";

import { useEffect, useRef, useState } from "react";

import { ReactDOM } from "react";

/*replace with real data*/
const items = [
  {
    link: "/home",
    name: "All games",
  },
  {
    link: "/home",
    name: "Some games",
  },
  {
    link: "/home",
    name: "My games",
  },
];

const games = [
  { name: "Mount & Blade II: Bannerlord" },
  { name: "Marvel Snap" },
  { name: "Call of Duty: Modern Warfare II" },
  { name: "Victoria 3" },
  { name: "Nova Lands: Emilia's Mission" },
  { name: "New Tales from the Borderlands" },
  { name: "The Unliving" },
  { name: "Tactics Ogre: Reborn" },
  { name: "Escape First Alchemist: Prologue" },
  { name: "Monster Prom 3: Monster Roadtrip" },
];

const Main = () => {
  let [col1, setCol1] = useState([]);
  let [col2, setCol2] = useState([]);
  let [col3, setCol3] = useState([]);
  let [col4, setCol4] = useState([]);

  // filterData(games);

  useEffect(() => {
    let c = 1;

    // console.log("hey");

    games.forEach(({ name }) => {
      if (c > 4) c = 1;

      if (c === 1) {
        setCol1((arr) => [...arr, name]);
      } else if (c === 2) {
        setCol2((arr) => [...arr, name]);
      } else if (c === 3) {
        setCol3((arr) => [...arr, name]);
      } else if (c === 4) {
        setCol4((arr) => [...arr, name]);
      }
      c++;
    });
  }, []);

  return (
    <div className="main-holder mx-5">
      <Header text={"All games"} />

      <div className="d-flex">
        <DropFilter text={"Order by:"} item={items} />
      </div>

      <div className="mt-5 card-holder">
        <div className="col1">
          {col1.map((name, index) => {
            return <Card text={name} key={index} />;
          })}
        </div>
        <div className="col2">
          {col2.map((name, index) => {
            return <Card text={name} key={index} />;
          })}
        </div>
        <div className="col3">
          {col3.map((name, index) => {
            return <Card text={name} key={index} />;
          })}
        </div>
        <div className="col4">
          {col4.map((name, index) => {
            return <Card text={name} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Main;
