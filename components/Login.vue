<template lang="pug">
.container.has-text-centered
  .column.is-4.is-offset-4
    //- h3.title.has-text-grey Login
    //- p.subtitle.has-text-grey Please login to proceed.
    .box
      figure.avatar
        img(src='https://placehold.it/128x128')
      form
        b-input(v-model='email', placeholder='Your Email')
        .field
          .control
            input.input.is-large(type='email', placeholder='Your Email', autofocus='')
        .field
          .control
            input.input.is-large(type='password', placeholder='Your Password')
        .field
          label.checkbox
            input(type='checkbox')
        button.button.is-block.is-info.is-large.is-fullwidth Login
    p.has-text-grey
      a(href='../') Sign Up
      a(href='../') Forgot Password
      a(href='../') Need Help?
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.hero.is-success {
  background: #F2F6FA;
}
.hero .nav, .hero.is-success .nav {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.box {
  margin-top: 5rem;
}
.avatar {
  margin-top: -70px;
  padding-bottom: 20px;
}
.avatar img {
  padding: 5px;
  background: #fff;
  border-radius: 50%;
  -webkit-box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
  box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
}
input {
  font-weight: 300;
}
p {
  font-weight: 700;
}
p.subtitle {
  padding-top: 1rem;
}
</style>
