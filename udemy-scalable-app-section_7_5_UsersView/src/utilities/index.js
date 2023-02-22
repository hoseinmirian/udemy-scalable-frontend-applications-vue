export const loadWidgets = (widgets, basePath) => {
    return widgets.reduce((current, widget) => ({
        ...current,
        [widget]: () => import(`@/${basePath}${widget}`)
    }), {})
}

/**
 * Function to flatten an object.
 * @returns a flat array
 * */
export const flattenObject = (object) => {
    let flatArray = [];
    Object.keys(object).forEach(item => {
        object[item].forEach(item => {
            flatArray.push(item);
        })
    })
    return flatArray
}


export default {loadWidgets, flattenObject}