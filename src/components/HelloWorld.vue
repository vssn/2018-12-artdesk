<template>
  <div class="hello">
    <div class="columns modal is-active">
      <div class="modal-background"></div>
      <div
        class="column is-offset-one-quarter-mobile is-three-quarters-mobile is-half modal-content"
      >
        <p class="subtitle">
          <span class="tag is-dark is-large">Germany based</span><br />
          <span class="tag is-dark is-large"> Frontend Developer </span>
          <span class="tag is-primary is-large"> Edmund Goller </span>
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
    rgba(0, 184, 156, 0.36) 0%,
    rgba(52, 0, 56, 0.42) 100%
  );
  background: linear-gradient(
    to right bottom,
    rgba(0, 184, 156, 0.06) 0%,
    rgba(52, 0, 56, 0.12) 100%
  );
}

.modal-content {
  max-height: 90vh;
}

.tag {
  margin-right: 0.3em;
  margin-top: 0.3em;
}

p {
  font-weight: 400;
  color: white;
}
</style>
