import { useEffect, useState } from "react";
import axios from "axios";
import formatDate from "./formatDate";

const useApiCall = (query, page, category) => {

    let params = {
        key: process.env.REACT_APP_KEY,
        page: page,
    }

    if (query === "week") {
        const today = new Date();

        const firstDay = formatDate(new Date(today.setDate(today.getDate() - today.getDay())));
        const lastDay = formatDate (new Date(today.setDate(today.getDate() - today.getDay() + 6)));

        params.dates = firstDay + ',' + lastDay;

    } else if(query === "month") {

        const month = new Date();
        const firstDayMonth = formatDate(new Date(month.getFullYear(), month.getMonth(), 1));
        const lastDayMonth = formatDate(new Date(month.getFullYear(), month.getMonth() + 1, 0));

        params.dates = firstDayMonth + ',' + lastDayMonth;

    } else if(query === "year") {
        const currentYear = new Date().getFullYear();
        const firstDay = formatDate(new Date(currentYear, 0, 1));
        const lastDay = formatDate(new Date(currentYear, 11, 31));

        params.dates = firstDay + ',' + lastDay;
    }
   
    useEffect(() => {

        axios.get(`https://api.rawg.io/api/${category}`,{
            method:'GET',
            params: params
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log('Error')
            console.log(err)
        });


    }, [query, page, category]);

return null;


}

export default useApiCall;