<template>
  <el-container>
    <el-header>
      Todo App
    </el-header>

    <el-main>
      <!--<TodoVanillaApp/>-->
      <TodoReduxApp/>
    </el-main>
  </el-container>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import TodoVanillaApp from '@/features/vanilla/TodoVanillaApp.vue';
  import TodoReduxApp from '@/features/redux/TodoReduxApp.vue';

  @Component({
    components: {
      TodoVanillaApp,
      TodoReduxApp
    },
  })
  export default class App extends Vue {
  }
</script>

<style>
  body {
    margin: 0;
  }

  .el-header {
    text-align: center;
    font-family: cursive;
    padding-top: 4px;
    font-size: 32px;
    background-color: #eaeaea;
  }
</style>
