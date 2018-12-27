<template>
  <div class="resume">
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
        <div class="card">
          <div class="card-content">
            <div class="media"><div>Mentionable Projects</div></div>
            <div class="media">
              <div class="media-content">
                <p class="title is-4">Upkick – Keep focus App</p>
                <p class="subtitle is-6">Leisure Time Management (iOS)</p>
              </div>
            </div>
            <div class="media">
              <div class="media-content">
                <p class="title is-4">Bauhaus Nautic App</p>
                <p class="subtitle is-6">
                  <a
                    href="https://www.german-design-award.com/die-gewinner/galerie/detail/9000-bauhaus-nautic-app-21-captains-aid.html"
                    >German Design Award 2017</a
                  >
                  (iOS / Android)
                </p>
              </div>
            </div>
            <div class="media">
              <div class="media-content">
                <p class="title is-4">Culticks - Your event calendar</p>
                <p class="subtitle is-6">(iOS / Android)</p>
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

.card:last-child {
  margin-bottom: 15vh;
}

.card:first-child {
  margin-top: 15vh;
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
