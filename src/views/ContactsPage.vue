<template>
  <canvas id="myCanvas" width="400" height="200"></canvas>
    <div id="contact">
    <main class="contact-us">
    <h1>Contact Us</h1>
    

    <form @submit="submitForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" required />
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" v-model="formData.message" required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
    <!-- Show the message if formSubmitted is true -->
    <div v-if="formSubmitted" class="success-message">
        Thank you {{ formData.name }}, we will do our best to get back to you.
        </div>
    </main>
  </div>
  <footer>&copy; 2023 Anabolic Lifestyle</footer>
</template>

<script>
import '@/styles.css'; // Add this line to import the CSS file

export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
      formSubmitted: false,
    };
  },
  methods: {
    submitForm() {
      // Send the form data to your server or perform necessary actions
      console.log("Form submitted:", this.formData);
      this.formSubmitted = true; // Set formSubmitted to true after successful submission
      
    }
  },
  mounted() {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    // Draw first circle
    ctx.beginPath();
    ctx.arc(100, 100, 30, 0, Math.PI * 2);
    ctx.fillStyle = 'RED';
    ctx.fill();

    // Draw second circle
    ctx.beginPath();
    ctx.arc(300, 100, 30, 0, Math.PI * 2);
    ctx.fillStyle = 'red';
    ctx.fill();

    // Draw a line connecting the circles
    ctx.beginPath();
    ctx.moveTo(130, 100);
    ctx.lineTo(270, 100);
    ctx.strokeStyle = 'yellow';
    ctx.lineWidth = 10;
    ctx.stroke();
  },
};

</script>

<style scoped>

</style>