import { defineStore } from 'pinia';
import useFetchCakes from '@/composables/useFetchCakes';
const { fetchAllCakes } = useFetchCakes();

export const useCakesStore = defineStore('cakes', {
  state: () => {
    return {
      cakesList: [],
    };
  },

  getters: {
    cakes: state => state.cakesList,
  },

  actions: {
    async getCakes() {
      const { data } = await fetchAllCakes();
      this.cakesList = data;
    },

    findOneCake(idd) {
      return this.cakesList.find(item => item.id === idd);
    },
  },
});
