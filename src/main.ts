import { createApp } from 'vue';
import { setupAssets } from './plugins';
import { setupRouter } from './router';
import { setupStore } from './stores';
import App from './App.vue';

async function setupApp() {
  // import assets
  setupAssets();

  // create app instance
  const app = createApp(App);

  // install store plugin: pinia
  setupStore(app);

  // install vue-router
  await setupRouter(app);

  // mount app
  app.mount('#app');
}

setupApp();
