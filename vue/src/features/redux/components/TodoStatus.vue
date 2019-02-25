<template>
  <div>
    {{ remaining }} / {{ total }} {{ label }}
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { Todo } from '@/domains/models';
  import { mapState } from 'vuex';

  @Component({
    computed: {
      // ...mapState(['tasks']),
    }
  })
  export default class TodoStatus extends Vue {
    get tasks(): Todo[] {
      return this.$store.getters.filtredTasks;
    }

    get total() {
      return this.tasks.length;
    }

    get remaining() {
      return this.tasks.filter(task => !task.done).length;
    }

    get label() {
      return this.remaining === 0 ? 'Nothing to do !': 'remaining';
    }
  }
</script>

<style scoped>

</style>
