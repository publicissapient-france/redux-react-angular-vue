<template>
  <el-input
    type="text"
    placeholder="What needs to be done ?"
    v-model="text"
    @keypress.enter.native="add"/>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { ADD_TODO } from '@/features/redux/store';

  @Component
  export default class TodoList extends Vue {
    text: string = '';

    async add() {
      if (!this.text) {
        return;
      }

      this.$store.dispatch(ADD_TODO, this.text);
      this.text = '';
    }
  }
</script>

<style scoped>

</style>
