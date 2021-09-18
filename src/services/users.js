import {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest,
} from "../utils/api";

import { PATH_URL } from './url'

export const usersApi = {
  login: (body) => postRequest(`${PATH_URL}/session`, body),
};
