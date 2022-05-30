const actions = {
  ADD_CARD_LIST(idd) {
    const cakesSelected = this.cakesList.find(item => item.id == idd);
    this.cardList = [...this.cardList, cakesSelected];
  },

  REMOVE_CARD_LIST(idd) {
    this.cardList = this.cardList.filter(item => item.id !== idd);
  },
};

export default { ...actions };
