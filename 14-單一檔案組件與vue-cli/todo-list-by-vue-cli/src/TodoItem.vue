<script>
export default {
  props: ["todo"],
}
</script>

<template>
  <li>{{ todo }}</li>
</template>

<style scoped>
  li {
    background-color: #fed;
    padding: 5px 10px;
    margin: 5px;
    cursor: pointer;
  }
  li:hover {
    background-color: #def;
  }
</style>
