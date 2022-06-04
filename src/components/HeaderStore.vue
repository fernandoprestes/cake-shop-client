<script setup>
  import Icon from '@/components/Icon/Icon.vue';
  import formatCurrency from '@/composables/useFormatCurrency';
  import { ref } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useCartStore } from '@/store/cart';

  const storeCart = useCartStore();
  const { items, totalInCartList } = storeToRefs(storeCart);

  const openCardDialog = ref(false);

  const handleOpenCardDialog = () => {
    openCardDialog.value = true;
  };

  const handleCloseCardDialog = () => {
    openCardDialog.value = false;
  };

  const handleIncrease = idd => {
    storeCart.incresseQuantity(idd);
  };

  const handleDecrease = (idd, quantity) => {
    if (quantity === 1) {
      storeCart.removeCartList(idd);
      return;
    }
    storeCart.decreasesQuantity(idd);
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
    <span class="absolute -left-2 top-6 h-6 w-6 rounded-full bg-red-100 text-sm font-bold">{{ totalInCartList }}</span>
  </button>

  <div
    v-if="openCardDialog"
    class="absolute right-0 top-0 z-50 h-full w-full bg-overlay p-2"
    @click="handleCloseCardDialog"
  >
    <div
      class="animate__animated animate__fadeInDown relative right-0 top-16 ml-auto w-full max-w-lg space-y-4 rounded-lg bg-secondary p-2 text-primary shadow-2xl"
      @click.stop
    >
      <div class="flex items-center justify-center">
        <h2 class="text-lg font-bold">Seu carrinho</h2>
        <div
          class="absolute right-4 cursor-pointer rounded-full bg-primary p-2 hover:bg-accent"
          @click="handleCloseCardDialog"
        >
          <Icon
            name="close"
            class="text-secondary"
          />
        </div>
      </div>
      <div
        v-if="totalInCartList === 0"
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
            class="flex gap-2 rounded-lg border border-primary bg-secondary p-1"
          >
            <div class="flex gap-2">
              <img
                class="h-16 w-20 rounded-lg"
                :src="item.imageUrl"
                :alt="item.name"
              />
              <div>
                <h2 class="text-lg font-bold">{{ item.name }}</h2>
                <span>{{ formatCurrency(item.price * item.quantity) }}</span>
              </div>
            </div>
            <div class="flex flex-auto items-center justify-end gap-2 px-6">
              <button
                class="flex justify-center rounded-lg border border-primary px-2 text-2xl hover:bg-primary hover:text-secondary"
                @click="handleIncrease(item.id)"
              >
                <Icon name="Plus" />
              </button>
              <span class="text-2xl">{{ item.quantity }}</span>
              <button
                class="flex justify-center rounded-lg border border-primary px-2 text-2xl hover:bg-primary hover:text-secondary"
                @click="handleDecrease(item.id, item.quantity)"
              >
                <Icon name="Minus" />
              </button>
            </div>
          </li>
        </ul>
        <div class="w-full border-b border-dashed border-primary"></div>

        <p class="text-right text-primary">
          Total: <span class="text-2xl font-bold"> {{ formatCurrency(storeCart.totalPrice) }}</span>
        </p>

        <div class="flex w-full justify-center">
          <router-link
            to="payment"
            class="my-2 flex w-fit items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-center text-white hover:brightness-105"
          >
            Finalizar a compra
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
