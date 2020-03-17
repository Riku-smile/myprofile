<template lang="html">
  <section class="container mx-auto my-4 rounded">
    <div class="text-center">
      <h2 class="title-h2">Introduce</h2>
    </div>
    <p class="text-center text-sm">↓クリックすると裏面に移行します↓</p>
    <div class="bg-green-700 mx-auto max-w-xl p-4" @click="surface = !surface">
      <transition mode="out-in">
        <!-- 表面 -->
        <div id="surface" class="inner" v-if="surface" key="surface">
          <img src="../assets/images/メール.png" alt="プロフィール写真">
          <div class="content">
            <span>名前:</span><p>RIKU</p>
          </div>
          <div class="content">
            <span>年齢:</span><p>19</p>
          </div>
        </div>
        <!-- 裏面 -->
        <div id="reverse" class="inner" v-else key="reverse">
          <div class="content">
            <span>居住地:</span><p>横浜市</p>
          </div>
          <div class="content">
            <span>職業:</span><p>大学生</p>
          </div>
          <div class="content">
            <span>好きな食べ物:</span><p>家系ラーメン</p>
          </div>
          <div class="content">
            <span>好きな運動:</span><p>バスケ、テニス</p>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Introduce',
  data () {
    return {
      surface: true
    }
  }
}
</script>

<style lang="css" scoped>
img {
  background-color: rgb(230,230,230);
  border-radius: 100%;
  width: 200px;
  height: 200px;
  margin: 0 auto;
}
.inner {
  height: 400px;
  @apply block bg-white shadow p-2
}
.content {
  @apply text-center border-b border-gray-700 px-6 py-4
}
.content p {
  @apply text-2xl text-black w-full
}
.content p span {
  @apply text-xs w-1/4 text-right
}
.v-enter, .v-leave-to {
  opacity: 0;
}
.v-enter-active, .v-leave-active {
  transition: opacity .5s;
}
</style>
