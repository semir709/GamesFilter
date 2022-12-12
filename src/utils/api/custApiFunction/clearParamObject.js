
const clearParamObject = (params) => {

    Object.keys(params).forEach(key => {

        if (key !== 'key' && key !== 'page') {
            delete params[key];
        }
    });

}

export default clearParamObject;