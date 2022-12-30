import formatDate from "../formatDate";

const paramFilter = (query) => {

    let param;

    if (query === "oldest") {

        const currentYear = new Date().getFullYear();
        const firstDay = '2004-01-01';
        const lastDay = formatDate(new Date(currentYear, 11, 31));

        param = {
            ordering: 'released',
            dates: firstDay + ',' + lastDay
        };
    } else if (query === "latest") {
        const currentYear = new Date().getFullYear();
        const firstDay = formatDate(new Date(currentYear, 0, 1));
        const lastDay = formatDate(new Date(currentYear, 11, 31));

        param = {
            ordering: '-released',
            dates: firstDay + ',' + lastDay
        }

    } else if (query === "best") {
        param = { ordering: '-rating' };
    }
    else {
        param = false;
    }

    return param;


}

export default paramFilter;