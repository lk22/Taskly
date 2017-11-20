<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        taskly-vue
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import axios from 'axios'
import {
  log,
  makeRequest
} from '~/globals'

import {api} from '~/globals/API/endpoints'

export default {
  data() {
    return {
      user: [],
    }
  },
  components: {
    Logo
  },

  /**
   * make asynchronus request
   * @return {[type]} [description]
   */
  async asyncData() {
    // return await makeRequest('GET', api + 'user/leo-knudsen').then((response) => {
    //   console.log(response)
    // })

    let { data } = await makeRequest('GET', api)

    return data
  },

  computed: {

  },

  middleware: ['auth']
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
