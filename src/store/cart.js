import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => {
    return {
      cartList: [],
    };
  },

  getters: {
    totalInCartList: state => state.cartList.length,
    totalPrice: state => {
      return state.cartList.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);
    },
    items: state => state.cartList,
  },

  actions: {
    addCartList(product) {
      const hasProductIncart = this.cartList.find(item => item.id == product.id);
      if (!hasProductIncart) {
        this.cartList.push({ ...product, quantity: 1 });
        return;
      }
      const index = this.cartList.findIndex(item => item.id == product.id);
      this.cartList[index].quantity += 1;
    },

    removeCartList(idd) {
      this.cartList = this.cartList.filter(item => item.id !== idd);
    },

    incresseQuantity(idd) {
      const index = this.cartList.findIndex(item => item.id == idd);
      this.cartList[index].quantity += 1;
    },

    decreasesQuantity(idd) {
      const index = this.cartList.findIndex(item => item.id == idd);
      this.cartList[index].quantity -= 1;
    },
  },
});
