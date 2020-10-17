<template>
  <div>
    <h1>About</h1>
    <small>試在網址後面加上參數如：/about?id=4</small>
    <p>
      query id：
      <b v-if="id">{{ id }}</b>
      <b v-else>NONE</b>
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    id() {
      return this.$route.query.id;
    }
  },
}
</script>
