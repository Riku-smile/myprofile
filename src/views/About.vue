<template lang="html">
  <div id="about" class="">
    <Header />
    <main>
      <Introduce />
      <Skill />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
import Skill from '@/components/skills.vue'
import Introduce from '@/components/introduce.vue'

export default {
  name: 'About',
  components: {
    Header,
    Footer,
    Skill,
    Introduce
  }
}
</script>

<style lang="css" scoped>
main {
  max-width: 980px;
  margin: 0 auto;
}
</style>
