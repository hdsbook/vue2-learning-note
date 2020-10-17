<script>
export default {
  data() {
    return {
      text: '',
    }
  },
  methods: {
    addTodo(){
      this.$emit('addTodo', this.text);
      this.text = '';
    }
  },
}
</script>

<template>
  <form @submit.prevent="addTodo">
    <input type="text" v-model="text">
    <button type="submit">submit</button>
  </form>
</template>
