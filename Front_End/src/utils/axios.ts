import axios from 'axios';
import { requestDomain } from './domain';

export const request = axios.create({ baseURL: requestDomain })