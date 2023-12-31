<template>
  <div class="blog-card">
    <img :src="blog.image" alt="Blog Image" />
    <h3>{{ blog.title }}</h3>
    <p>{{ truncatedText }}</p>
    <a href="#" v-if="showReadMore" @click.prevent="toggleReadMore">
      Read More
    </a>
    <p v-else>{{ blog.text }}</p>
  </div>
</template>

<script>
export default {
  name: "BlogCard",
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showReadMore: true,
    };
  },
  computed: {
    truncatedText() {
      const MAX_LENGTH = 100;
      if (this.blog.text.length > MAX_LENGTH) {
        return this.blog.text.substring(0, MAX_LENGTH) + "...";
      }
      return this.blog.text;
    },
  },
  methods: {
    toggleReadMore() {
      this.showReadMore = !this.showReadMore;
    },
  },
};
</script>

<style scoped>
.blog-card {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  width: 60%;
}

.blog-card img {
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 10px;
}

.blog-card h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

.blog-card p {
  margin-bottom: 10px;
}

.blog-card a {
  color: blue;
  cursor: pointer;
}
</style>
