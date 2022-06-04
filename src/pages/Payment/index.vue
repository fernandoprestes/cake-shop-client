<script setup>
  import formatCurrency from '@/composables/useFormatCurrency';
  import { storeToRefs } from 'pinia';
  import { useCartStore } from '../../store/cart';

  import { ref } from 'vue';

  const storeCart = useCartStore();
  const { items, totalPrice } = storeToRefs(storeCart);

  const deliveryOption = ['retirada', 'entrega'];
  const deliveryType = ref('retirada');
  const paymentOption = ['dinheiro', 'cartão'];
  const paymentType = ref('cartão');
</script>
<template>
  <header class="h-20">
    <div class="container flex h-full w-full items-center justify-center px-2 text-center">
      <h1>Logo da loja</h1>
    </div>
  </header>
  <main class="container flex w-full flex-col items-center justify-center gap-4 py-4 px-4 md:py-10">
    <h2 class="font-bold underline underline-offset-8">Meu pedido</h2>

    <div class="w-full md:w-[546px]">
      <div class="flex justify-between">
        <h3 class="font-mono">Itens</h3>
        <h3 class="font-mono">Preço</h3>
      </div>
      <div class="w-full border border-dashed"></div>
      <div
        v-for="item in items"
        :key="item.id"
        class="flex justify-between font-mono"
      >
        <div class="flex gap-4">
          <span>{{ item.quantity }} x</span>
          <p>{{ item.name }}</p>
        </div>
        <div>
          {{ formatCurrency(item.price * item.quantity) }}
        </div>
      </div>
      <router-link
        to="store"
        class="my-2 mx-auto block w-fit rounded-lg bg-blue-600 px-4 py-2 text-center text-white"
        >Adicionar mais</router-link
      >
      <div class="w-full border border-dashed"></div>
      <div class="flex justify-between font-mono">
        <h3>Total</h3>
        <span>{{ formatCurrency(totalPrice) }}</span>
      </div>
      <div class="w-full border border-dashed"></div>
      <div class="flex justify-around">
        <label
          v-for="(item, index) in deliveryOption"
          :key="index"
          :for="item"
          class="flex w-full cursor-pointer items-center justify-center border-b border-transparent py-2 capitalize leading-6"
          :class="{ 'border-b border-slate-600': deliveryType === item }"
        >
          <input
            :id="item"
            v-model="deliveryType"
            type="radio"
            :name="item"
            :value="item"
            class="sr-only"
          />
          {{ item }}
        </label>
      </div>
      <div class="flex flex-col py-2">
        <div v-if="deliveryType === 'retirada'">
          <p>
            Voce pode retirar o seu pedido na rua Não existe, 7458, Bairro Muito longe, SP, entre o horario das 10:00 às
            22:00
          </p>
        </div>

        <div
          v-else
          class="flex flex-wrap gap-2"
        >
          <div class="flex w-full flex-col">
            <label for="name">Endereço</label>
            <input
              id="name"
              class="rounded-lg border border-slate-400 p-1"
              placeholder="Qual o endereço para a entrega"
              type="text"
            />
          </div>

          <div class="flex w-full flex-wrap gap-2">
            <div class="flex w-[49%] flex-col">
              <label for="phone">Bairro</label>
              <input
                id="name"
                class="rounded-lg border border-slate-400 p-1"
                placeholder="Bairro"
                type="tel"
              />
            </div>
            <div class="flex w-[49%] flex-col">
              <label for="phone">Numero</label>
              <input
                id="name"
                class="rounded-lg border border-slate-400 p-1"
                placeholder="Numero"
                type="tel"
              />
            </div>
            <div class="flex w-full flex-col">
              <label for="phone">Complemento</label>
              <input
                id="name"
                class="rounded-lg border border-slate-400 p-1"
                placeholder="Complemento"
                type="tel"
              />
            </div>
          </div>
          <div class="flex w-[49%] flex-col">
            <label for="phone">Cidade</label>
            <input
              id="name"
              class="rounded-lg border border-slate-400 p-1"
              placeholder="Cidade"
              type="tel"
            />
          </div>
          <div class="flex w-[49%] flex-col">
            <label for="phone">CEP</label>
            <input
              id="name"
              class="rounded-lg border border-slate-400 p-1"
              placeholder="CEP"
              type="tel"
            />
          </div>
        </div>

        <div class="mt-2 flex flex-col">
          <label for="name">Nome</label>
          <input
            id="name"
            class="rounded-lg border border-slate-400 p-1"
            placeholder="Como vamos te chamar"
            type="text"
          />
          <label for="phone">Contato</label>
          <input
            id="name"
            class="rounded-lg border border-slate-400 p-1"
            placeholder="Telefone para contato"
            type="tel"
          />
        </div>
      </div>
      <div class="my-4 w-full border border-dashed"></div>
      <div>
        <h3>Forma de pagamento</h3>
        <div class="flex justify-around">
          <label
            v-for="(item, index) in paymentOption"
            :key="index"
            :for="item"
            class="flex w-full cursor-pointer items-center justify-center border-b border-transparent py-2 capitalize leading-6"
            :class="{ 'border-b border-slate-600': paymentType === item }"
          >
            <input
              :id="item"
              v-model="paymentType"
              type="radio"
              :name="item"
              :value="item"
              class="sr-only"
            />
            {{ item }}
          </label>
        </div>
        <div
          v-if="paymentType === 'dinheiro'"
          class="flex flex-col"
        >
          <label for="phone">Troco para</label>
          <input
            id="name"
            class="rounded-lg border border-slate-400 p-1"
            placeholder="R$ 00.00"
            type="tel"
          />
        </div>
        <div v-else>
          <p>Cartões que aceitamos</p>
        </div>
      </div>
      <div class="my-4 w-full border border-dashed"></div>
      <button class="my-2 w-fit rounded-lg bg-blue-600 px-4 py-2 text-center text-white">Fazer o pedido</button>
    </div>
  </main>
</template>
