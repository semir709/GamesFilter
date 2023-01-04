import { useEffect, useRef, useState } from "react";
import axios from "axios";
import paramDate from "./custApiFunction/params/paramDate";
import paramGenres from "./custApiFunction/params/paramGenres";
import paramFilter from "./custApiFunction/params/paramFilter";
import { type } from "@testing-library/user-event/dist/type";

const useApiCall = (query, page, filter) => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);
    const [hasMore, setHasMore] = useState(false);
    const [params, setParams] = useState({
        key: process.env.REACT_APP_KEY,
        page: page,
    });
    const [finalQuery, setFinalQuery] = useState(query);

    params.page = page;

    useEffect(() => {
        let filterFinall = paramFilter(filter);
        Object.assign(params, filterFinall);
        setFinalQuery(filter);
        setData([]);
        setLoading(false);
    }, [filter]);

    useEffect(() => {

        Object.keys(params).forEach(key => {
            if (key !== 'key' && key !== 'page') {
                delete params[key];
            }
        });
        if (typeof query === 'undefined') {
            setFinalQuery({
                key: process.env.REACT_APP_KEY,
                page: page,
            });
        } else if (query.length > 0) params.genres = query;

        setFinalQuery(query);
        setData([]);
        setLoading(false);

    }, [query]);

    useEffect(() => {
        setLoading(true);

        axios.get(`https://api.rawg.io/api/games`, {
            method: 'GET',
            params: params,
        }).then(res => {

            setData(prev => {
                return [...prev, ...res.data.results.map(({ name, released, background_image, rating, ratings, platforms, genres, id }) => {
                    return { name, released, background_image, rating, ratings, platforms, genres, id }
                })];
            });

            setHasMore(res.data.results.length > 0);
            setLoading(false);
        }).catch(err => {
            setError(true);
        });


    }, [page, finalQuery]);

    return { loading, error, data, hasMore };


}

export default useApiCall;