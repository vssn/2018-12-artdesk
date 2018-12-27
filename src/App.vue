<template>
  <div id="app" class="background">
    <Navigation /> <transition name="router-anim"> <router-view /> </transition>
  </div>
</template>

<script>
import 'bulma/css/bulma.css';
import Navigation from './components/Navigation';

export default {
  name: 'App',
  components: {
    Navigation,
  },
};
</script>

<style>
#app {
  font-family: 'Source Sans Pro', 'Helvetica', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-weight: 400;
  min-height: 100vh;
  width: 100vw;
  margin: 0;
}

.background {
  background-image: url('https://uploads.codesandbox.io/uploads/user/7727429e-cdee-415f-8d28-67bc3812a225/ZA9y-header.jpg');
  background-size: cover;
  background-position: center center;
}

.router-anim-enter-active {
  animation: coming 0.3s;
  animation-delay: 0.1s;
  opacity: 0;
  transform: scale(0.95);
  position: absolute;
  width: 100%;
  height: 100%;
}
.router-anim-leave-active {
  animation: going 0.3s;
  position: absolute;
  width: 100%;
  height: 100%;
}

@keyframes going {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.95);
  }
}
@keyframes coming {
  from {
    opacity: 0;
    transform: scale(1.05);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
