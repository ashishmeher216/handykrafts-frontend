import axios from 'axios'

const token = window.localStorage.getItem('token');

const axiosInstance = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        'Authorization': token ? `Bearer ${token}` : '',
    }
})


export default axiosInstance;