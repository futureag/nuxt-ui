<template lang="pug">
  section.section
    Login
    //
      <div class="columns is-mobile">
      <div v-for="(feature, i) of features" :key="i" class="column">
      <div class="card">
      <header class="card-header">
      <p class="card-header-title has-text-grey">
      {{ feature.title }}
      </p>
      </header>
      <div class="card-content">
      <div class="content has-text-centered">
      <b-icon :icon="feature.icon" size="is-large" type="is-primary"/>
      </div>
      </div>
      <footer class="card-footer">
      <div class="card-footer-item" v-html="feature.content"></div>
      </footer>
      </div>
      </div>
      </div>
</template>

<script>
import Login from '@/components/Login'

export default {
  name: 'HomePage',
  components: {Login},
  data() {
      return {}
  }
}
</script>

