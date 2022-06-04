<script setup>
  import formatCurrency from '@/composables/useFormatCurrency';
  import { storeToRefs } from 'pinia';
  import { useCartStore } from '../../store/cart';
  import { ref } from 'vue';
  import Icon from '../../components/Icon/Icon.vue';
  import { useHead } from '@vueuse/head';

  useHead({
    title: 'Bolos & Bolos | Pagamento',
    meta: [
      {
        name: `description`,
        content: 'Página para confirmar o seu pedido e informar os dados de entrega e forma de pagamento.',
      },
    ],
  });

  const storeCart = useCartStore();
  const { items, totalPrice } = storeToRefs(storeCart);

  const deliveryOption = [
    {
      label: 'retirada',
      icon: 'Store',
    },
    {
      label: 'entrega',
      icon: 'DeliveryDining',
    },
  ];
  const deliveryType = ref('retirada');
  const paymentOption = [
    {
      label: 'dinheiro',
      icon: 'Monetization',
    },
    {
      label: 'cartão',
      icon: 'CreditCard',
    },
  ];
  const paymentType = ref('cartão');
</script>
<template>
  <header class="h-20">
    <div class="container flex h-full w-full items-center justify-center px-2 text-center">
      <router-link to="/store">Logo da loja</router-link>
    </div>
  </header>
  <main class="container flex w-full flex-col items-center justify-center gap-4 py-4 px-4 text-primary md:py-10">
    <h2 class="flex gap-2 font-bold">
      Meu pedido
      <Icon name="ReceiptLong" />
    </h2>

    <div class="w-full md:w-[546px]">
      <div class="flex justify-between">
        <h3 class="font-mono">Itens</h3>
        <h3 class="font-mono">Preço</h3>
      </div>
      <div class="w-full border border-dashed border-secondary"></div>

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
        class="my-2 mx-auto flex w-fit items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-center text-neutral-100"
      >
        <span> Adicionar mais </span>
        <Icon
          name="Plus"
          class="text-accent"
        />
      </router-link>
      <div class="w-full border border-dashed border-secondary"></div>
      <div class="flex justify-between font-mono">
        <h3>Total</h3>
        <span>{{ formatCurrency(totalPrice) }}</span>
      </div>

      <div class="w-full border border-dashed border-secondary"></div>

      <div class="mt-4 flex justify-around">
        <label
          v-for="(item, index) in deliveryOption"
          :key="index"
          :for="item.label"
          class="flex w-full cursor-pointer items-center justify-center gap-2 border-b-2 py-2 capitalize leading-6"
          :class="[
            deliveryType === item.label
              ? 'border-primary bg-secondary text-primary'
              : 'border-secondary text-neutral-300',
          ]"
        >
          <input
            :id="item.label"
            v-model="deliveryType"
            type="radio"
            :name="item.label"
            :value="item.label"
            class="sr-only"
          />
          <Icon
            :name="`${item.icon}`"
            :class="[deliveryType === item.label ? 'text-primary' : 'text-neutral-300']"
          />
          {{ item.label }} a
        </label>
      </div>
      <div class="flex flex-col py-2">
        <div v-if="deliveryType === 'retirada'">
          <p class="text-center text-primary">
            Você pode retirar o seu pedido em nossa loja que fica na rua Não existe, 7458, Bairro Muito longe, SP, entre
            o horario das 10:00 às 22:00.
          </p>
        </div>

        <div
          v-else
          class="flex flex-wrap gap-2"
        >
          <div class="flex w-full flex-col">
            <label for="address">Endereço</label>
            <input
              id="address"
              class="rounded-lg border border-slate-400 p-1"
              placeholder="Qual o endereço para a entrega"
              type="text"
            />
          </div>
          <div class="flex w-full flex-wrap gap-2">
            <div class="flex flex-1 flex-col">
              <label for="district">Bairro</label>
              <input
                id="district"
                class="rounded-lg border border-slate-400 p-1"
                placeholder="Bairro"
                type="text"
              />
            </div>
            <div class="flex flex-1 flex-col">
              <label for="number">Numero</label>
              <input
                id="number"
                class="rounded-lg border border-slate-400 p-1"
                placeholder="Numero"
                type="text"
              />
            </div>
            <div class="flex w-full flex-col">
              <label for="complement">Complemento</label>
              <input
                id="complement"
                class="rounded-lg border border-slate-400 p-1"
                placeholder="Complemento"
                type="text"
              />
            </div>
          </div>
          <div class="flex flex-1 flex-col">
            <label for="city">Cidade</label>
            <input
              id="city"
              class="rounded-lg border border-slate-400 p-1"
              placeholder="Cidade"
              type="tel"
            />
          </div>
          <div class="flex flex-1 flex-col">
            <label for="cep">CEP</label>
            <input
              id="cep"
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
          <label for="contact">Contato</label>
          <input
            id="contact"
            class="rounded-lg border border-slate-400 p-1"
            placeholder="Telefone para contato"
            type="tel"
          />
        </div>
      </div>

      <div class="my-4 w-full border border-dashed border-secondary"></div>

      <div>
        <h3 class="font-bold">Forma de pagamento</h3>
        <div class="mt-4 flex justify-around">
          <label
            v-for="(item, index) in paymentOption"
            :key="index"
            :for="item.label"
            class="flex w-full cursor-pointer items-center justify-center gap-2 border-b-2 py-2 capitalize leading-6"
            :class="[
              paymentType === item.label
                ? 'border-primary bg-secondary text-primary'
                : 'border-secondary text-neutral-300',
            ]"
          >
            <input
              :id="item.label"
              v-model="paymentType"
              type="radio"
              :name="item.label"
              :value="item.label"
              class="sr-only"
            />
            <Icon
              :name="`${item.icon}`"
              :class="[paymentType === item.label ? 'text-primary' : 'text-neutral-300']"
            />
            {{ item.label }}
          </label>
        </div>
        <div
          v-if="paymentType === 'dinheiro'"
          class="mt-4 flex flex-col"
        >
          <label for="thing">Troco para</label>
          <input
            id="thing"
            class="rounded-lg border border-slate-400 p-1"
            placeholder="R$ 00.00"
            type="text"
          />
        </div>
        <div
          v-else
          class="mt-4"
        >
          <p class="text-center text-primary">Aceitamos cartão crédito ou débito</p>

          <div class="my-4 flex items-center justify-center gap-2 text-xl">
            <Icon name="LogosElo" />
            <Icon name="LogosMastercard" />
            <Icon name="LogosVisa" />
          </div>
        </div>
      </div>
      <div class="my-4 w-full border border-dashed border-secondary"></div>
      <button
        class="my-2 flex w-fit items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-center text-white"
      >
        Fazer o pedido
        <Icon name="DoneAll" />
      </button>
    </div>
  </main>
</template>
