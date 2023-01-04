<script setup lang="ts">
import { useAuth } from "@okta/okta-vue";
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const auth = useAuth();

onMounted(async () => {
  if (await auth.isAuthenticated) {
    await router.push({
      name: "Dashboard",
    });
  }
});
</script>

<template>Home view</template>
