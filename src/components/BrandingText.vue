<script setup lang="ts">
defineProps({
  caption: {
    type: String,
    required: true,
  },
  flavor: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <span>
    <span id="title=text" class="text-2xl font-light ml-3">{{ caption }}</span
    ><br />
    <span
      id="projetext"
      class="text-sm font-light ml-3 md:hidden lg:block xl:block sm:hidden"
      >Powered by Projetech</span
    >
  </span>
</template>
