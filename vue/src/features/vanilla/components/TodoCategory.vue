<template>
  <ul>
    <li
      v-for="cat in categories"
      :key="cat"
      :class="{'selected': cat === category}"
      @click="select(cat)">
      {{ cat }}
    </li>
  </ul>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class TodoList extends Vue {
    @Prop() category!: string;
    categories: string[] = ['all', 'active', 'completed'];

    select(category: string) {
      this.$emit('selected', category);
    }
  }
</script>

<style lang="scss" scoped>
  ul {
    display: flex;
    list-style-type: none;
    justify-content: flex-end;
    margin: 0;
    padding: 0;

    li {
      padding: 5px;
      cursor: pointer;

      &.selected {
        border-bottom: 1px solid;
      }
    }
  }
</style>
