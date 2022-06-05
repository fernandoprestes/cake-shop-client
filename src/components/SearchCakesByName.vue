<script setup>
  import useFetchCakes from '../composables/useFetchCakes';
  import { ref } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useCakesStore } from '../store/cakes';

  const { fetchAllCakesBy } = useFetchCakes();

  const store = useCakesStore();
  const { cakesList } = storeToRefs(store);

  const search = ref(null);

  const emits = defineEmits(['clearFilterOption']);

  const handleSearchClick = async () => {
    if (!search.value) return;
    emits('clearFilterOption', null);
    const { data } = await fetchAllCakesBy(`name=${search.value}`);
    cakesList.value = data;
    search.value = null;
  };
</script>

<template>
  <div class="flex flex-wrap gap-2 rounded-lg bg-secondary py-2 px-2 sx:gap-4">
    <label
      for="search"
      class="sr-only"
    >
      Digite o nome de um bolo...
    </label>
    <input
      id="search"
      v-model="search"
      class="w-full rounded-lg px-2 py-2 sx:w-fit"
      placeholder="Digite o nome de um bolo..."
      type="text"
    />
    <button
      class="w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-center text-secondary hover:brightness-105 sx:w-fit"
      @click="handleSearchClick"
    >
      Buscar
    </button>
  </div>
</template>
