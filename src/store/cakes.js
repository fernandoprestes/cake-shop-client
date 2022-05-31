import { defineStore } from 'pinia';

export const useCakesStore = defineStore('cakes', {
  state: () => {
    return {
      cakesList: [],
    };
  },
  getters: {},
  actions: {},
});
