import "./main.css";
import Header from "../../components/header/Header";
import DropFilter from "../../components/dropdownFilter/DropFilter";
import Card from "../../components/card/Card";
import useSeperateApi from "../../utils/api/custApiFunction/useSeperateApi";
import useApiCall from "../../utils/api/useApiCall";
import Masonry from "react-masonry-css";

import { useEffect, useState } from "react";
import { useRef } from "react";
import { useCallback } from "react";

const Main = ({ query }) => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState(false);
  const [finalQuery, setFinalQuery] = useState(query);


  useEffect(() => {
    setFinalQuery(query);
    setFilter('');
  }, [query]);

  useEffect(() => {
    setFinalQuery(filter);
  }, [filter]);

  let { loading, error, data } = useApiCall(finalQuery, page);

  // const observer = useRef();
  // const lastCardElementRef = useCallback((node) => {
  //   if (loading) return
  //   if (observer.current) observer.current.disconnect();
  //   observer.current = new IntersectionObserver(entries => {
  //     if (entries[0].isIntersecting) {
  //       console.log(entries);
  //     }
  //   });
  //   if (node) observer.current.observe(node);

  // });



  return (
    <div className="main-holder mx-5">
      <Header text={"All games"} />

      <div className="d-flex">
        <DropFilter text={filter} setFilter={setFilter} />
      </div>

      {loading && 'loading'}
      {error && 'error'}

      <Masonry breakpointCols={4} className="my-masonry-grid">
        {data && data.map(({ name, released, background_image, rating, ratings, platforms, genres }, index) => {
          return <Card text={name} src={background_image} released={released} genres={genres} rating={rating} platforms={platforms} key={index} />;
        })}
      </Masonry>
    </div>
  );
};

export default Main;
