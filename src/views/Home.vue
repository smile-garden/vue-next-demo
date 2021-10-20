<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    {{ b }} ||| {{ o.e }}
    <span v-once>{{ b }}</span>
    <div @click="handleB">+B</div>
    <div v-for="(value, key, index) in obj" :key="key">
      {{ value }} - {{ key }} - {{ index }}
    </div>
    <div :class="[classA, classB, { red: isRed }]">v-bind</div>
    <div :style="[styleA, styleB]">v-bind</div>
    <span v-pre>{{ this will not be compiled }}</span>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
/* import { defineComponent } from 'vue';

const myComponent = defineComponent({
  data() {
    return { name: 'custom' };
  },
  methods: {
    change() {
      console.log(this.name);
    },
  },
});
 */
export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  setup() {
    return {
      b: 111,
      f: 333,
      o: {
        d: 1,
        e: 2,
      },
      obj: {
        a: 'aaaa',
        b: 'bbbb',
        c: 'cccc',
      },
      isRed: true,
      classA: 'classA',
      classB: 'classB',
      styleA: {
        fontSize: '30px',
        fontWeight: 'bold',
      },
      styleB: {
        color: 'blue',
      },
    };
  },
  watch: {
    f: [
      'handle1',
      function handle2() {
        console.log('handle2');
      },
      {
        handler: function handle3() {
          console.log('handle333');
        },
      },
    ],
  },
  created() {
    this.b += 889;
    console.log(this.customA);
    const b = this.$watch('b', (newVal, oldVal) => {
      console.log(newVal, oldVal, 'watch');
    });
    console.log(b, 'bbbbb');
    this.$watch(
      'o',
      (newVal, oldVal) => {
        console.log(newVal, oldVal, 'watch o');
      },
      {
        immediate: true,
        deep: true,
      },
    );
    this.$watch(() => this.b + this.f, (newVal, oldVal) => {
      console.log(newVal, oldVal, 'watch b + f');
    });
  },
  methods: {
    handleB() {
      this.b += 1;
      this.o.e += 10;
    },
    someMethods() {
      console.log('bbbbbb');
    },
    handle1() {
      console.log('ffffff');
    },
  },
};
</script>

<style>
.red {
  color: red;
}

.classA {
  font-weight: bold;
}

.classB {
  font-size: 20px;
}
</style>
