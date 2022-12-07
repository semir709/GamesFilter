import "./main.css";
import Header from "../../components/header/Header";
import DropFilter from "../../components/dropdownFilter/DropFilter";
import Card from "../../components/card/Card";
import useSeperateApi from "../../utils/useSeperateApi";
import useApiCall from "../../utils/useApiCall";

import { useEffect, useState } from "react";

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

const Main = ({ category, query }) => {
  const [page, setPage] = useState(1);

  let { loading, error, data, ctg } = useApiCall(query, page, category);

  // console.log(query, "<- query --- ", "category ->", category);
  console.log(data);
  console.log('load', loading);
  console.log('errror', error);
  console.log('ctg', ctg);

  const { col1, col2, col3, col4 } = useSeperateApi(games);
  return (
    <div className="main-holder mx-5">
      <Header text={"All games"} />

      <div className="d-flex">
        <DropFilter text={"Order by:"} item={items} />
      </div>

      {loading && 'loading'}
      {error && 'error'}


      {data && (ctg === 'games') && data.map(({ name, released, background_image, rating, ratings, platforms, genres }) => {

        return name;

      })}

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
