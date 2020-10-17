## 組件間的溝通

### 基本方式

- 上 => 下： v-bind、props
- 下 => 上： $emit、v-on

### Event Bus

- 組件A發出 $emit 給 event bus
- 組件B用 $on 監聽來自 event bus 的 $emit

### vuex

- 各組件可以發出 commit => mutations => 取得 state => 返回渲染各組件



## 什麼時候該導入 Vuex？

- 組件很少互相溝通，上下傳遞就很夠：不用Vuex
- 組件會互相溝通，但情境很固定，數量也很少：用 Event Bus
- 組件常會跨結構的傳遞狀態：vuex
- 需要全域狀態管理：vuex