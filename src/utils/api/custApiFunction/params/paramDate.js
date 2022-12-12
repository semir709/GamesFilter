
import formatDate from "../formatDate";

const paramDate = (query) => {

    let param;

    if (query === "week") {
        const today = new Date();

        const firstDay = formatDate(new Date(today.setDate(today.getDate() - today.getDay())));
        const lastDay = formatDate(new Date(today.setDate(today.getDate() - today.getDay() + 6)));

        param = {
            dates: firstDay + ',' + lastDay
        }

        // param = firstDay + ',' + lastDay;

    } else if (query === "month") {

        const month = new Date();
        const firstDayMonth = formatDate(new Date(month.getFullYear(), month.getMonth(), 1));
        const lastDayMonth = formatDate(new Date(month.getFullYear(), month.getMonth() + 1, 0));

        param = {
            dates: firstDayMonth + ',' + lastDayMonth
        }

        // param = firstDayMonth + ',' + lastDayMonth;


    } else if (query === "year") {
        const currentYear = new Date().getFullYear();
        const firstDay = formatDate(new Date(currentYear, 0, 1));
        const lastDay = formatDate(new Date(currentYear, 11, 31));

        // param = firstDay + ',' + lastDay;

        param = {
            dates: firstDay + ',' + lastDay
        }
    }
    else {
        param = false;
    }

    return param;

}

export default paramDate;