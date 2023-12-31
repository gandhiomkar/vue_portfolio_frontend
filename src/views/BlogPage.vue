<template>
  <div class="blog-page">
    <div class="blog-list">
      <BlogCard v-for="blog in blogs" :key="blog.id" :blog="blog" />
    </div>
  </div>
</template>

<script>
import BlogCard from "@/components/BlogCard.vue";

export default {
  name: "BlogPage",
  components: {
    BlogCard,
  },
  data() {
    return {
      blogs: [
        {
          id: 1,
          title: "The Importance of Code Comments",
          image: "https://picsum.photos/400/300?random=1",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, ante ac tincidunt ullamcorper, mauris lorem aliquet elit, sed tincidunt nunc nunc id nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed euismod, ante ac tincidunt ullamcorper, mauris lorem aliquet elit, sed tincidunt nunc nunc id nisl.",
          readMoreLink: "blog1",
        },
        {
          id: 2,
          title: "GitHub Copilot: AI-Powered Coding Assistant",
          image: "https://picsum.photos/400/300?random=2",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, ante ac tincidunt ullamcorper, mauris lorem aliquet elit, sed tincidunt nunc nunc id nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed euismod, ante ac tincidunt ullamcorper, mauris lorem aliquet elit, sed tincidunt nunc nunc id nisl.",
          readMoreLink: "blog2",
        },
        {
          id: 3,
          title: "The Challenges of Number Input",
          image: "https://picsum.photos/400/300?random=3",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, ante ac tincidunt ullamcorper, mauris lorem aliquet elit, sed tincidunt nunc nunc id nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed euismod, ante ac tincidunt ullamcorper, mauris lorem aliquet elit, sed tincidunt nunc nunc id nisl.",
          readMoreLink: "blog3",
        },
        {
          id: 4,
          title: "Common Mistakes Made by Beginner Programmers",
          image: "https://picsum.photos/400/300?random=4",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, ante ac tincidunt ullamcorper, mauris lorem aliquet elit, sed tincidunt nunc nunc id nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed euismod, ante ac tincidunt ullamcorper, mauris lorem aliquet elit, sed tincidunt nunc nunc id nisl.",
          readMoreLink: "blog4",
        },
        {
          id: 5,
          title: "Best Practices for Writing Multiple Choice Test Questions",
          image: "https://picsum.photos/400/300?random=5",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, ante ac tincidunt ullamcorper, mauris lorem aliquet elit, sed tincidunt nunc nunc id nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed euismod, ante ac tincidunt ullamcorper, mauris lorem aliquet elit, sed tincidunt nunc nunc id nisl.",
          readMoreLink: "blog5",
        },
      ], // Fetch the blog data from an API or define it here
    };
  },
  created() {
    this.fetchBlogData();
  },
  methods: {
    async fetchBlogData() {
      try {
        const response = await fetch("/api/blog"); // Replace '/api/blog' with your actual API endpoint
        const data = await response.json();
        this.blogs = data;
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    },
  },
};
</script>

<style>
.blog-page {
  padding: 20px;
}

/* .blog-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
} */

.blog-list {
  display: flex;
  flex-direction: column; /* Change the flex-direction to column */
  gap: 20px;
  justify-content: center;
  align-items: center;
}
</style>
