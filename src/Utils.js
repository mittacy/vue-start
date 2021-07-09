/**
 * setCookie
 * @param {*} name
 * @param {*} value
 * @param {*} expire hours
 */
export const setCookie = (name, value, expire = 1) => {
    expire = expire * 60 * 60 * 1000;
    let exp = new Date();
    exp.setTime(exp.getTime() + expire);
    document.cookie = `${name}=${escape(value)}; path=/;expires=${exp.toGMTString()}`;
}

/**
 * getCookie
 * @param {*} name
 */
export const getCookie = (name) => {
    let reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`);
    let arr = document.cookie.match(reg);
    return arr ? unescape(arr[2]) : null;
}

/**
 * clearCookie
 * @param {*} name
 */
export const clearCookie = (name) => {
    setCookie(name, '', -1);
}

/**
 * setLocalStorage 设置localStorage
 * @params {*} name
 * @params {*} value
 */
export const setLocalStorage = (name, value) => {
    window.localStorage.setItem(name, value);
}

/**
* getLocalStorage
* @params {*} name
*/
export const getLocalStorage = (name) => {
    return window.localStorage.getItem(name);
}

/**
* removeLocalStorage
* @params {*} name
*/
export const removeLocalStorage = (name) => {
    return window.localStorage.removeItem(name);
}
