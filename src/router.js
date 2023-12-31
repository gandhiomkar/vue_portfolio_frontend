import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./views/HomePage.vue";
import HelloWorld from "./views/HelloWorld.vue";
import ContactUs from "./views/ContactUs.vue";
import CustomerTestimonials from "./views/CustomerTestimonials.vue";
import PortfolioPage from "./views/PortfolioPage.vue";
import BlogPage from "./views/BlogPage.vue";
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
    path: "/testimonials",
    component: CustomerTestimonials,
  },
  {
    path: "/contact",
    component: ContactUs,
  },
  {
    path: "/Blog",
    component: BlogPage,
  },
  {
    path: "/portfolio",
    component: PortfolioPage,
  },
  {
    path: "/*",
    redirect: "/404",
  },
  {
    path: "/404",
    component: NotFound,
  },
];

const router = createRouter({
  mode: "history",
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

// 5. Create and mount the root instance.
// const app = Vue.createApp({});
// // Make sure to _use_ the router instance to make the
// // whole app router-aware.
// app.use(router);

// app.mount("#app");

export default router;
