<template>
  <div>name: {{name}}</div>
  <button @click="onClick">thisthis</button>
</template>

<script>
import { watchEffect } from 'vue';

export default {
  props: {
    name: String,
  },

  setup(props) {
    function onClick() {
      console.log(this, 'this');
    }

    watchEffect(() => {
      console.log(props.name, '========');
    });

    return {
      onClick,
    };
  },
};
</script>

<style lang='less' scoped>
</style>
