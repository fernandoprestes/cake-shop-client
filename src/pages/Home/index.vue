<script setup>
  import { useHead } from '@vueuse/head';

  useHead({
    title: 'Bolos & Bolos | Home',
    meta: [
      {
        name: `description`,
        content: 'Pagina inicial da loja Bolos & Bolos.',
      },
    ],
  });
</script>
<template>
  <main class="h-screen overflow-x-hidden bg-homeImg bg-cover bg-no-repeat">
    <header class="h-20"></header>
    <div class="flex w-full flex-col items-center justify-center gap-4 py-4 px-4 sm:container">
      <div class="flex h-[40vh] w-full items-center md:h-[50vh]">
        <h1 class="text-[96px]">
          Lorem <br />
          & ipsum
        </h1>
      </div>
      <div class="container">
        <div class="flex w-[440px] flex-wrap items-center gap-2 md:gap-4 lg:w-full">
          <div class="h-40 w-[192px] select-none overflow-hidden rounded-lg border border-secondary shadow md:w-48">
            <img
              src="https://img.freepik.com/fotos-gratis/uma-vista-superior-assada-em-um-bolo-redondo-com-acucar-em-po-na-mesa-de-madeira_140725-26660.jpg?t=st=1656257479~exp=1656258079~hmac=0fb224aa509704bb5e6f22d5f4144090520f4deef35e37650da5c0258eee8cee&w=1380"
              alt="bolo de laranja"
              class="h-full w-full"
            />
          </div>
          <div class="h-40 w-[192px] select-none overflow-hidden rounded-lg border border-secondary shadow md:w-48">
            <img
              src="https://img.freepik.com/fotos-gratis/delicioso-bolo-com-chocolate_144627-8325.jpg?t=st=1656257479~exp=1656258079~hmac=d6407027f90e98ba5aa06419ffd66698e3bff0cc6a6ab132317da4ade14fe6ae&w=1380"
              alt="bolo de chocolate"
              class="h-full w-full"
            />
          </div>
          <div class="h-40 w-[192px] select-none overflow-hidden rounded-lg border border-secondary shadow md:w-48">
            <img
              src="https://img.freepik.com/fotos-gratis/bolo-de-milho-com-laranja-no-prato-branco-e-toalha-de-mesa-de-juta_146714-1584.jpg?w=1380"
              alt="bolo de milho"
              class="h-full w-full"
            />
          </div>

          <router-link
            to="/store"
            class="my-2 flex items-center gap-2 rounded-lg bg-primary px-[52px] py-2 text-center text-white"
          >
            Ir para a loja
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>
