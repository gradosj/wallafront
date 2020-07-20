const axios = require('axios').default;

async function registerCall(user, pass) {
    console.log('info-register');
    return axios({
        method: 'POST',
        url: 'http://34.89.93.186:8080/apiv1/register',
        headers: {
            accept: 'application/json'
        },
        data: {
            username: `${user}`,
            password: `${pass}`
        },
        withCredentials: true,
    })
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            return error.response.data;
        })
}

async function loginCall(user, pass) {
    console.log('info-login');
    return axios({
        
        method: 'POST',
        url: 'http://34.89.93.186:8080/apiv1/login',
        headers: {
            accept: 'application/json'
        },
        data: {
            username: `${user}`,
            password: `${pass}`
        },
        withCredentials: true,
    })
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            return error.response.data;
        })
}

async function addCall(query) {
    console.log('info-addCall');
    return axios({
        method: 'GET',
     
      url: `http://localhost:3000/api/anuncios${query}`,
      
    })
        .then(function (response) {
            console.log(response.data);
            return response.data;
        })
        .catch(function (error) {
            console.log(error.response.data);
            return error.response.data;
        })
}
async function detailCall(id) {
    console.log('info-detailCall');
    return axios({
        method: 'GET',
        url: `http://localhost:3000/api/anuncios/${id}`,
       
    })
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error.response);
            return error.response.data;
        })
}

async function createAd(name, price, desc, tag, type, photo) {
    console.log('info-create-AD');
    return axios({
        method: 'POST',
        url: `http://34.89.93.186:8080/apiv1/anuncios/`,
        data: {
            name: `${name}`,
            price: `${price}`,
            description: `${desc}`,
            tags: `${tag}`,
            type: `${type}`,
            photo: `${photo}`,
        },
        withCredentials: true,
    })
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            return error.response.data;
        })
}
async function modifyAd(name, price, desc, tag, type, photo, idMongo) {
    console.log('modifyAD');
    return axios({
        method: 'PUT',
        url: `http://34.89.93.186:8080/apiv1/anuncios/${idMongo}`,
        data: {
            name: `${name}`,
            price: `${price}`,
            description: `${desc}`,
            tags: `${tag}`,
            type: `${type}`,
            photo: `${photo}`,
        },
        withCredentials: true,
    })
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            return error.response.data;
        })
}
export { registerCall, loginCall, addCall, detailCall, createAd, modifyAd };