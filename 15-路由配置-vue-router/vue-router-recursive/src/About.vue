<template>
  <div>
    <h1>About</h1>

    <router-link to="/about/us">US</router-link>
    <router-link to="/about/you">YOU</router-link>
    <router-link to="/about/both">BOTH</router-link>

    <router-view></router-view>
    <!-- 等價於 (具名視圖預設的 name 為 default) -->
    <router-view name="default"></router-view>

    <hr>

    <!-- 具名視圖 -->
    <router-view></router-view>
    <router-view name="another"></router-view>

  </div>
</template>
