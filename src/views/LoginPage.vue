<template>
    <div id="login">
      <main class="main-login">
        <!-- Conditional rendering based on login status -->
        <template v-if="!loggedIn">
          <div class="container mt-5">
            <div class="row justify-content-center">
              <div class="col-md-6">
                <form class="p-4 border rounded">
                  <h2 class="mb-4">Sign Up/Login</h2>

                    <div class="mb-3">
                        <label for="name" class="form-label">Name:</label>
                        <input v-model="name" id="name" class="form-control" />
                    </div>

                    <div class="mb-3">
                        <label for="email" class="form-label">Email:</label>
                        <input v-model="email" id="email" class="form-control" type="email" @blur="validateEmail"/>
                    </div>

                    <div class="mb-3">
                        <label for="password" class="form-label">Password:</label>
                        <input v-model="password" id="password" class="form-control" type="password"/>
                    </div>

                    <div class="form-check mb-3">
                        <input v-model="termsAgreed" class="form-check-input" type="checkbox" id="termsAgreed" />
                        <label for="termsAgreed" class="form-check-label">I agree to the terms of service</label>
                    </div>

                    <button @click="register" :disabled="!isValid" class="btn btn-primary">Register</button>
              </form>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
  <div class="user-content">
    <h2>Welcome {{ name }}</h2>
    <p>Email: {{ email }}</p>
    <!-- Add more user-specific content as needed -->
  </div>
</template>
    </main>
  </div>
  <footer>&copy; 2023 Anabolic Lifestyle</footer>
</template>

<script>
import '@/styles.css'; // Add this line to import the CSS file
import eventBus from '@/eventBus';



export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      termsAgreed: false,
      loggedIn: false, // Track login status
      emailValid: false, // Add emailValid property for validation
    };
  },
  computed: {
    isValid() {
      return this.name && this.email && this.password && this.termsAgreed && this.emailValid;
    },
  },
  methods: {
  register() {
    if (this.isValid == true) {
      eventBus.emit('user-registered', {
        name: this.name,
        email: this.email,
        password: this.password,
      });
      this.loggedIn = true;
      eventBus.emit('user-logged-in', { name: this.name });
    }
  },
  logout() {
    this.loggedIn = false;
    eventBus.emit('user-logged-out'); // Emit a 'user-logged-out' event
    this.$router.push('/login');
  },
  validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.emailValid = emailRegex.test(this.email);
}
},

}

</script>

<style scoped>
h2{
    color: #000407;
}
</style>