import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import { createPinia } from "pinia";
import axios from "axios";
import { createPersistedStatePlugin } from "pinia-plugin-persistedstate-2";

createApp(App)
  .use(router)
  .use(createPinia().use((context) => createPersistedStatePlugin()(context)))
  .use({
    install: (app) => {
      app.provide(
        "axios",
        axios.create({
          baseURL: "http://192.168.31.186:80/",
          timeout: 5000,
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
        })
      );
    },
  })
  .mount("#app");
