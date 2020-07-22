const axios = require("axios").default;

async function addCall(query) {
  console.log("info-addCall");
  return axios({
    method: "GET",

    url: `http://localhost:3000/api/anuncios${query}`,
  })
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error.response.data);
      return error.response.data;
    });
}
async function detailCall(id) {
  console.log("info-detailCall");
  return axios({
    method: "GET",
    url: `http://localhost:3000/api/anuncios/${id}`,
  })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error.response);
      return error.response.data;
    });
}

export { addCall, detailCall };
