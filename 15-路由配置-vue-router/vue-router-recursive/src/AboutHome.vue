<template>
  <div>
    <h1>Home</h1>

    <!-- 具名路由 -->
    <router-link :to="{name: 'showProd', params: {productId: 1}}">product 1</router-link>
  </div>
</template>
