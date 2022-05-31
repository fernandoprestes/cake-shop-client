import { defineStore } from 'pinia';

export const useCardStore = defineStore('card', {
  state: () => {
    return {
      cardList: [],
    };
  },

  getters: {
    totalCardList: state => state.cardList.length,
    items: state => state.cardList,
  },
  actions: {
    ADD_CARD_LIST(product) {
      this.cardList = [...this.cardList, product];
    },

    REMOVE_CARD_LIST(idd) {
      this.cardList = this.cardList.filter(item => item.id !== idd);
    },
  },
});
