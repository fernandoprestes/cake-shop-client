<script setup>
  import { storeToRefs } from 'pinia';
  import { ref } from 'vue';
  import useFetchCakes from '../composables/useFetchCakes';
  import { useCakesStore } from '../store/cakes';

  const { fetchCakesQuery } = useFetchCakes();

  const store = useCakesStore();
  const { cakesList } = storeToRefs(store);

  const search = ref(null);

  const emits = defineEmits(['clearFilterOption']);

  const handleSearchClick = async () => {
    if (!search.value) return;
    emits('clearFilterOption', null);
    const { data } = await fetchCakesQuery(`name=${search.value}`);
    cakesList.value = data;
    search.value = null;
  };
</script>

<template>
  <div class="space-x-4 rounded-lg bg-slate-200 py-2 px-2">
    <input
      v-model="search"
      type="text"
      class="rounded-lg px-2 py-1"
      placeholder="Digite o nome de um bolo..."
    />
    <button
      class="rounded-lg bg-slate-500 px-4 py-1"
      @click="handleSearchClick"
    >
      Buscar
    </button>
  </div>
</template>
