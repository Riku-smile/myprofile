<template lang="html">
  <section class="container mx-auto my-4">
    <div class="text-center">
      <h2 class="title-h2">Language</h2>
    </div>
    <div class="grid grid-cols-2 lg:grid-cols-3">
      <!-- html -->
      <div class="card-wrapper">
        <img src="../assets/images/html5.svg" alt="htmlLogo">
        <div class="card-inner">
          <span class="card-span">#HTML</span>
          <span class="card-span">#実践レベル</span>
        </div>
      </div>
      <!-- css -->
      <div class="card-wrapper">
        <img src="../assets/images/css-5.svg" alt="cssLogo">
        <div class="card-inner">
          <span class="card-span">#CSS</span>
          <span class="card-span">#実践レベル</span>
        </div>
      </div>
      <!-- js -->
      <div class="card-wrapper">
        <img src="../assets/images/javascript.svg" alt="javascriptLogo">
        <div class="card-inner">
          <span class="card-span">#JavaScript</span>
          <span class="card-span">#実践レベル</span>
        </div>
      </div>
      <!-- php -->
      <div class="card-wrapper">
        <img src="../assets/images/php.svg" alt="phpLogo">
        <div class="card-inner">
          <span class="card-span">#PHP</span>
          <span class="card-span">#学習中</span>
        </div>
      </div>
      <!-- python -->
      <div class="card-wrapper">
        <img src="../assets/images/python-4.svg" alt="pythonLogo">
        <div class="card-inner">
          <span class="card-span">#Python</span>
          <span class="card-span">#学習中</span>
        </div>
      </div>
    </div>
    <div class="text-center">
      <h2 class="inline-block text-3xl font-mono font-bold">FrameWork</h2>
    </div>
    <div class="grid grid-cols-2 lg:grid-cols-4">
      <div class="card-wrapper">
        <img src="../assets/images/tailwind.png" alt="tailwindLogo">
        <div class="card-inner">
          <span class="card-span">#Tailwind</span>
          <span class="card-span">#実践レベル</span>
        </div>
      </div>
      <div class="card-wrapper">
        <img src="../assets/images/vue-js-1.svg" alt="vueLogo">
        <div class="card-inner">
          <span class="card-span">#Vue.js</span>
          <span class="card-span">#実践レベル</span>
        </div>
      </div>
      <div class="card-wrapper">
        <img src="../assets/images/bootstrap-4.svg" alt="bootstrapLogo">
        <div class="card-inner">
          <span class="card-span">#Bootstrap</span>
          <span class="card-span">#実践レベル</span>
        </div>
      </div>
      <div class="card-wrapper">
        <img src="../assets/images/sass-1.svg" alt="sassLogo">
        <div class="card-inner">
          <span class="card-span">#SASS/SCSS</span>
          <span class="card-span">#実践レベル</span>
        </div>
      </div>
      <div class="card-wrapper">
        <img src="../assets/images/jquery-1.svg" alt="jqueryLogo">
        <div class="card-inner">
          <span class="card-span">#jQuery</span>
          <span class="card-span">#実践レベル</span>
        </div>
      </div>
      <div class="card-wrapper">
        <img src="../assets/images/laravel.svg" alt="laravelLogo">
        <div class="card-inner">
          <span class="card-span">#Laravel</span>
          <span class="card-span">#学習中</span>
        </div>
      </div>
      <div class="card-wrapper">
        <img src="../assets/images/django-community.svg" alt="djangoLogo">
        <div class="card-inner">
          <span class="card-span">#Django</span>
          <span class="card-span">#学習中</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Skill'
}
</script>

<style lang="css" scoped>
img {
  width: 150px;
  height: 150px;
  margin: auto;
}
</style>
