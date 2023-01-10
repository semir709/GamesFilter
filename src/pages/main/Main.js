import "./main.css";
import Header from "../../components/header/Header";
import DropFilter from "../../components/dropdownFilter/DropFilter";
import Card from "../../components/card/Card";
import useApiCall from "../../utils/api/useApiCall";
import Masonry from "react-masonry-css";

import { memo, useEffect, useState } from "react";
import { useRef } from "react";
import { useCallback } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

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

  let { loading, error, data, hasMore } = useApiCall(category, page, filter);

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


  // const fetchData = async ({ pageParam = 1 }) => {
  //   return axios.get(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_KEY}&page=${pageParam}`);
  // }

  // const {
  //   data,
  //   error,
  //   fetchNextPage,
  //   hasNextPage,
  //   isFetching,
  //   isFetchingNextPage,
  //   status,
  // } = useInfiniteQuery({
  //   queryKey: ['games'],
  //   queryFn: fetchData,
  //   getNextPageParam: (lastPage, allPages) => {
  //     console.log(lastPage);
  //     return lastPage.data.next;
  //   },
  // })

  // const loadMoreActive = useRef(false);
  // const loadMore = () => {
  //   fetchNextPage();
  //   loadMoreActive.current = true;
  // }


  console.log(data);

  const breakpointColumnsObj = {
    default: 4,
    1200: 3,
    758: 2,
    500: 1
  };

  return (
    <div className="main-holder mx-5">
      <Header text={"All games"} />

      <div className="d-flex">
        <DropFilter text={filter} setFilter={setFilter} />
      </div>
      <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid">
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

      {/* <Masonry breakpointCols={4} className="my-masonry-grid">

        {data && data.pages.map(({ data }, i) => (
          data.results.map(({ name, released, background_image, rating, ratings, platforms, genres, id }, index) => {
            if (data.results.length === index + 1) {
              return <Card ref={lastCardElementRef} text={name} src={background_image} released={released} genres={genres} rating={rating} platforms={platforms} key={id} card_id={id} />;
            } else {
              return <Card text={name} src={background_image} released={released} genres={genres} rating={rating} platforms={platforms} key={id} card_id={id} />;
            }
          })
        ))}
      </Masonry> */}


      {/* {loadMoreActive.current === false && <div>
        <button
          onClick={() => loadMore()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
              ? 'Load More'
              : 'Nothing more to load'}
        </button>
      </div>}

      <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div> */}

      {/* <InfiniteScroll
        dataLength={data.length} //This is important field to render the next data
        next={() => setPage(page + 1)}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }

      >

        <Masonry breakpointCols={4} className="my-masonry-grid">

          {data && data.map(({ name, released, background_image, rating, ratings, platforms, genres, id }, index) => {
            return <Card text={name} src={background_image} released={released} genres={genres} rating={rating} platforms={platforms} key={id} card_id={id} />;
          })}
        </Masonry>

      </InfiniteScroll> */}

    </div>
  );
};

export default Main;
