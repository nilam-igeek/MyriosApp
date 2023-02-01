import axios from 'axios';
import {APIS} from '../constants/index';
const instance = axios.create({
  baseURL: `${APIS.baseUrl}`,
});

export default instance;
