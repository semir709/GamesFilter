import { useEffect, useState } from "react";
import axios from "axios";
import formatDate from "./formatDate";

const useApiCall = (query, page, category) => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);

    // console.log('query', query);
    // console.log('category', category);


    let params = {
        key: process.env.REACT_APP_KEY,
        page: page,
    }

    if (query === "week" && category === 'games') {
        const today = new Date();

        const firstDay = formatDate(new Date(today.setDate(today.getDate() - today.getDay())));
        const lastDay = formatDate(new Date(today.setDate(today.getDate() - today.getDay() + 6)));

        params.dates = firstDay + ',' + lastDay;

    } else if (query === "month" && category === 'games') {

        const month = new Date();
        const firstDayMonth = formatDate(new Date(month.getFullYear(), month.getMonth(), 1));
        const lastDayMonth = formatDate(new Date(month.getFullYear(), month.getMonth() + 1, 0));

        params.dates = firstDayMonth + ',' + lastDayMonth;

    } else if (query === "year" && category === 'games') {
        const currentYear = new Date().getFullYear();
        const firstDay = formatDate(new Date(currentYear, 0, 1));
        const lastDay = formatDate(new Date(currentYear, 11, 31));

        params.dates = firstDay + ',' + lastDay;
    }

    useEffect(() => {

        axios.get(`https://api.rawg.io/api/${category}`, {
            method: 'GET',
            params: params
        }).then(res => {

            if (category === 'games') {
                setData(prev => {
                    return res.data.results.map(({ name, released, background_image, rating, ratings, platforms, genres }) => {
                        return { name, released, background_image, rating, ratings, platforms, genres }
                    });
                });
            } else if (category === 'genres') {
                setData(prev => {
                    return res.data.results.map(({ name, image_background, games }) => {
                        return { name, image_background, games }
                    });
                });
            }

            // return [...prev, res.data.results.map(({ name, released, background_image, rating, ratings, platforms, genres }) => {
            //     return { name, released, background_image, rating, ratings, platforms, genres }
            // })]
            setLoading(false);
        }).catch(err => {
            console.log('Error')
            setError(true);
        });


    }, [query, page, category]);

    return { loading, error, data, ctg: category };


}

export default useApiCall;