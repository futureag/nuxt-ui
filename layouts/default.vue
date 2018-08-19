<template lang='pug'>
.container.is-fluid.is-marginless.is-paddingless
  section.hero.is-landing.is-large
    .hero-head
      nav.navbar.is-fixed-top
        .container
          .navbar-brand
            a.navbar-item
            span.navbar-burger.burger(data-target='mainNavbar')
              span
              span
              span
          #mainNavbar.navbar-menu
            .navbar-end
              a.navbar-item
              a.navbar-item
              span.navbar-item
                //- a.button.is-info.is-inverted.is-outlined
                a.button.is-info.is-inverted
                  span Login
  nuxt
//- section.hero.is-info.is-fullheight
//-   .hero-head
//-     nav.navbar
//-       .container
//-         .navbar-brand
//-           a.navbar-item(href='../') MVP UI
//-             //- img(src='http://bulma.io/images/bulma-type-white.png', alt='Logo')

//-           span.navbar-burger.burger(data-target='navbarMenu')
//-             span
//-             span
//-             span
//-         #navbarMenu.navbar-menu
//-           .navbar-end
//-             //- span.navbar-item
//-             //-   a.button.is-white.is-outlined(href='#')
//-             //-     span.icon
//-             //-       b-icon(icon='home')
//-             //-     span Home
//-             //- span.navbar-item
//-             //-   a.button.is-white.is-outlined(href='#')
//-             //-     span.icon
//-             //-       b-icon(icon='superpowers')
//-             //-     span Examples
//-             //- span.navbar-item
//-             //-   a.button.is-white.is-outlined(href='#')
//-             //-     span.icon
//-             //-       b-icon(icon='book')
//-             //-     span Documentation
//-             span.navbar-item
//-               a.button.is-white.is-outlined(href='#')
//-                 span.icon
//-                   b-icon(icon='account')
//-                 span Login
//-   .container
    nuxt
    //- .container.has-text-centered
    //-   .column.is-6.is-offset-3
    //-     h1.title
    //-     h2.subtitle
    //-     .box
    //-       .field.is-grouped
    //-         p.control.is-expanded
    //-           input.input(type='text', placeholder='Enter your email')
    //-         p.control
    //-           a.button.is-info
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: 'Home', icon: 'home', to: { name: 'index' } },
        { title: 'Inspire', icon: 'lightbulb', to: { name: 'inspire' } }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  .hero.is-info {
    background: linear-gradient(
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ), url('~/img/lettuce_background.jpg') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  .hero .nav, .hero.is-success .nav {
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .hero .subtitle {
    padding: 3rem 0;
    line-height: 1.5;
  }
</style>
