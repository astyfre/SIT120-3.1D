<template>
    <div class="checkout">
        <main>
      <h1>Checkout</h1>
      <p>Total Amount: ${{ totalAmount  }}</p>
      <ul>
        <li v-for="item in cart" :key="item.id">
          {{ item.name }} - ${{ item.price }} - Quantity: {{ item.quantity }}
        </li>
      </ul>
      <button @click="placeOrder">Place Order</button>
    </main>
    </div>
  </template>
  
  <script>
import '@/styles.css'; // Add this line to import the CSS file

export default {
    props: ['cart', 'totalAmount'], // Make sure totalAmount is a prop
  methods: {
    placeOrder() {
      alert('Order placed successfully!');
      this.$emit('clearCart');
    }
    
  },
  computed: {
    
  }}
  </script>
  
  <style scoped>
  /* Your styles here */
  </style>
  