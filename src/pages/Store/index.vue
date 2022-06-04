<script setup>
  import CardsList from './CardsList.vue';
  import FilterCategory from '@/components/FilterCategory.vue';
  import HeaderStore from '@/components/HeaderStore.vue';
  import SearchCakesByName from '@/components/SearchCakesByName.vue';
  import { ref } from 'vue';

  import { useHead } from '@vueuse/head';
  useHead({
    title: 'Bolos & Bolos | Loja',
    meta: [
      {
        name: `description`,
        content: 'Menu de bolos da loja Bolos & Bolos. Veja a variedade de bolos que temos!',
      },
    ],
  });

  const filterReset = ref('');
  const clearFilter = toClear => {
    filterReset.value = toClear;
  };
</script>
<template>
  <header class="h-20">
    <div class="container flex h-full items-center justify-between px-2">
      <HeaderStore />
    </div>
  </header>
  <main class="container flex w-full flex-col gap-4 py-4 px-4 md:flex-row md:py-10">
    <aside class="w-full rounded-lg bg-secondary py-4 md:h-full md:w-80">
      <FilterCategory :clear-filter="filterReset" />
    </aside>
    <div class="flex w-full flex-col gap-2 rounded-lg">
      <SearchCakesByName @clear-filter-option="clearFilter" />
      <CardsList />
    </div>
  </main>
</template>
