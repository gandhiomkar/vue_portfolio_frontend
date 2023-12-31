<template>
  <div>
    <!-- Vue tag to add header component -->
    <div class="container">
      <h1>Testimonials</h1>
      <CustomerTestimonial />
      <p>
        <router-link to="/" style="text-decoration: underline"
          >Back to home</router-link
        >
      </p>
    </div>
  </div>
</template>

<script>
import CustomerTestimonial from "../components/CustomerTestimonial.vue";
export default {
  name: "CustomerTestimonials",
  components: { CustomerTestimonial },
};
</script>
