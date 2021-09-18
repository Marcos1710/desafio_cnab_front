import {
    getRequest,
    postRequest,
  } from "../utils/api";
  
import { PATH_URL } from './url'
  
  export const cnabsApi = {
    send: (body, filaName) => postRequest(`${PATH_URL}/cnab?filename=${filaName}`, body),
    read: (filaName) => getRequest(`${PATH_URL}/cnab?file=${filaName}`, {}),
    reads: (limit, offset) => getRequest(`${PATH_URL}/cnabs?limit=${limit}&offset=${offset}`, {})
  };
  