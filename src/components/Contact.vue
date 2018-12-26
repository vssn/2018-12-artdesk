<template>
  <div class="contact columns">
    <div class="columns modal is-active">
      <div class="modal-background"></div>
      <div
        class="column is-offset-one-third-mobile is-two-thirds-mobile is-half modal-content"
      >
        <div class="card">
          <div class="card-content">
            <p class="subtitle">Dipl.-Inf. (FH) <br />Edmund Goller <br /></p>
            <p class="subtitle">
              Niedergelassen in <br />Fleisnitz 14, 95236 Stammbach,
              Deutschland<br />
            </p>
            <p class="subtitle">
              <span>
                <a href="tel:+4917632250196"
                  ><i class="fas fa-mobile"></i> +49 (0)176 32 25 01 96
                </a>
              </span>
            </p>
            <p class="subtitle">
              <span>
                <a href="https://www.xing.com/profile/Edmund_Goller"
                  ><i class="fab fa-xing"></i> XING</a
                >
              </span>
            </p>
            <p class="subtitle">
              <span>
                <a href="mailto:edmund.goller@artdesk.de"
                  ><i class="far fa-envelope-open"></i> E-Mail
                </a>
              </span>
            </p>
          </div>
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
  background: rgba(255, 255, 255, 1);
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

.card {
  box-shadow: none;
}

a {
  color: #42b983;
}
</style>
