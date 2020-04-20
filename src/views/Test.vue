<template>
  <div class='test'>
    <div>状态count： {{count}}</div>
    <button @click="add">Add</button>
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  setup() {
    const count = ref(333);
    const add = () => {
      count.value += 1;
    };

    watch(() => count.value, (val) => {
      // eslint-disable-next-line no-console
      console.log(`count is ${val}`);
    });

    return {
      count,
      add,
    };
  },
};
</script>

<style lang='less' scoped>
</style>
