<template>
  <div class="contact columns">
    <div class="columns is-mobile modal is-active">
      <div class="modal-background"></div>
      <div class="column is-half modal-content">
        <div class="card">
          <div class="card-content">
            <p class="subtitle">
              Diplominformatiker (FH) Edmund Goller <br />
              Niedergelassen in Fleisnitz 14, 95236 Stammbach<br />
            </p>
            <p class="subtitle">
              <span>
                <a href="mailto:edmund.goller@artdesk.de"
                  ><i class="fas fa-mobile"></i> 0176/32250196
                </a>
              </span>
            </p>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
              <span>
                <a
                  href="https://twitter.com/codinghorror/status/506010907021828096"
                  ><i class="fab fa-xing"></i> XING</a
                >
              </span>
            </p>
            <p class="card-footer-item">
              <span>
                <a href="mailto:edmund.goller@artdesk.de"
                  ><i class="far fa-envelope-open"></i> E-Mail
                </a>
              </span>
            </p>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contact {
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
