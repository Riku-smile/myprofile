<template lang="html">
  <div id="contact">
    <Header />
    <main>
      <Form />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
import Form from '@/components/form.vue'

export default {
  name: 'Contact',
  components: {
    Header,
    Footer,
    Form
  }
}
</script>

<style lang="css" scoped>
</style>
