<template>
  <div class="todos">
    <h1>Todo list</h1>

    <el-card class="box-card">
      <div slot="header">
        <TodoAdd />
      </div>

      <TodoCategory />

      <TodoList />

      <TodoStatus />
    </el-card>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import TodoAdd from './components/TodoAdd.vue';
  import TodoCategory from './components/TodoCategory.vue';
  import TodoList from './components/TodoList.vue';
  import TodoStatus from './components/TodoStatus.vue';
  import { LOAD_TODOS, store } from '@/features/redux/store';

  @Component({
    components: {
      TodoCategory,
      TodoStatus,
      TodoList,
      TodoAdd,
    },
    store,
  })
  export default class TodoReduxApp extends Vue {
    mounted() {
      this.$store.dispatch(LOAD_TODOS);
    }
  }
</script>

<style scoped>
  .todos {
    width: 700px;
    margin: auto;
  }
</style>
