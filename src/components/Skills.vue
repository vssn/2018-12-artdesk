<template>
  <div class="skills">
    <div class="columns is-mobile modal is-active">
      <div class="modal-background"></div>
      <div
        class="column skill-list is-offset-one-fifth-mobile is-four-fifths-mobile is-half modal-content"
      >
        <p class="subtitle">
          Knowledge stacks<br />
          <span class="tag is-info is-medium">AWS DevOps</span>
          <span class="tag is-info is-medium">CI &amp; Deployment</span>
          <span class="tag is-info is-medium">Rest API Definition</span>
          <span class="tag is-info is-medium">Domain Architecture</span>
          <span class="tag is-info is-medium">Clean Code</span>
        </p>

        <p class="subtitle">
          Languages <br /><span class="tag is-link is-medium">JavaScript</span>
          <span class="tag is-primary is-medium">HTML + CSS</span>
          <span class="tag is-primary is-medium">PHP</span>
          <span class="tag is-primary is-medium">Swift</span>
          <span class="tag is-primary is-medium">C#</span>
          <span class="tag is-primary is-medium">Rust</span>
        </p>

        <p class="subtitle">
          Frameworks and Libraries <br />
          <span class="tag is-link is-medium">Vue</span>
          <span class="tag is-link is-medium">React Native</span>
          <span class="tag is-link is-medium">React</span>
          <span class="tag is-primary is-medium">Redux</span>
          <span class="tag is-primary is-medium">Web Assembly</span>
          <span class="tag is-primary is-medium">Laravel</span>
          <span class="tag is-primary is-medium">Web Components</span>
          <span class="tag is-primary is-medium">.NET Core</span>
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

.skill-list {
  padding-top: 15vh;
  padding-bottom: 15vh;
}

.modal-content {
  text-align: left;
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
a {
  color: #42b983;
}
</style>
