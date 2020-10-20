<template>
  <div id="app">
    <h1>{{ count }}</h1>
    <button @click="increase">add</button>
  </div>
</template>

<script>
import Vuex, {mapGetters} from 'vuex';

export default {
  computed: {
    count() {
      return this.$store.state.count;
    },
    ...mapGetters(['todosNotDone']),
  },
  methods: {
    increase() {
      this.$store.commit('addCount');
    },
    /*
    ...Vuex.mapMutations(["addCount"]),
    ...Vuex.mapMutations({
      increase: "addCount"
    }),
    */
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
