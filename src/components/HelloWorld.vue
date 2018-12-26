<template>
  <div class="hello">
    <div class="columns is-mobile modal is-active">
      <div class="modal-background"></div>
      <div class="column is-half modal-content">
        <p class="subtitle">
          <span class="tag is-dark is-medium">Germany based</span><br />
          <span class="tag is-dark is-medium">
            Freelance Frontend Developer
          </span>
          <span class="tag is-primary is-medium"> Edmund Goller </span>
          <span class="tag is-dark is-medium">assignable for</span>
          <span class="tag is-primary is-medium">remote tasks.</span>
        </p>
      </div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal-background {
  background: #50a3a2;
  background: -webkit-linear-gradient(
    to right bottom,
    rgba(0, 184, 156, 0.76) 0%,
    rgba(52, 0, 56, 0.92) 100%
  );
  background: linear-gradient(
    to right bottom,
    rgba(0, 184, 156, 0.76) 0%,
    rgba(52, 0, 56, 0.92) 100%
  );
}

.modal-content {
  max-height: 100vh;
}

.tag {
  margin-right: 0.3em;
  margin-top: 0.3em;
}

p {
  font-weight: 300;
  color: white;
}
</style>
