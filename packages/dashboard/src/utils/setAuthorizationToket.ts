import axios from 'axios';

const setAuthorizationToken    = token => axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
const removeAuthorizationToken = token => delete axios.defaults.headers.common['Authorization'];

export default setAuthorizationToken;
