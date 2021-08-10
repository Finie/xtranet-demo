import client from "../client";

const userLogin = (data) => {
  return client.post("/api/auth", data);
};

const userRegistration = (data) => {
  return client.post("/api/users", data);
};

export default {
  userLogin,
  userRegistration,
};
