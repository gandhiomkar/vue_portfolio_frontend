import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "./views/HomePage.vue";
import HelloWorld from "./views/HelloWorld.vue";
import ContactUs from "./views/ContactUs.vue";
import NotFound from "./views/NotFound.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/hello",
    component: HelloWorld,
  },
  {
    path: "/*",
    component: NotFound,
  },
  {
    path: "/contact",
    component: ContactUs,
  },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

// 5. Create and mount the root instance.
// const app = Vue.createApp({});
// // Make sure to _use_ the router instance to make the
// // whole app router-aware.
// app.use(router);

// app.mount("#app");

export default router;
