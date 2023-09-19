<template>
    <aside class="cart">
      <h2>Cart</h2>
      <ul v-if="cart.length > 0">
        <li v-for="item in cart" :key="item.id">
          {{ item.name }} - ${{ item.price }} 
          <input
            class="quantity"
            type="number"
            v-model.number="item.quantity"
            min="1"
            @input="updateQuantity(item)"
          />
          <button @click="removeFromCart(item)">Remove</button>
        </li>
      </ul>
      <p v-else class="empty-cart">Your cart is empty.</p>
      <!-- Display total amount -->
      <p v-if="cart.length > 0">Total Amount: $ {{ totalAmount }}</p>
      <router-link :to="{ name: 'checkout', params: { cart: cart, totalAmount: totalAmount } }">
        <button @click="goToCheckout">Checkout</button>
</router-link>
    </aside>
  </template>
  
  <script>
    import { mapMutations } from 'vuex'; // Import Vuex mapMutations

  export default {
    props: ['cart'],
    methods: {
      removeFromCart(item) {
        this.$emit('remove', item);
      },
      updateQuantity(item) {
        if (item.quantity < 1) {
          item.quantity = 1;
        }
        this.$emit('update', item);
      },
      
    ...mapMutations(['updateQuantity']), // Use Vuex mutations

    // Navigate to checkout view
    goToCheckout() {
    this.$router.push({
      name: 'checkout',
      params: {
        totalAmount: this.totalAmount // Pass the total amount as a parameter
      }
      });
    }
    },
    computed: {
      totalAmount() {
        return this.cart.reduce((sum, product) => sum + (product.price * product.quantity), 0);
      }
    }
}

  </script>
  
  <style scoped>
  /* Your styles here */
  </style>
  