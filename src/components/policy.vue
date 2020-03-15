<template lang="html">
  <section class="container mx-auto my-4">
    <div class="text-center">
      <h2 class="title-h2">Policy</h2>
    </div>
    <div class="bg-white mx-auto max-w-lg shadow">
      <ul class="flex justify-start border-b">
        <li class="tab-btn">
          <button type="button" @click="isSelect(1)" :class="{'active':isActive == 1}">その１</button>
        </li>
        <li class="tab-btn">
          <button type="button" @click="isSelect(2)" :class="{'active':isActive == 2}">その２</button>
        </li>
        <li class="tab-btn">
          <button type="button" @click="isSelect(3)" :class="{'active':isActive == 3}">その３</button>
        </li>
      </ul>
      <div class="px-8 py-4">
        <!-- 1 -->
        <div v-if="isActive == 1">
          <h3 class="title">納品後のご対応について</h3>
          <p class="content">
            納品後は２週間まで修正期間を設けます。<br>
            何かご不満な点やバグ等がございましたら遠慮なくお申し付けください。<br>
            なお、２週間経過後も有料にて修正のご対応をさせて頂きますので、お気軽にご依頼ください。
          </p>
        </div>
        <!-- 2 -->
        <div v-else-if="isActive == 2">
          <h3 class="title">不都合によりお電話をお受けできなかった場合</h3>
          <p class="content">
            翌日までに必ず折り返しお電話させて頂きます。<br>
            また、お急ぎの場合は恐縮ですが、お電話対応の時間を作業に充てたい為、
            メールやツール等でのご連絡も併せてお願い申し上げます。
          </p>
        </div>
        <!-- 3 -->
        <div v-else-if="isActive == 3" class="content">
          <h3 class="title">期日厳守</h3>
          <p class="content">
            決められた納期、期限は必ず守ります。<br>
            また、作業の進捗報告についてクライアント様側からの指定がない場合は
            その都度必要に応じてご連絡いたします。
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Policy',
  data () {
    return {
      isActive: 1
    }
  },
  methods: {
    isSelect: function (num) {
      this.isActive = num
    }
  }
}
</script>

<style lang="css" scoped>
.tab-btn {
  @apply bg-white inline-block py-2 px-4 text-green-700 text-lg font-semibold
}
.tab-btn:hover {
  @apply text-green-400
}
.title {
  @apply mb-2 text-xl font-serif underline
}
.content {
  @apply text-lg
}
.active {
  @apply underline
}
</style>
