import { API_URL } from './constant';
import axios from 'axios';
const axiosApiInstance = axios.create();

export const apis = {
  getBarIncomeData: () => {
    return axiosApiInstance.get(`${API_URL}income_data`);
  },
  getBarVisitorsData: () => {
    return axiosApiInstance.get(`${API_URL}visitor_data`);
  },
};
