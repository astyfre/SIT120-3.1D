<template>
  <div id="app">
    <header>
      <h1>Anabolic Lifestyle</h1>
      <Navigation :loggedInUser="loggedInUser" />
    </header>
    <ChatBot/>
    <router-view></router-view>
  </div>
</template>

<script>
import ChatBot from '@/components/ChatBot.vue';
import Navigation from '@/components/Navagation.vue'
import '@/styles.css';
import eventBus from '@/eventBus';

export default {
    name: 'App',
    components: { 
      ChatBot,
      Navigation
    },
    data() {
    return {
      loggedInUser: null,
    };
  },
  created() {
    eventBus.on('user-logged-in', (user) => {
      this.loggedInUser = user.name;
    });

    eventBus.on('user-logged-out', () => {
      this.loggedInUser = null;
    });
  },
};
</script>

<style>


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;  
}
</style>
