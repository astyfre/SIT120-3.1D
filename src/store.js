// store/store.js
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      cart: []
    };
  },
  mutations: {
    addToCart(state, product) {
      const existingProduct = state.cart.find(item => item.id === product.id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(state, item) {
      state.cart = state.cart.filter(product => product !== item);
    },
    updateQuantity(state, item) {
      if (item.quantity < 1) {
        item.quantity = 1;
      }
    }
  },
  getters: {
    totalAmount(state) {
      return state.cart.reduce((sum, product) => sum + (product.price * product.quantity), 0);
    }
  }
});

export default store;
