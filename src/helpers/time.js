export function getFullDateAndTime() {
    const date = new Date();
    const year = new Date().getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const fulldate = day + '.' + month + '.' + year + ' ' + hours + ':' + minutes;
    return fulldate;
}