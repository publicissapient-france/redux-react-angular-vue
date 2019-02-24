<template>
  <el-input
    type="text"
    placeholder="What needs to be done ?"
    v-model="text"
    @keypress.enter.native="add"/>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class TodoList extends Vue {
    text: string = '';

    add() {
      if (!this.text) {
        return;
      }

      this.$emit('add', this.text);
      this.text = '';
    }
  }
</script>

<style scoped>

</style>
