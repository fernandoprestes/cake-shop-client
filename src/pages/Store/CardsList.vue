<script setup>
  import { onMounted, ref } from 'vue';
  import CardsModalDetails from './CardsModalDetails.vue';
  import formatCurrency from '@/composables/useFormatCurrency';
  import { useCakesStore } from '../../store/cakes';
  import { storeToRefs } from 'pinia';

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
  <div class="flex flex-wrap justify-center gap-4 md:justify-between lg:justify-start">
    <div
      v-for="(cake, index) in cakes"
      :key="index"
      class="w-[194px] cursor-pointer select-none rounded-lg border border-secondary hover:border-primary sm:w-[186px] md:w-52"
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
            class="absolute right-2 bottom-1 rounded-lg border border-secondary bg-accent px-2 text-sm capitalize ring-2 ring-accent"
          >
            {{ cake.category }}
          </div>
        </div>
      </div>

      <div class="rounded-br-lg rounded-bl-lg bg-accent px-4 py-2">
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
