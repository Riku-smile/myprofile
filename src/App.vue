<template>
  <div id="app">
    <transition mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<style>
#app {
  background-image: url("./assets/images/repeated-square.png");
}
.v-enter, .v-leave-to {
  opacity: 0;
}
.v-enter-active, .v-leave-active {
  transition: opacity .5s;
}
</style>
