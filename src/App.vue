<template>
  <div id="app" class="background">
    <Navigation />
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
import "bulma/css/bulma.css";

export default {
  name: "App",
  components: {
    Navigation
  }
};
</script>

<style>
#app {
  font-family: "Source Sans Pro", "Helvetica", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-weight: 300;
  min-height: 100vh;
  width: 100vw;
  margin: 0;
}

.background {
  background-image: url("https://uploads.codesandbox.io/uploads/user/7727429e-cdee-415f-8d28-67bc3812a225/ZA9y-header.jpg");
  background-size: cover;
  background-position: center center;
}
</style>
