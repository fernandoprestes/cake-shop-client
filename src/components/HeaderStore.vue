<script setup>
  import Icon from '@/components/Icon/Icon.vue';
  import formatCurrency from '@/composables/useFormatCurrency';
  import { ref } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useCardStore } from '@/store/card';

  const store = useCardStore();
  const { items, totalCardList } = storeToRefs(store);

  const openCardDialog = ref(false);

  const handleOpenCardDialog = () => {
    openCardDialog.value = true;
  };

  const handleCloseCardDialog = () => {
    openCardDialog.value = false;
  };

  const handleCancelItemInCard = id => {
    store.REMOVE_CARD_LIST(id);
  };
</script>
<template>
  <h2>Logos</h2>
  <button
    class="relative flex h-10 w-10 items-center justify-center rounded-full"
    @click="handleOpenCardDialog"
  >
    <Icon
      name="ShoppingCart"
      size="28"
    />
    <span class="absolute -left-2 top-6 h-6 w-6 rounded-full bg-red-100 text-sm font-bold">{{ totalCardList }}</span>
  </button>

  <div
    v-if="openCardDialog"
    class="absolute right-0 top-0 z-50 h-full w-full bg-overlay p-2"
    @click="handleCloseCardDialog"
  >
    <div
      class="relative right-0 top-16 w-full space-y-4 rounded-lg bg-slate-50 p-2 shadow-2xl sm:ml-auto sm:w-96"
      @click.stop
    >
      <div class="flex items-center justify-center">
        <h2 class="text-lg font-bold">Seu carrinho</h2>
        <div
          class="absolute right-4 cursor-pointer rounded-full bg-slate-50 p-2 hover:bg-slate-200"
          @click="handleCloseCardDialog"
        >
          <Icon name="close" />
        </div>
      </div>
      <div
        v-if="totalCardList === 0"
        class="flex flex-col gap-4 pb-4 text-center font-semibold"
      >
        <h2>Seu carrinho esta vario!</h2>
        <span class="text-4xl">😞</span>
      </div>
      <div
        v-else
        class="space-y-4"
      >
        <ul class="space-y-2">
          <li
            v-for="(item, index) in items"
            :key="index"
            class="flex gap-2 rounded-lg bg-slate-200 p-1"
          >
            <img
              class="h-16 w-20 rounded-lg"
              :src="item.imageUrl"
              :alt="item.name"
            />
            <div>
              <h2 class="text-lg font-bold">{{ item.name }}</h2>
              <span>{{ formatCurrency(item.price) }}</span>
            </div>

            <div
              class="absolute right-4 cursor-pointer rounded-lg border border-red-500 px-2 hover:bg-red-200"
              @click="handleCancelItemInCard(item.id)"
            >
              Cancelar
            </div>
          </li>
        </ul>
        <button class="w-full rounded-md bg-blue-500 py-2 text-slate-50 hover:brightness-105">
          Finalizar a compra
        </button>
      </div>
    </div>
  </div>
</template>
