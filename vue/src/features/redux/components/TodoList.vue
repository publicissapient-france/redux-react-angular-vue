<template>
  <div>
    <div v-for="todo in filtredTodos" :key="todo.id" class="item">
      <el-checkbox @change="todoStatusChanged(todo)" :value="todo.done">
        <span :class="{'done': todo.done}">{{ todo.label }}</span>
      </el-checkbox>
      <button @click="removeTodo(todo)">
        <i class="el-icon-delete"></i>
      </button>
    </div>
    <div v-if="!filtredTodos.length">
      <p>No todos.</p>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { Action, Getter } from 'vuex-class';
  import { Todo } from '@/domains/models';
  import { FILTRED_TODOS, REMOVE_TODO, UPDATE_TODO } from '@/features/redux/store';

  @Component
  export default class TodoList extends Vue {
    @Getter(FILTRED_TODOS) filtredTodos!: Todo[];
    @Action(REMOVE_TODO) removeTodo!: Function;

    async todoStatusChanged(doneTodo: Todo) {
      this.$store.dispatch(UPDATE_TODO, {
        ...doneTodo,
        done: !doneTodo.done
      });
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
