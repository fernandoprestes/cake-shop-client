<script setup>
  import CardsList from './CardsList.vue';
  import FilterCategory from '@/components/FilterCategory.vue';
  import HeaderStore from '@/components/HeaderStore.vue';
  import SearchCakesByName from '@/components/SearchCakesByName.vue';
  import { ref } from 'vue';
  import { useHead } from '@vueuse/head';

  useHead({
    title: 'BruBru Doces e Salgados | Loja',
    meta: [
      {
        name: `description`,
        content: 'Menu de bolos da loja BruBru Doces e Salgados. Veja a variedade de bolos que temos!',
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
    <div class="flex h-full items-center justify-between px-2 sm:container">
      <HeaderStore />
    </div>
  </header>
  <main class="flex w-full flex-col gap-4 py-4 px-4 sm:container md:flex-row md:py-10">
    <aside class="w-full rounded-lg bg-secondary py-4 md:h-full md:w-80">
      <FilterCategory :clear-filter="filterReset" />
    </aside>
    <div class="flex w-full flex-col gap-2 rounded-lg">
      <SearchCakesByName @clear-filter-option="clearFilter" />
      <CardsList />
    </div>
  </main>
</template>
