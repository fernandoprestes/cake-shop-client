<script setup>
  import { useHead } from '@vueuse/head';

  useHead({
    title: 'Bolos & Bolos | Home',
    meta: [
      {
        name: `description`,
        content: 'Pagina inicial da loja Bolos & Bolos.',
      },
    ],
  });
</script>
<template>
  <header class="h-20"></header>
  <main class="flex w-full flex-col items-center justify-center gap-4 py-4 px-4 sm:container md:flex-row md:py-10">
    <router-link
      to="/store"
      class="my-2 flex w-fit items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-center text-white"
    >
      Ir para a loja
    </router-link>
  </main>
</template>
