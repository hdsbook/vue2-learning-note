> 問題：
>
> 有時候組件可能會用到別的 Vue 實例，而該實例不是用同一個路由建立出來的
>
> 如此就無法取得 this.$route

1. 解法：加上`props: true`

```javascript
{
    path: 'products/:id?',
    component: Product,
    props: true,
}
```

則組件原本是由 `this.$route.params.id` 來取得 id，現在可以宣告 props 來取得之

```javascript
// 原本
export default {
    computed: {
        id() {
            return this.$route.params.id;
        }
    },
}

// 現在可以
export default {
    props: ['id']
}
```

2. 可以傳入物件進一步做到指定 props 的值

```javascript
{
    path: 'products/:id?',
    component: Product,
    props: {
        id: 3
    },
}
```

3. 也可以用函式指定

```javascript
{
    path: 'products/:id?',
    component: Product,
    props: (route) => {
        return {
            // id: 3
            id: route.params.id,
        };
    },
}
```