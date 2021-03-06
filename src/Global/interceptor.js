import axios from "axios";
import ApiError from "./ApiError";
import ERRORS from "./errorConstants";
// import localStorage from "./localStorage";

const BaseURL = () => {
  return "https://api.thelaunchclub.in/";
};

// eslint-disable-next-line no-unused-vars
const setupInterceptors = (store) => {
  // Default settings for axios request
  // TODO : Replace base URL with API from process.env
  axios.defaults.baseURL = BaseURL();
  axios.defaults.headers.post["Content-Type"] = "application/json";
  axios.defaults.validateStatus = () => true;

  axios.interceptors.request.use(
    (config) => {
      console.warn("---Network request----", config);
      return config;
    },
    (error) => Promise.reject(error)
  );

  axios.interceptors.response.use(
    (response) => {
      // Process response body
      // use store.dispatch() to dispatch any redux ArticleActions
      console.warn("---------------------Network", response);
      if (response.status >= 500) {
        throw new ApiError(ERRORS.SERVER_ERROR);
      } else if (response.status === 401) {
        throw new ApiError(ERRORS.UNAUTHORISED_ERROR);
      } else if (response.status === 403) {
        throw new ApiError(ERRORS.FORBIDDEN_ERROR);
      } else if (response.status === 406) {
        throw new ApiError(ERRORS.LOGIN_ERROR);
      } else if (
        response.status === 200 ||
        response.status === 201 ||
        response.status === 202
      ) {
        return response.data.data;
      } else if (response.status === 422) {
        throw new ApiError(response.data.error);
      } else {
        throw new ApiError(ERRORS.CLIENT_ERROR);
      }
    },
    (error) => Promise.reject(error)
  );
};

/**
 * Set auth token as default in axios
 * @param token
 */
// export const setAuthToken = async (token) => {
//   const authToken = token
//     ? token
//     : await localStorage.getStringItem("accessToken");
//   if (authToken) {
//     axios.defaults.headers.common.Authorization = `Bearer ${authToken}`;
//   }
// };

// setAuthToken();

export default setupInterceptors;
