import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.0.101:8080/",
});

apiClient.addAsyncRequestTransform(async (request) => {
  // const token = await authStore.getToken();

  // if (!token) return null;

  // const token2 = token.replace(/^"(.*)"$/, "$1");

  request.headers["Accept"] = "application/json";
  request.headers["Content-Type"] = "application/json";
  // request.headers["Authorization"] = "Bearer " + token2;
});

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    //save incoming data to cache --future v2

    return response;
  }

  // the resonse was not successful return cached data -- future v2

  return response;
};

const post = apiClient.post;

apiClient.post = async (url, data, axiosConfig) => {
  const response = await post(url, data, axiosConfig);

  if (response.ok) {
    //hande cache saving --future
    //meanwhile return the data
    return response;
  }

  // when an error occures handle the error and return ofline data

  return response;
};

const patch = apiClient.patch;

apiClient.patch = async (url, data, axiosConfig) => {
  const response = await patch(url, data, axiosConfig);

  if (response.ok) {
    //hande cache saving --future
    //meanwhile return the data
    return response;
  }

  // when an error occures handle the error and return ofline data

  return response;
};

export default apiClient;
