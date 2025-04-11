<template>
  <VuePlayer
    class="vue-player"
    :autoplay="true"
    :sources="sources"
    :togglePlayOnClick="false"
    :loop="true"
  >
  </VuePlayer>
</template>

<script setup lang="ts">
import { VuePlayer } from '@display-studio/vue-player';

const sources = [
  {
    src: 'https://file-examples.com/storage/fe43f661cd67e82d2a11c0a/2017/04/file_example_MP4_480_1_5MG.mp4',
    type: 'video/mp4',
  },
];
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.vue-player {
  width: 100%;
  height: 70vh;
  position: relative;
  line-height: 0;

  &:deep(video) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
