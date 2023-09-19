<template>
    
    <div id="about">
      <main>
        <h2>About Us</h2>

        

      <section class="about-us">
        
        <p>Welcome to Anabolic Lifestyle, your ultimate destination for premium gym and fitness apparel designed to elevate your workout experience. At Anabolic Lifestyle, we're passionate about empowering individuals on their fitness journey, helping them achieve their goals, and look and feel their best.
          <br><br>
          Our curated collection of high-quality activewear is crafted with precision, combining performance-driven fabrics with cutting-edge designs. We understand the importance of comfort, durability, and style when it comes to your workout gear. That's why each piece is engineered to support you through every rep, set, and stride.
          <br><br>
          With a commitment to excellence, we aim to inspire confidence and motivation in every athlete, from seasoned professionals to those just starting out. Our mission is simple: to provide you with the gear you need to perform at your peak, while expressing your unique style.
          <br><br>
          Join us in embracing the Anabolic Lifestyle, where strength meets style, and fitness is a way of life.

        </p>
      </section>

      <section>
        <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <circle id="blob" cx="100" cy="100" r="40" fill="#e74c3c" />
</svg>
      </section>

      <section> 
        <h3>Website Walkthrough </h3>
        <iframe src="https://www.youtube.com/embed/MVT3dWkSt6g"  
        frameborder="0"
        allowfullscreen 
        width="560" 
        height="315"
      ></iframe>
      
      </section>
      
      <h3>
        Find Us Here
      </h3>
    </main>
  </div>
  <mgl-map  
      mapStyle="https://api.maptiler.com/maps/streets/style.json?key=TwIRwWiIcRm57WuT8VRe"
      :zoom=18
      :center="[145.115004, -37.847151 ]"
      class ="custom-map-class"
    >
    <mgl-marker :coordinates="[145.115004, -37.847151 ]" color="rgb(255, 4, 4)"/>
      <mgl-navigation-control position="top-left"/>
    </mgl-map>
  <footer>&copy; 2023 Anabolic Lifestyle</footer>
</template>

<script>

import { MglMap, MglNavigationControl, MglMarker } from 'vue-maplibre-gl'
  

  export default {
    name: 'AboutUs',
    components: {
      MglMap,
      MglNavigationControl,
      MglMarker,
    }
  };
    
</script>

<style lang="scss">
@import "~vue-maplibre-gl/src/css/maplibre.scss";

#blob:hover {
    cursor: pointer;
    animation: float 2s infinite;
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}

#app {
  min-height: 100vh;
  height: auto;
  background-color: black;
}


</style>

