<template lang="pug">
//- Login
.content-wrapper
  section.bg-light.hero.is-fullheight#top-section
    .container.section
      .content.has-text-centered
        h1 MVP UI
  section.bg-white.hero.is-fullheight
    .container.section
      .content.has-text-centered
        h1 LANDING PAGE SECOND SECTION
  section.bg-light.hero.is-fullheight
    .container.section
      .content.has-text-centered
        h1 LANDING PAGE THIRD SECTION
  section#stn-download
    .container.section.has-text-centered
      .columns
        .column.is-half.is-offset-one-quarter
          h1.title.is-2 Some other info
          p Lorem ipsum dolor sit amet, consectetur adipisicing elit..
          a.button.button-store(href='#') Link1
          a.button.button-store(href='#') Lin2
  footer.footer
    .container
      .content.has-text-centered
        p
          a(href='#') © MVP
</template>

<script>
import Vue from 'vue'
var VueScrollactive = require('vue-scrollactive');
Vue.use(VueScrollactive);
import Login from '@/components/Login'

export default {
  name: 'HomePage',
  components: {Login},
  data() {
      return {}
  }
}
</script>
<style lang="scss" scoped>

#top-section {
  background: linear-gradient(
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ), url('~/img/lettuce_background.jpg') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  h1 {
    color: white;
    font-size: 15rem;
    margin-top: 8rem;
  }
}

.hero.is-large .hero-body {
    padding-bottom: 0;
    padding-top: 10rem;
}
.hero figure {
    height: 0;
    padding-bottom: 75%;
    overflow: hidden;
}
figure.image {
    padding-left: 50px;
    padding-right: 50px;
}
.bg-white {
    background-color: #ffffff;
}
.bg-light {
    background-color: #faf6fb;
}
.media-left {
    padding-left: 15px;
}
.media-left .icon {
    margin-top: 15px;

}

.media-content {
    padding-left: 25px;
}

.media {
    background-color: #ffffff;
    padding: 25px;
}

.section {
    padding: 7rem 5rem;
}

.content h1 {
    margin-bottom: 2em;
}

#stn-download {
    color: #ffffff;
    background-image: linear-gradient( 135deg, rgba(60, 8, 118, 0.8) 0%, rgba(250, 0, 118, 0.8) 100%);
}

.hero.is-landing {
    color: #ffffff;
    background-image: linear-gradient( 135deg, rgba(60, 8, 118, 0.8) 0%, rgba(250, 0, 118, 0.8) 100%);
}

.hero.is-landing * {
    color: #ffffff;
}

#stn-download h1 {
    color: #ffffff;
}

.button.button-store {
    border-radius: 3px;
    background: #FFF;
    box-shadow: 0px 9px 32px 0px rgba(0, 0, 0, 0.26);
    font-size: 14px;
    font-weight: 500;
    color: #633991;
    margin: 0.5rem;
    padding: 0.7rem 1.6rem;
    line-height: 1.8;
    height: auto;
    text-transform: uppercase;
    transition: all 0.3s ease;

    display: inline-block;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
}

.button.button-store:hover {
    color: #000000;
    background-color: #faf6fb;
}

.button.button-store img {
    margin-right: 0.4rem;
    vertical-align: text-bottom;
}
</style>

