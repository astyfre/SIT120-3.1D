<template>
   <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/products">Products</router-link></li>
          <li><router-link to="/about">About Us</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
        <template v-if="!loggedInUser">
          <router-link class="login-button" to="/login">Login</router-link>
    </template>
    <template v-else>
      <div class="user-welcome">
        Welcome {{ loggedInUser }}
        <button @click="logout" class="logout-button">Logout</button>
      </div>
</template>
      </nav>
  </template>
  
  <script>
import '@/styles.css';

export default {
    name: 'NavigationApp',
    components: { 
    
     },
     props: {
    loggedInUser: String, // Define the prop
  },
}
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  </style>
  