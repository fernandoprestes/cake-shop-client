import { defineStore } from 'pinia';
import actions from './actions';
import getters from './getters';
import state from './states';

export const useCardStore = defineStore('card', {
  state,
  getters,
  actions,
});
