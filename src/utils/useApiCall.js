import { useEffect, useState } from "react";
import axios from "axios";
import paramDate from "./params/paramDate";
import paramGenres from "./params/paramGenres";
import paramFilter from "./params/paramFilter";

const useApiCall = (query, page) => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);

    let params = {
        key: process.env.REACT_APP_KEY,
        page: page,
    }

    let date = paramDate(query);
    let genres = paramGenres(query);
    let filter = paramFilter(query);

    if (date) params.dates = date;
    if (genres) params.genres = genres;
    if (filter) {
        params = Object.assign(filter, params);
    }

    console.log(params);


    useEffect(() => {

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