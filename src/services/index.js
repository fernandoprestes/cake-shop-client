import axios from 'axios';

const urlApi = import.meta.env.VITE_APP_URL;

export class Api {
  static async get() {
    const response = await axios.get(`${urlApi}/cakes`);
    return response.data;
  }

  static async getBy(id) {
    const response = await axios.get(`${urlApi}/cakes/${id}`);
    return response.data;
  }

  static async filterBy(query) {
    const response = await axios.get(`${urlApi}/cakes?${query}`);
    return response.data;
  }
}
