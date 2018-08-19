<template lang="pug">
//- Login
div
  nav.navbar.navbar-default.navbar-fixed-top(role="navigation", aria-label="main navigation")
    .container
      // Brand and toggle get grouped for better mobile display
      .navbar-header
        button.navbar-toggle.collapsed(type='button', data-toggle='collapse', data-target='#bs-example-navbar-collapse-1', aria-expanded='false')
          span.sr-only Toggle navigation
          span.icon-bar
          span.icon-bar
          span.icon-bar
        a.navbar-brand(href='#', v-scroll-to="'#home'") Brand
      // Collect the nav links, forms, and other content for toggling
      #bs-example-navbar-collapse-1.collapse.navbar-collapse
        ul.nav.navbar-nav
          li(v-scroll-to="'#home'")
            a(href='#') Home
          li(v-scroll-to="'#about'")
            a(href='#') About
          li(v-scroll-to="'#something'")
            a(href='#') Something
          li(v-scroll-to="'#something2'")
            a(href='#') Something2
          li
            nuxt-link(to='/dashboard') Dashboard
        ul.nav.navbar-nav.navbar-right
          li
            a(href='#') Login


  section.intro#home
    .content.text-center
      h1 MVP
  section#about
    .content.text-center
      h1 About
  section#something
    .content.text-center
      h1 Something
  section#something2
    .content.text-center
      h1 Something2
  footer
    a(href='#') @futureAGmvp

</template>

<script>
import Vue from 'vue'
const VueScrollTo = require('vue-scrollto')
Vue.use(VueScrollTo)

export default {
  name: 'HomePage',
  // components: {Modal},
  data() {
      return {}
  }
}
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-weight: 500;
  font-family: 'HelveticaNeue';
}

section {
  width: 100%;
  padding: 0 7%;
  display: table;
  margin: 0;
  max-width: none;
  background-color: #373B44;
  height: 100vh;

  &:nth-of-type(2n) {
    background-color: #FE4B74;
  }
}

.intro {
  height: 100vh;
}

.content {
  display: table-cell;
  vertical-align: middle;
}

h1 {
  font-size: 3em;
  display: block;
  color: white;
  font-weight: 300;
}

p {
  font-size: 1.5em;
  font-weight: 500;
  color: #C3CAD9;
}

a {
  font-weight: 700;
  color: #373B44;
  position: relative;

  &:hover{
    opacity: 0.8;
  }

  &:active {
    top: 1px;
  }
}

footer {
  padding: 1% 5%;
  text-align:center;
  background-color: #373B44;
  color: white;

  a {
    color: #FE4B74;
    font-weight: 500;
    text-decoration: none;
  }
}

#home {
  background: linear-gradient(
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ), url('/nuxt-ui/img/lettuce_background.jpg') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}
// #home {
//   background: linear-gradient(
//         rgba(0, 0, 0, 0.5),
//         rgba(0, 0, 0, 0.5)
//       ), url('~/img/lettuce_background.jpg') no-repeat center center fixed;
//     -webkit-background-size: cover;
//     -moz-background-size: cover;
//     -o-background-size: cover;
//     background-size: cover;
// }
</style>

