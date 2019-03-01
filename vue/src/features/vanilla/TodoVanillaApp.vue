<template>
  <div class="todos">
    <h1>Todo list</h1>

    <el-card class="box-card">
      <div slot="header">
        <TodoAdd @add="add" />
      </div>

      <TodoCategory :category="category" @selected="selectCategory"/>

      <TodoList
        :todos="filtredTodos"
        @todoStatusChanged="todoStatusChanged"
        @removeTodo="removeTodo"
      />

      <TodoStatus :todos="todos" />
    </el-card>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { Todo } from '@/domains/models';
  import { addTodo, getTodos, removeTodo, updateTodo } from '@/services/todo.service';
  import TodoAdd from './components/TodoAdd.vue';
  import TodoCategory from './components/TodoCategory.vue';
  import TodoList from './components/TodoList.vue';
  import TodoStatus from './components/TodoStatus.vue';

  @Component({
    components: {
      TodoCategory,
      TodoStatus,
      TodoList,
      TodoAdd,
    },
  })
  export default class TodoVanillaApp extends Vue {
    private todos: Todo[] = [];
    private category: string = 'all';

    mounted() {
      this.refresh();
    }

    async refresh() {
      this.todos = await getTodos();
    }

    get filtredTodos() {
      if (this.category === 'active') {
        return this.todos.filter(todo => !todo.done);
      }

      if (this.category === 'completed') {
        return this.todos.filter(todo => todo.done);
      }

      return this.todos;
    }

    async add(label: string) {
      await addTodo({
        id: 0,
        label,
        done: false,
      });

      this.refresh();
    }

    async todoStatusChanged(doneTodo: Todo) {
      await updateTodo({
        ...doneTodo,
        done: !doneTodo.done
      });

      this.refresh();
    }

    async removeTodo(removedTodo: Todo) {
      await removeTodo(removedTodo);

      this.refresh();
    }

    selectCategory(category: string) {
      this.category = category;
    }
  }
</script>

<style scoped>
  .todos {
    width: 700px;
    margin: auto;
  }
</style>
