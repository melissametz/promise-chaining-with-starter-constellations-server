const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function updateIfExists(id, body) {
  const url = `${BASE_URL}/constellations/${id}`;
  return axios
    .get(url)
    .then(({ data }) => {
        axios.put(url, body)
        return data;
      })
    .catch((error) => {
    return error.message;
    });
}

module.exports = {
  updateIfExists,
};
