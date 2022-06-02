import { Api } from '../services/index.js';

export default function useFetchCakes() {
  const fetchAllCakes = async () => {
    try {
      const response = await Api.get();
      return response;
    } catch (e) {
      return e;
    }
  };

  const fetchAllCakesBy = async query => {
    try {
      const response = await Api.filterBy(query);
      return response;
    } catch (e) {
      return e;
    }
  };

  const fetchOneCakeBy = async id => {
    try {
      const response = await Api.getBy(id);
      return response;
    } catch (e) {
      return e;
    }
  };

  return { fetchAllCakes, fetchAllCakesBy, fetchOneCakeBy };
}
