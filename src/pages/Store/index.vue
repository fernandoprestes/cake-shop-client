<script setup>
  import { onMounted, ref, watch } from 'vue';
  import useFetchCakes from '@/composables/useFetchCakes.js';
  import Icon from '@/components/Icon/Icon.vue';

  const { fetchCakes, fetchCakesQuery } = useFetchCakes();

  const cakes = ref(null);
  const selectedOption = ref('');
  const filterOptions = ref([
    {
      value: '',
      label: 'todos',
    },
    {
      value: 'category=chocolate',
      label: 'chocolate',
    },
    {
      value: 'category=simples',
      label: 'simples',
    },
    {
      value: 'category=especial',
      label: 'especial',
    },
  ]);
  const search = ref(null);

  async function initFetch() {
    const { data } = await fetchCakes();
    cakes.value = data;
  }

  watch(selectedOption, async () => {
    if (selectedOption.value === null) return;
    const { data } = await fetchCakesQuery(`${selectedOption.value}`);
    cakes.value = data;
  });

  const handleSearchClick = async () => {
    if (!search.value) return;
    selectedOption.value = null;
    const { data } = await fetchCakesQuery(`name=${search.value}`);
    cakes.value = data;
  };

  onMounted(async () => {
    await initFetch();
  });
</script>
<template>
  <header class="h-20">
    <div class="container flex h-full items-center justify-between px-2">
      <h2>Logos</h2>
      <div>
        <Icon name="ShoppingCart" />
      </div>
    </div>
  </header>
  <main class="container flex w-full flex-col gap-4 py-4 px-4 md:flex-row md:py-10">
    <aside class="w-full rounded-lg bg-slate-200 py-4 md:h-full md:w-80">
      <h2 class="pb-4 text-center">Filtrar por:</h2>
      <div class="flex gap-2 px-4 md:flex-col">
        <label
          v-for="(item, index) in filterOptions"
          :key="index"
          :for="item.label"
          class="flex h-8 cursor-pointer items-center justify-center rounded-lg border bg-slate-300 px-1 text-sm capitalize leading-6 hover:font-bold"
          :class="{ ' border-slate-800 font-bold': selectedOption === item.value }"
        >
          <input
            :id="item.label"
            v-model="selectedOption"
            type="radio"
            :name="item.label"
            :value="item.value"
            class="sr-only"
          />
          {{ item.label }}
        </label>
      </div>
    </aside>
    <div class="flex w-full flex-col gap-2 rounded-lg">
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

      <div class="flex flex-wrap justify-center gap-4 md:justify-between lg:justify-start">
        <div
          v-for="(item, index) in cakes"
          :key="index"
          class="w-[194px] rounded-lg border border-slate-200 sm:w-[186px] md:w-52"
        >
          <div class="h-28">
            <img
              class="h-full w-full rounded-tr-lg rounded-tl-lg"
              src="https://img.freepik.com/fotos-gratis/bolo-de-chocolate-com-granulado-de-chocolate_144627-8998.jpg?w=2000"
              alt=""
            />
            <div class="relative">
              <div
                class="absolute right-2 bottom-1 rounded-lg border border-white bg-slate-600 px-2 text-sm text-white ring-2 ring-slate-600"
              >
                {{ item.category }}
              </div>
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
