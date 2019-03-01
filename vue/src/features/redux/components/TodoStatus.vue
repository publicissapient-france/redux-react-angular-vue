<template>
  <div>
    {{ remaining }} / {{ total }} {{ label }}
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { Getter } from 'vuex-class';
  import { Todo } from '@/domains/models';
  import { FILTRED_TODOS } from '@/features/redux/store';

  @Component
  export default class TodoStatus extends Vue {
    @Getter(FILTRED_TODOS) todos!: Todo[];

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
