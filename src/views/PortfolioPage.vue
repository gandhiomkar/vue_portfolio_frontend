<template>
  <div class="portfolio-page">
    <h2>Portfolio</h2>
    <div class="album-cards">
      <AlbumCard
        v-for="album in albums"
        :key="album.id"
        :album="album"
        @click="openAlbum(album.id)"
      />
    </div>
  </div>
</template>

<script>
import AlbumCard from "../components/AlbumCard.vue";

export default {
  name: "PortfolioPage",
  components: {
    AlbumCard,
  },
  data() {
    return {
      albums: [
        {
          id: 1,
          name: "Album 1",
          coverImage: "https://picsum.photos/400/300?random=1",
        },
        {
          id: 2,
          name: "Album 2",
          coverImage: "https://picsum.photos/400/300?random=2",
        },
        {
          id: 3,
          name: "Album 3",
          coverImage: "https://picsum.photos/400/300?random=3",
        },
        {
          id: 4,
          name: "Album 4",
          coverImage: "https://picsum.photos/400/300?random=4",
        },
        // Add more albums here
      ],
    };
  },
  methods: {
    openAlbum(albumId) {
      // Use Vue Router to navigate to the album page based on the album ID
      this.$router.push(`/album/${albumId}`);
    },
  },
};
</script>

<style scoped>
.portfolio-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.album-cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

@media (max-width: 768px) {
  .album-cards {
    justify-content: center;
  }
}
/* Additional styles can be added as per your requirements */
</style>
