const axios = require("axios").default;

async function addCall(query) {
  
  return axios({
    method: "GET",

    url: `http://localhost:3000/api/anuncios${query}`,
  })
    .then(function (response) {
    
      return response.data;
    })
    .catch(function (error) {
     
      return error.response.data;
    });
}
async function detailCall(id) {
 
  return axios({
    method: "GET",
    url: `http://localhost:3000/api/anuncios/${id}`,
  })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
   
      return error.response.data;
    });
}

export { addCall, detailCall };
