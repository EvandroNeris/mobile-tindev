import apisauce  from 'apisauce';

const api = apisauce.create({
    baseURL: 'http://10.0.2.2:3333'
});

export default api;