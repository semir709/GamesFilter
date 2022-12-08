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

const Main = ({ query }) => {
  const [page, setPage] = useState(1);

  let { loading, error, data } = useApiCall(query, page);

  useEffect(() => {
    const divs = document.querySelectorAll('[class*="col"]');

    divs.forEach(el => {
      el.innerHTML = '';
    });

  }, [data]);

  // console.log(data);

  const { col1, col2, col3, col4 } = useSeperateApi(data);
  // console.log(col1);


  return (
    <div className="main-holder mx-5">
      <Header text={"All games"} />

      <div className="d-flex">
        <DropFilter text={"Order by:"} item={items} />
      </div>

      {loading && 'loading'}
      {error && 'error'}

      {data &&

        <div className="mt-5 card-holder">
          <div className="col1">
            {col1 && col1.map(({ name, released, background_image, rating, ratings, platforms, genres }, index) => {
              return <Card text={name} src={background_image} released={released} genres={genres} rating={rating} platforms={platforms} key={index} />;
            })}
          </div>
          <div className="col2">
            {col2 && col2.map(({ name, released, background_image, rating, ratings, platforms, genres }, index) => {
              return <Card text={name} src={background_image} released={released} genres={genres} rating={rating} platforms={platforms} key={index} />;
            })}
          </div>
          <div className="col3">
            {col3 && col3.map(({ name, released, background_image, rating, ratings, platforms, genres }, index) => {
              return <Card text={name} src={background_image} released={released} genres={genres} rating={rating} platforms={platforms} key={index} />;
            })}
          </div>
          <div className="col4">
            {col4 && col4.map(({ name, released, background_image, rating, ratings, platforms, genres }, index) => {
              return <Card text={name} src={background_image} released={released} genres={genres} rating={rating} platforms={platforms} key={index} />;
            })}
          </div>
        </div>
      }

    </div>
  );
};

export default Main;
