<script setup>
  import HeaderStoreDialogCart from './HeaderStoreDialogCart.vue';
  import Icon from '@/components/Icon/Icon.vue';
  import { ref } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useCartStore } from '@/store/cart';

  const storeCart = useCartStore();
  const { totalInCartList } = storeToRefs(storeCart);

  const openCardDialog = ref(false);

  const handleCardDialog = () => (openCardDialog.value = !openCardDialog.value);
</script>
<template>
  <h1>Logos</h1>
  <button
    class="relative flex h-10 w-10 items-center justify-center rounded-full"
    @click="handleCardDialog"
  >
    <Icon
      name="ShoppingCart"
      size="28"
    />
    <span class="absolute -left-2 top-6 h-6 w-6 rounded-full bg-red-100 text-sm font-bold">{{ totalInCartList }}</span>
  </button>
  <HeaderStoreDialogCart v-model="openCardDialog" />
</template>
