<template>
  <child1 :name="name"/>
  <button @click="changeName">换个名字</button>
  <render />
</template>

<script>
import {
  ref,
  watchEffect,
  reactive,
} from 'vue';
import Child1 from './components/Child1.vue';
import Render from './components/Render.vue';

export default {
  components: {
    Child1,
    Render,
  },

  setup() {
    const name = ref('我是name');
    const obj = reactive({ foo: 'barbarbar' });
    const changeName = () => {
      name.value = '我叫哈哈哈';
    };

    watchEffect(() => {
      console.log(`name: ${name.value}`);
    });

    return {
      name,
      obj,
      changeName,
    };
  },
};
</script>

<style lang='less' scoped>
</style>
