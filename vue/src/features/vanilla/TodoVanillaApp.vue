<template>
  <div class="todos">
    <h1>Todo list</h1>

    <el-card class="box-card">
      <div slot="header">
        <TodoAdd @add="add" />
      </div>

      <TodoCategory :category="category" @selected="selectCategory"/>

      <TodoList
        :tasks="filtredTasks"
        @taskStatusChanged="taskStatusChanged"
        @removeTask="removeTask"
      />

      <TodoStatus :tasks="tasks" />
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
    @Prop() private msg!: string;

    private tasks: Todo[] = [];
    private category: string = 'all';

    mounted() {
      this.refresh();
    }

    async refresh() {
      this.tasks = await getTodos();
    }

    get filtredTasks() {
      if (this.category === 'active') {
        return this.tasks.filter(task => !task.done);
      }

      if (this.category === 'completed') {
        return this.tasks.filter(task => task.done);
      }

      return this.tasks;
    }

    async add(label: string) {
      await addTodo({
        id: 0,
        label,
        done: false,
      });

      this.refresh();
    }

    async taskStatusChanged(doneTask: Todo) {
      await updateTodo({
        ...doneTask,
        done: !doneTask.done
      });

      this.refresh();
    }

    async removeTask(removedTask: Todo) {
      await removeTodo(removedTask);

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
