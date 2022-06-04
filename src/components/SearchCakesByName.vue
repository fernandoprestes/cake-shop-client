<script setup>
  import { storeToRefs } from 'pinia';
  import { ref } from 'vue';
  import useFetchCakes from '../composables/useFetchCakes';
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
  <div class="flex gap-4 rounded-lg bg-secondary py-2 px-2">
    <input
      v-model="search"
      type="text"
      class="rounded-lg px-2"
      placeholder="Digite o nome de um bolo..."
    />
    <button
      class="flex w-fit items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-center text-white hover:brightness-105"
      @click="handleSearchClick"
    >
      Buscar
    </button>
  </div>
</template>
