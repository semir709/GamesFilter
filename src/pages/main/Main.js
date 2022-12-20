import "./main.css";
import Header from "../../components/header/Header";
import DropFilter from "../../components/dropdownFilter/DropFilter";
import Card from "../../components/card/Card";
import useApiCall from "../../utils/api/useApiCall";
import Masonry from "react-masonry-css";

import { useEffect, useState } from "react";
import { useRef } from "react";
import { useCallback } from "react";

const Main = ({ query }) => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState(false);
  // const [finalQuery, setFinalQuery] = useState(query);

  // useEffect(() => {
  //   setFinalQuery(query);
  //   setFilter('');
  // }, [query]);


  let { loading, error, data, hasMore } = useApiCall(query, page, filter);

  const observer = useRef();
  const lastCardElementRef = useCallback((node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {

      if (entries[0].isIntersecting && hasMore) {
        setPage((prev) => prev + 1);
      }

    });
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);


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
          if (data.length === index + 1) {
            return <Card ref={lastCardElementRef} text={name} src={background_image} released={released} genres={genres} rating={rating} platforms={platforms} key={index} />;
          } else {
            return <Card text={name} src={background_image} released={released} genres={genres} rating={rating} platforms={platforms} key={index} />;
          }

        })}
      </Masonry>
    </div>
  );
};

export default Main;
