<script setup>
  import { onMounted, ref, watch } from 'vue';
  import useFetchCakes from './../../composables/useFetchCakes.js';

  const { fetchCakes, fetchCakesQuery } = useFetchCakes();

  const cakes = ref(null);

  const selectedOption = ref('todos');
  const filterOptions = ['todos', 'chocolate', 'especial', 'simples'];

  async function initFetch() {
    const { data } = await fetchCakes();
    cakes.value = data;
  }

  watch(selectedOption, async () => {
    if (selectedOption.value === 'todos') {
      initFetch();
      return;
    }
    const { data } = await fetchCakesQuery(`category=${selectedOption.value}`);
    cakes.value = data;
  });

  onMounted(async () => {
    await initFetch();
  });
</script>
<template>
  <header class="h-20"></header>
  <main class="container flex h-[calc(100vh-80px)] w-full gap-10 bg-slate-400 py-10 px-4">
    <aside class="h-full w-80 rounded-lg bg-slate-200">
      <h2 class="py-4 text-center">Filtrar por {{ selectedOption }}</h2>
      <div class="px-4">
        <div
          v-for="(item, index) in filterOptions"
          :key="index"
        >
          <input
            :id="item"
            v-model="selectedOption"
            type="radio"
            :name="item"
            :value="item"
            class="sr-only"
          />
          <label
            :for="item"
            class="flex h-8 cursor-pointer items-center justify-center rounded-lg px-1 text-sm leading-6 shadow-2xl"
            :class="{ 'border-2 border-slate-800': selectedOption === item }"
          >
            {{ item }}
          </label>
        </div>
      </div>
    </aside>
    <div class="flex h-full w-full flex-col gap-2 rounded-lg bg-slate-200 p-2">
      <div class="py-2">
        <input type="text" />
        <button>Buscar</button>
      </div>
      <div class="flex flex-wrap gap-10">
        <div
          v-for="(item, index) in cakes"
          :key="index"
          class="h-60 w-60 rounded-lg"
        >
          <div class="relative">
            <img
              class="h-40 w-full rounded-tr-lg rounded-tl-lg"
              src="https://img.freepik.com/fotos-gratis/bolo-de-chocolate-com-granulado-de-chocolate_144627-8998.jpg?w=2000"
              alt=""
            />
            <div
              class="absolute right-2 bottom-1 rounded-lg border border-white bg-slate-600 px-2 text-sm text-white ring-2 ring-slate-600"
            >
              {{ item.category }}
            </div>
          </div>

          <div class="rounded-br-lg rounded-bl-lg bg-slate-500 px-4 py-2">
            <h2 class="text-slate-50">{{ item.name }}</h2>
            <p class="truncate text-sm text-slate-50">
              {{ item.description }}
            </p>
            <p class="text-right text-slate-50">{{ item.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
