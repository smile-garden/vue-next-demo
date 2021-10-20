<template>
  <child1 :name="name"/>
  <button @click="changeName">换个名字</button>
  <render />
  <div ref="root">a template</div>
  <div v-for="(item, i) in list" :key="i" :ref="el => { if (el) divs[i] = el }">
    {{item}}
  </div>
</template>

<script>
import {
  ref,
  watchEffect,
  shallowReadonly,
  toRefs,
  onMounted,
  onBeforeUpdate,
} from 'vue';
import Child1 from './components/Child1.vue';
import Render from './components/Render.vue';

export default {
  components: {
    Child1,
    Render,
  },
  props: {
    title: String,
    user: {
      type: String,
      default: '222222222222222',
    },
  },
  setup(props, context) {
    const { attrs, slots, emit } = context;
    console.log(props, attrs, slots, emit);
    const { user } = toRefs(props);
    console.log(user.value);
    const name = ref('我是name');

    const state = shallowReadonly({
      foo: 1,
      nested: {
        bar: 2,
      },
    });
    // state.foo += 1;
    state.nested.bar += 1;
    console.log(state.nested, 'shallow');
    watchEffect(() => {
      console.log(`name: ${name.value}`);
    });
    const root = ref(null);
    onMounted(() => {
      console.log(root.value);
    });

    const list = [1, 3, 5];
    const divs = ref([]);

    onBeforeUpdate(() => {
      divs.value = [];
    });

    return {
      name,
      root,
      list,
      divs,
    };
  },
};
</script>
