<script setup>
  import Icon from '@/components/Icon/Icon.vue';
  import { useCardStore } from '../store/card';

  const store = useCardStore();
</script>
<template>
  <h2>Logos</h2>
  <div>{{ store.cardList }}</div>
  <div>
    <Icon name="ShoppingCart" />
  </div>

  <div class="absolute right-4 w-40 rounded-lg bg-red-500 p-4"></div>
</template>
