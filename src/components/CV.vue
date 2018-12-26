<template>
  <div class="resume columns">
    <div class="columns modal is-active">
      <div class="modal-background"></div>
      <div
        class="column is-offset-one-third-mobile is-two-thirds-mobile is-half modal-content"
      >
        <div class="card">
          <div class="card-content">
            <time datetime="2016-1-1">October 2016 - today</time>
            <div class="media">
              <div class="media-content">
                <p class="title is-4">Application developer</p>
                <p class="subtitle is-6">Global bank, german branch</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <time datetime="2016-1-1">July 2016 - today</time>
            <div class="media">
              <div class="media-content">
                <p class="title is-4">Lead developer</p>
                <p class="subtitle is-6">
                  Get Wet And Sweat Concerts GmbH, Culticks
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <time datetime="2016-1-1">October 2012 - October 2016</time>
            <div class="media">
              <div class="media-content">
                <p class="title is-4">Art Director Interactive</p>
                <p class="subtitle is-6">MBS Nürnberg GmbH</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <time datetime="2016-1-1">October 2008 - September 2012</time>
            <div class="media">
              <div class="media-content">
                <p class="title is-4">Graphic Designer</p>
                <p class="subtitle is-6">Various design and event agencies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.resume {
}

.modal-background {
  background: white;
}

.modal-content {
  -webkit-overflow-scrolling: touch;
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
</style>
