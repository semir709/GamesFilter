import "./main.css";
import Header from "../../components/header/Header";
import DropFilter from "../../components/dropdownFilter/DropFilter";
import Card from "../../components/card/Card";
import useApiCall from "../../utils/api/useApiCall";
import Masonry from "react-masonry-css";

import { useEffect, useState } from "react";
import { useRef } from "react";
import { useCallback } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import axios from "axios";

import {
  useInfiniteQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"

const queryClient = new QueryClient();

const Main = () => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState(false);

  const { category } = useParams();

  // let { loading, error, data, hasMore } = useApiCall(category, page, filter);

  // const observer = useRef();
  // const lastCardElementRef = useCallback((node) => {
  //   if (loading) return;
  //   if (observer.current) observer.current.disconnect();
  //   observer.current = new IntersectionObserver(entries => {

  //     if (entries[0].isIntersecting && hasMore) {
  //       setPage((prev) => prev + 1);
  //     }

  //   });
  //   if (node) observer.current.observe(node);
  // }, [loading, hasMore]);

  const {
    status,
    data,
    error,
    isFetching,
    isFetchingNextPage,
    isFetchingPreviousPage,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
  } = useInfiniteQuery(
    ['projects'],
    async ({ pageParam = 0 }) => {
      const res = await axios.get('/api/projects?cursor=' + pageParam)
      return res.data
    },
    {
      getPreviousPageParam: (firstPage) => firstPage.previousId ?? undefined,
      getNextPageParam: (lastPage) => lastPage.nextId ?? undefined,
    },
  )

  console.log(data);

  return (

    <QueryClientProvider client={queryClient}>
      {/* <div className="main-holder mx-5">
        <Header text={"All games"} />

        <div className="d-flex">
          <DropFilter text={filter} setFilter={setFilter} />
        </div>

        <Masonry breakpointCols={4} className="my-masonry-grid">
          {data && data.map(({ name, released, background_image, rating, ratings, platforms, genres, id }, index) => {
            if (data.length === index + 1) {
              return <Card ref={lastCardElementRef} text={name} src={background_image} released={released} genres={genres} rating={rating} platforms={platforms} key={id} card_id={id} />;
            } else {
              return <Card text={name} src={background_image} released={released} genres={genres} rating={rating} platforms={platforms} key={id} card_id={id} />;
            }

          })}
        </Masonry>

        {loading && <Loading fontSize={40} />}
        {error && 'error'}
      </div> */}

    </QueryClientProvider>
  );
};

export default Main;
