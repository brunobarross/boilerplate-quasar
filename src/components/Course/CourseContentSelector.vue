<template>
  <q-drawer side="right" v-model="model" bordered :width="350" :breakpoint="500">
    <q-scroll-area class="fit">
      <div class="q-pa-sm">asdasdasdds</div>
    </q-scroll-area>
  </q-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const model = ref(false);
</script>
