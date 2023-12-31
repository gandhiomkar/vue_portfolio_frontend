<template>
  <div class="container h-100"><h1>Homepage</h1></div>
  <div class="gallary_container">
    <ImageComponent
      v-for="(item, index) in items"
      :key="index"
      :isrc="item.src"
      :ialt="item.alt"
    />
  </div>
</template>

<script>
import ImageComponent from "@/components/ImageComponent.vue";
export default {
  name: "HomePage",
  components: { ImageComponent },
  data() {
    return {
      items: [
        { src: "picsum.photos/id/599/800/530", alt: "value2" },
        { src: "picsum.photos/400/300?random=1", alt: "value4" },
        {
          src: "picsum.photos/600/300?random=2",
          alt: "mosaic collection image",
        },
        {
          src: "picsum.photos/200/500?random=3",
          alt: "mosaic collection image",
        },
        {
          src: "picsum.photos/800/300?random=4",
          alt: "mosaic collection image",
        },
        {
          src: "picsum.photos/200/300?random=5",
          alt: "mosaic collection image",
        },
        {
          src: "picsum.photos/200/300?random=6",
          alt: "mosaic collection image",
        },
        {
          src: "picsum.photos/200/300?random=7",
          alt: "mosaic collection image",
        },
        {
          src: "picsum.photos/200/300?random=8",
          alt: "mosaic collection image",
        },
        {
          src: "picsum.photos/200/300?random=9",
          alt: "mosaic collection image",
        },

        // Add more items as needed
      ],
    };
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-size: 18px;
}
.gallary_container {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
  grid-auto-rows: 15.5em;
  padding: 10px;
}
</style>
