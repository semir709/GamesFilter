import { useEffect, useState } from "react";
import axios from "axios";
import paramDate from "./custApiFunction/params/paramDate";
import paramGenres from "./custApiFunction/params/paramGenres";
import paramFilter from "./custApiFunction/params/paramFilter";
import clearParamObject from "./custApiFunction/clearParamObject";

const useApiCall = (query, page) => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);
    const [params, setParams] = useState({
        key: process.env.REACT_APP_KEY,
        page: page,
    });


    useEffect(() => {

        let date = paramDate(query);
        let genres = paramGenres(query);
        let filter = paramFilter(query);

        if (date) {

            clearParamObject(params);
            Object.assign(params, date);
        }
        if (genres) {
            clearParamObject(params);
            Object.assign(params, genres);
        }
        if (filter) {
            Object.assign(params, filter);
        }


        console.log(params);

        axios.get(`https://api.rawg.io/api/games`, {
            method: 'GET',
            params: params
        }).then(res => {

            setData(prev => {
                return res.data.results.map(({ name, released, background_image, rating, ratings, platforms, genres }) => {
                    return { name, released, background_image, rating, ratings, platforms, genres }
                });
            });

            // return [...prev, res.data.results.map(({ name, released, background_image, rating, ratings, platforms, genres }) => {
            //     return { name, released, background_image, rating, ratings, platforms, genres }
            // })]
            setLoading(false);
        }).catch(err => {
            console.log('Error')
            setError(true);
        });


    }, [query, page]);

    return { loading, error, data };


}

export default useApiCall;