<script setup>
  import { ref } from 'vue';
  import CardsModalDetails from './CardsModalDetails.vue';
  import formatCurrency from '@/composables/useFormatCurrency';

  const props = defineProps({
    cakes: {
      type: Object,
      default: null,
    },
  });

  const activeModal = ref(false);
  const idModal = ref(null);

  const openModal = id => {
    idModal.value = id;
    activeModal.value = true;
  };
  const onCloseModal = status => {
    activeModal.value = status;
    idModal.value = null;
  };
</script>
<template>
  <div class="flex flex-wrap justify-center gap-4 md:justify-between lg:justify-start">
    <div
      v-for="(item, index) in props.cakes"
      :key="index"
      class="w-[194px] cursor-pointer select-none rounded-lg border border-slate-200 hover:border-slate-600 sm:w-[186px] md:w-52"
      @click="openModal(item.id)"
    >
      <div class="h-28">
        <img
          class="h-full w-full rounded-tr-lg rounded-tl-lg"
          :src="item.imageUrl"
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
        <p class="text-right text-slate-50">{{ formatCurrency(item.price) }}</p>
      </div>
    </div>

    <CardsModalDetails
      :id="idModal"
      :is-active="activeModal"
      @close-modal="onCloseModal"
    />
  </div>
</template>
