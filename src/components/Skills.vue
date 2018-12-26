<template>
  <div class="skills">
    <div class="columns is-mobile modal is-active">
      <div class="modal-background"></div>
      <div
        class="column is-offset-one-fifth-mobile is-four-fifths-mobile is-half modal-content"
      >
        <p class="subtitle">
          Knowledge stacks<br />
          <span class="tag is-info is-normal">AWS DevOps</span>
          <span class="tag is-info is-normal">CI &amp; Deployment</span>
          <span class="tag is-info is-normal">Rest API Definition</span>
          <span class="tag is-info is-normal">Domain Architecture</span>
          <span class="tag is-info is-normal">Clean Code</span>
        </p>

        <p class="subtitle">
          Languages <br /><span class="tag is-link is-normal">JavaScript</span>
          <span class="tag is-primary is-normal">HTML + CSS</span>
          <span class="tag is-primary is-normal">PHP</span>
          <span class="tag is-primary is-normal">Swift</span>
          <span class="tag is-primary is-normal">C#</span>
          <span class="tag is-primary is-normal">Rust</span>
        </p>

        <p class="subtitle">
          Frameworks and Libraries <br />
          <span class="tag is-link is-normal">Vue</span>
          <span class="tag is-link is-normal">React Native</span>
          <span class="tag is-link is-normal">React</span>
          <span class="tag is-primary is-normal">Redux</span>
          <span class="tag is-primary is-normal">Web Assembly</span>
          <span class="tag is-primary is-normal">Laravel</span>
          <span class="tag is-primary is-normal">Web Components</span>
          <span class="tag is-primary is-normal">.NET Core</span>
        </p>
      </div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.skills {
}

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

h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
