<template>
  <div class='test'>
    <div>{{aaaaaaaaaarrrr}}----{{arr}}</div>
    <div>状态count： {{count}}</div>
    <div>count * 2 = {{doubleCount}}</div>
    <button @click="add">Add</button>
    <hr>
    <div>routeInfo: {{routeInfo}}</div>
    <hr>
    <div>store a {{a}}</div>
    <button @click="updateA">update: a</button>
  </div>
</template>

<script>
import {
  ref,
  watch,
  computed,
  getCurrentInstance,
  reactive,
  watchEffect,
  readonly,
  onMounted,
} from 'vue';

export default {
  setup() {
    const aaaaaaaaaarrrr = ref([1, 3, 5]);
    console.log(aaaaaaaaaarrrr.value[0]);
    const { ctx } = getCurrentInstance();
    const curRoute = ctx.$router.currentRoute.value;
    const routeInfo = ref(curRoute);
    const arr = reactive([ref(0), ref(2)]);
    console.log(arr[1].value);
    const count = ref(1);
    count.value += 10;
    const doubleCount = computed(() => count.value * 2);
    const a = computed(() => ctx.$store.state.test.a);
    console.log(count.value, 'first'); // 11
    const plusThree = computed({
      get: () => count.value + 3,
      set: (val) => {
        count.value = val - 1;
      },
    });

    console.log(count.value, '1'); // 11
    plusThree.value += 1000; // 14 + 1000 - 1 = 1013
    console.log(plusThree.value, '2'); // 1013 + 3 = 1016
    console.log(count.value, '-------one--------'); // 14 + 1000 - 1 = 1013
    plusThree.value += 1000; // 1016 + 1000 - 1 = 2015
    console.log(plusThree.value, '3'); // 2015 + 3 = 2018
    console.log(count.value, '--------two-------'); // 2015

    const add = () => {
      count.value += 1;
      routeInfo.value = { des: '清空啦 哈哈哈' };
    };

    watch(() => count.value, (val) => {
      console.log(`count is ${val}`);
    });
    const updateA = () => {
      ctx.$store.commit('setTestA', count);
    };

    const map = reactive(new Map([['foo', ref(0)]]));
    console.log(map.get('foo').value);

    // --------------------readonly------------------------------
    const original = reactive({ name: 99 });
    const copy = readonly(original);

    const stop = watchEffect(() => {
      console.log(copy.name, 'hhhhhhhhhhh');
    });

    let n = 0;
    setInterval(() => {
      n += 1;
      if (n > 3) {
        stop();
        return;
      }
      original.name += 1000;
    }, 1000);

    onMounted(() => {
      console.log('mounted, mounted, mounted');
      watchEffect(() => {
        console.log(copy.name, 'mounted');
      });
    });

    return {
      count,
      arr,
      aaaaaaaaaarrrr,
      routeInfo,
      doubleCount,
      add,
      a,
      updateA,
    };
  },
};
</script>

<style lang='less' scoped>
</style>
