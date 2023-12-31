<template>
  <div class="album-card" @click="$emit('click')">
    <img :src="album.coverImage" alt="Album Cover" />
    <h3>{{ album.name }}</h3>
  </div>
</template>

<script>
export default {
  name: "AlbumCard",
  props: {
    album: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.album-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
}

.album-card img {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.album-card h3 {
  font-size: 18px;
  text-align: center;
}

/* Additional styles can be added as per your requirements */
</style>
