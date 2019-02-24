<template>
  <div>
    <div v-for="task in tasks" :key="task.id" class="item">
      <el-checkbox @change="taskStatusChanged(task)" :value="task.done">
        <span :class="{'done': task.done}">{{ task.label }}</span>
      </el-checkbox>
      <button @click="removeTask(task)">
        <i class="el-icon-delete"></i>
      </button>
    </div>
    <div v-if="!tasks.length">
      <p>No tasks.</p>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { Todo } from '@/domains/models';

  @Component
  export default class TodoList extends Vue {
    @Prop() private tasks!: Todo[];

    taskStatusChanged(task: Todo) {
      this.$emit('taskStatusChanged', task);
    }

    removeTask(task: Todo) {
      this.$emit('removeTask', task);
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
