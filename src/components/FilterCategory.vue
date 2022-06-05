<script setup>
  import useFetchCakes from '@/composables/useFetchCakes';
  import { ref, toRef, watch } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useCakesStore } from '@/store/cakes';

  const { fetchAllCakesBy } = useFetchCakes();

  const props = defineProps({
    clearFilter: String,
  });

  const store = useCakesStore();
  const { cakesList } = storeToRefs(store);

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

  const selectedOption = ref('');
  const selectedOptionProps = toRef(props, 'clearFilter');

  // eslint-disable-next-line no-unused-vars
  watch(selectedOptionProps, _value => {
    selectedOption.value = selectedOptionProps.value;
  });

  watch(selectedOption, async () => {
    if (selectedOption.value === null) return;
    const { data } = await fetchAllCakesBy(`${selectedOption.value}`);
    cakesList.value = data;
  });
</script>
<template>
  <h2 class="pb-4 text-center text-primary">Buscar por uma categoria:</h2>
  <div class="flex gap-2 px-4 md:flex-col">
    <label
      v-for="(item, index) in filterOptions"
      :key="index"
      :for="item.label"
      class="flex h-8 cursor-pointer items-center justify-center rounded-lg border-b-2 border-primary bg-primary px-1 text-sm capitalize leading-6 text-secondary hover:brightness-110"
      :class="{ ' border-b-4 border-accent font-bold': selectedOption === item.value }"
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
</template>
