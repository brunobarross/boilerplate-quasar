<template>
  <q-drawer side="right" v-model="model" show-if-above bordered :width="350" :breakpoint="500">
    <q-scroll-area class="fit p-4">
      <div class="flex items-center">
        <h3 class="w-full text-md md:text-xl text-neutral-900 font-bold">Conteúdo</h3>
      </div>
      <div class="flex flex-column mt-4">
        <div class="rounded border border-gray-900/10 w-full p-4">sdasdsd</div>
      </div>
    </q-scroll-area>
  </q-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const model = ref(false);
</script>
