const authToken = "cadastroCnab@authToken";
const userToken = "cadastroCnabUser@authToken";

export const getToken = () => localStorage.getItem(authToken);
export const setToken = (token) => localStorage.setItem(authToken, token);
export const removeToken = () => localStorage.removeItem(authToken);
export const setUser = (user) => localStorage.setItem(userToken, user);
export const getUser = () => localStorage.getItem(userToken);
