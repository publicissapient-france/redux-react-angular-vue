<template>
  <div>
    <div v-for="todo in todos" :key="todo.id" class="item">
      <el-checkbox @change="todoStatusChanged(todo)" :value="todo.done">
        <span :class="{'done': todo.done}">{{ todo.label }}</span>
      </el-checkbox>
      <button @click="removeTodo(todo)">
        <i class="el-icon-delete"></i>
      </button>
    </div>
    <div v-if="!todos.length">
      <p>No todos.</p>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { Todo } from '@/domains/models';

  @Component
  export default class TodoList extends Vue {
    @Prop() private todos!: Todo[];

    todoStatusChanged(todo: Todo) {
      this.$emit('todoStatusChanged', todo);
    }

    removeTodo(todo: Todo) {
      this.$emit('removeTodo', todo);
    }
  }
</script>

<style lang="scss" scoped>
  .item {
    display: flex;
    margin: 10px;

    label {
      flex: 1;
    }

    button {
      border: 0 none;
      background: transparent;
      font-size: 18px;
      cursor: pointer;
    }

    .done {
      text-decoration: line-through;
    }
  }
</style>
