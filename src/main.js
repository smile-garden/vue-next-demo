import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);
app.use(router).use(store).mount('#app');
console.log(app);
console.log(app.config);

app.config.globalProperties.customA = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
// app.config.isCustomElement = (tag) => tag.startWith('icon-');
