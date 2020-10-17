<template>
  <div>
    <h1>Products</h1>
    <template v-if="product">
      <h2>name: {{ product.name }}</h2>
      <h2>price: {{ product.price }}</h2>
      <router-link to="/products">back to all products</router-link>
    </template>
    <template v-else>
      <ul>
        <li v-for="(item, id) in allStuff" :key="id">
          <router-link :to="'products/' + id">{{ item.name }}</router-link>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allStuff: {
          1: {name: 'shoes', price: 100},
          2: {name: 'T-shirt', price: 200},
          3: {name: 'pants', price: 250},
      },
    }
  },
  computed: {
    product() {
      return this.allStuff[this.$route.params.productId]
        ? this.allStuff[this.$route.params.productId]
        : null;
    }
  },
}
</script>
