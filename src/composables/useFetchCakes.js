import { Api } from '../services/index.js';

export default function useFetchCakes() {
  const fetchCakes = async () => {
    try {
      const response = await Api.get();
      return response;
    } catch (e) {
      return e;
    }
  };

  const fetchCakesQuery = async query => {
    try {
      const response = await Api.filterBy(query);
      return response;
    } catch (e) {
      return e;
    }
  };

  const fetchCakeBy = async id => {
    try {
      const response = await Api.getBy(id);
      return response;
    } catch (e) {
      return e;
    }
  };

  return { fetchCakes, fetchCakesQuery, fetchCakeBy };
}
