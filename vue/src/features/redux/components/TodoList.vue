<template>
  <div>
    <div v-for="task in filtredTasks" :key="task.id" class="item">
      <el-checkbox @change="taskStatusChanged(task)" :value="task.done">
        <span :class="{'done': task.done}">{{ task.label }}</span>
      </el-checkbox>
      <button @click="removeTask(task)">
        <i class="el-icon-delete"></i>
      </button>
    </div>
    <div v-if="!filtredTasks.length">
      <p>No tasks.</p>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { Todo } from '@/domains/models';
  import { mapGetters } from 'vuex';
  import { ADD_TASK, REMOVE_TASK, UPDATE_TASK } from '@/features/redux/store';

  @Component({
    computed: {
      // ...mapState(['tasks']),
      ...mapGetters(['filtredTasks'])
    },
  })
  export default class TodoList extends Vue {
    async taskStatusChanged(doneTask: Todo) {
      this.$store.dispatch(UPDATE_TASK, {
        ...doneTask,
        done: !doneTask.done
      });
    }

    async removeTask(removedTask: Todo) {
      this.$store.dispatch(REMOVE_TASK, removedTask);
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
