
## 在 html 模版中不能用 camelCase/PascalCase 來命名 props，如： -->

```html
<!-- 可以 -->
<my-component my-message="hello"></my-component>

<!-- 不可以 -->
<my-component myMessage="hello"></my-component>
```

## 但 用字串模版的話，就沒有此限制 (因其不需要事先經過瀏覽器的解析)

```javascript
<script>
    Vue.component('my-component', {
        props: ['myMessage'],
        template: '<h1>{{ myMessage }}</h1>'
    });

    new Vue({
        el: "#app",
        template: `
            <div>
                <my-component myMessage="hello"></my-component>
            </div>
        `
    });
</script>
```