

const paramGenres = (query) => {
    let param;

    if (query === "action" ||
        query === "strategy" ||
        query === "role-playing-games-rpg" ||
        query === "shooter" ||
        query === "adventure" ||
        query === "puzzle" ||
        query === "racing" ||
        query === "sports") {

        param = query;

    }
    else {
        param = false;
    }

    return param;

}

export default paramGenres;
