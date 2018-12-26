<template>
  <div class="hello">
    <div class="columns modal is-active">
      <div class="modal-background"></div>
      <div
        class="column is-offset-one-quarter-mobile is-three-quarters-mobile is-half modal-content"
      >
        <p class="subtitle">
          <span class="tag is-dark is-large">Germany based</span><br />
          <span class="tag is-dark is-large">
            Freelance Frontend Developer
          </span>
          <span class="tag is-primary is-large"> Edmund Goller </span>
          <span class="tag is-dark is-large">assignable for</span>
          <span class="tag is-primary is-large">remote tasks.</span>
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
  max-height: 90vh;
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
