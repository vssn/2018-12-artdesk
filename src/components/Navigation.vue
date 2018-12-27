<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-menu">
      <router-link to="/home" class="navbar-item">
        <i class="far fa-user-circle"></i><br />
        Edmund
      </router-link>
      <router-link to="/skills" class="navbar-item">
        <i class="fas fa-drafting-compass"></i><br />
        Skills
      </router-link>
      <router-link to="/cv" class="navbar-item"
        ><i class="fas fa-hiking"></i><br />
        Resume
      </router-link>
      <router-link to="contact" class="navbar-item">
        <i class="far fa-address-card"></i><br />
        Contact
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav,
.navbar-menu {
  display: inline-block;
  padding: 0;
  border-radius: 4px;
  z-index: 100;
}

.navbar {
  bottom: calc(50vh - 145px);
  left: 1em;
  position: fixed;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: 0.5s coming;
}
.navbar-item {
  width: 80px;
  transition: all 150ms ease-in-out;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.6em;
  display: block;
}

@keyframes coming {
  0% {
    opacity: 0;
    transform: scale(3);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.navbar-item:hover {
  border-radius: 4px;
  color: #00b89c;
  background-color: transparent;
}

.navbar-item:first-child {
  padding-top: 2em;
}

.navbar-item:last-child {
  padding-bottom: 2em;
}

.navbar-item .far,
.navbar-item .fas {
  font-size: 3.2em;
  margin-bottom: 0.2em;
}
</style>
