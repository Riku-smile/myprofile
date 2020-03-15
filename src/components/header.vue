<template lang="html">
  <header>
    <div class="logo">
      <h1 class="text-6xl text-center font-serif">RIKUSITE</h1>
    </div>
    <nav>
      <ul class="flex flex-row justify-around py-4 items-center">
        <li class="router"><router-link to="/">TOP</router-link></li>
        <li class="router"><router-link to="/about">ABOUT</router-link></li>
        <li class="router"><a :href="`${publicPath}contact.html`">CONTACT</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      publicPath: process.env.BASE_URL
    }
  }
}
</script>

<style lang="css" scoped>
</style>
