<script setup>
  import { onMounted } from 'vue';
  import { useHead } from '@vueuse/head';
  import { useCartStore } from '../../store/cart';

  useHead({
    title: 'BruBru Doces e Salgados | Pagamento',
    meta: [
      {
        name: `description`,
        content: 'Página de agradecimento pela compra.',
      },
    ],
  });

  const storeCart = useCartStore();
  onMounted(() => {
    storeCart.removeAllFormCartList();
  });
</script>
<template>
  <header class="h-20">
    <div class="container flex h-full w-full items-center justify-center px-2 text-center">
      <router-link
        to="/store"
        class="flex items-center justify-center"
      >
        <img
          src="./../../assets/img/cake-icon.png"
          alt="Logo da Loja BruBru"
          class="w-10"
        />
      </router-link>
    </div>
  </header>
  <main class="container flex w-full flex-col items-center justify-center gap-4 py-4 px-4 md:py-10">
    <h2 class="flex gap-2 font-bold"></h2>

    <div class="w-full md:w-[546px]">
      <div class="space-y-4 rounded-lg bg-green-200 py-6 text-center">
        <h2 class="text-xl">Agradecemos pela preferencia 😍</h2>
        <p class="text-md">Seu pedido já esta sendo preparado 🛍️</p>
      </div>
      <div class="flex justify-center">
        <router-link
          to="store"
          class="my-2 flex w-fit items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-center text-white"
        >
          Voltar
        </router-link>
      </div>
    </div>
  </main>
</template>
