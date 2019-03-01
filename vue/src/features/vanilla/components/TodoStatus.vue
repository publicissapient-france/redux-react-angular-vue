<template>
  <div>
    {{ remaining }} / {{ total }} {{ label }}
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { Todo } from '@/domains/models';

  @Component
  export default class TodoStatus extends Vue {
    @Prop() private todos!: Todo[];

    get total() {
      return this.todos.length;
    }

    get remaining() {
      return this.todos.filter(todo => !todo.done).length;
    }

    get label() {
      return this.remaining === 0 ? 'Nothing to do !': 'remaining';
    }
  }
</script>

<style scoped>

</style>
