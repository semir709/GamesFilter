import { useEffect, useRef, useState } from "react";
import axios from "axios";
import paramDate from "./custApiFunction/params/paramDate";
import paramGenres from "./custApiFunction/params/paramGenres";
import paramFilter from "./custApiFunction/params/paramFilter";

const useApiCall = (query, page) => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);
    const [params, setParams] = useState({
        key: process.env.REACT_APP_KEY,
        page: page,
    });

    // console.log(params);
    // console.log(query);


    let date = paramDate(query);
    let genres = paramGenres(query);
    let filterFinall = paramFilter(query);

    // if (date) {

    //     // Object.keys(params).forEach(key => {

    //     //     if (key !== 'key' && key !== 'page') {
    //     //         delete params[key];
    //     //     }

    //     // });

    //     // Object.assign(params, date);

    //     // console.log('date if');
    //     // clearParamObject(params);
    //     // Object.assign(params, date);
    // }
    if (genres) {

        Object.keys(params).forEach(key => {

            if (key !== 'key' && key !== 'page') {
                delete params[key];
            }

        });

        Object.assign(params, genres);

    }
    if (filterFinall) {

        Object.assign(params, filterFinall);
    }

    useEffect(() => {

        axios.get(`https://api.rawg.io/api/games`, {
            method: 'GET',
            params: params,
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