<script>
import TodoInput from './TodoInput.vue';
import TodoItem from './TodoItem.vue';

export default {
  name: 'app',
  components: {
    TodoInput,
    TodoItem
  },
  data () {
    return {
      todos: [
        'vue init webpack-simple [project-name]',
        'cd [project-name]',
        'npm install',
        'npm run dev',
      ]
    }
  },
  methods: {
    addTodo(todo){
      this.todos.push(todo);
    },
    removeTodo(idx){
      this.todos.splice(idx, 1);
    }
  },
}
</script>

<template>
  <div id="app">
    <TodoInput @addTodo="addTodo"/>
    <ul>
      <TodoItem v-for="(todo, idx) in todos" :key="idx"
        :todo="todo"
        @click.native="removeTodo(idx)" />
    </ul>
  </div>
</template>

