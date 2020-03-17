<template lang="html">
  <div id="home">
    <Header />
    <main>
      <Service />
      <Policy />
    </main>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
import Service from '@/components/service.vue'
import Policy from '@/components/policy.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    Service,
    Policy
  }
}
</script>

<style lang="css" scoped>
main {
  max-width: 980px;
  margin: 0 auto;
}
</style>
