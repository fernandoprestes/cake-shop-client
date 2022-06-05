<script setup>
  import CardsModalDetails from './CardsModalDetails.vue';
  import formatCurrency from '@/composables/useFormatCurrency';
  import { onMounted, ref } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useCakesStore } from '../../store/cakes';

  const store = useCakesStore();
  const { cakes } = storeToRefs(store);

  onMounted(async () => {
    await store.getCakes();
  });

  const isActive = ref(false);
  const idModal = ref(null);

  const openModal = id => {
    idModal.value = id;
    isActive.value = true;
  };
</script>
<template>
  <div class="flex flex-wrap justify-center gap-4 md:justify-start">
    <div
      v-for="(cake, index) in cakes"
      :key="index"
      class="w-[194px] cursor-pointer select-none rounded-lg border border-secondary shadow md:w-48"
      @click="openModal(cake.id)"
    >
      <div class="h-28">
        <img
          class="h-full w-full rounded-tr-lg rounded-tl-lg"
          :src="cake.imageUrl"
          alt=""
        />
        <div class="relative">
          <div
            class="absolute right-2 bottom-1 rounded-lg border border-secondary bg-secondary px-2 text-sm capitalize text-primary ring-2 ring-primary"
          >
            {{ cake.category }}
          </div>
        </div>
      </div>

      <div class="rounded-br-lg rounded-bl-lg bg-secondary px-4 py-2 text-primary">
        <h2>{{ cake.name }}</h2>
        <p class="truncate text-sm">
          {{ cake.description }}
        </p>
        <p class="text-right">{{ formatCurrency(cake.price) }}</p>
      </div>
    </div>

    <CardsModalDetails
      :id="idModal"
      v-model="isActive"
    />
  </div>
</template>
