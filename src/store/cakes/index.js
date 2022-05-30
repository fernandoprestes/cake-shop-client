import { defineStore } from 'pinia';
import state from './states';

export const useCakesStore = defineStore('cakes', {
  state,
});
