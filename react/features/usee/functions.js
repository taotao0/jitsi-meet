export const isEmptyObject = (obj) => {
    return obj && Object.keys(obj).length === 0
}

export const getfileSize = (value) => {
    let s = ['bytes', 'kB', 'MB', 'GB', 'TB', 'PB'];
    let e = Math.floor(Math.log(value) / Math.log(1024));
    return (value / Math.pow(1024, e)).toFixed(2) + " " + s[e];
}

export const getToday = (value) => {
    var date = new Date(value);
    var year = date.getFullYear();
    var month = ("0" + (1 + date.getMonth())).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);

    return year + "-" + month + "-" + day;
}