<template>
  <div>
    <!-- Vue tag to add header component -->
    <div class="container">
      <h1>this is homepage</h1>
      <p>hello world</p>
      <p>
        <router-link to="/" style="text-decoration: underline"
          >Back to home</router-link
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  components: {},
};
</script>
