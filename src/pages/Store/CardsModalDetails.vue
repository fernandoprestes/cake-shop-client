<script setup>
  import { ref, toRef, watch } from 'vue';
  import useFetchCakes from '@/composables/useFetchCakes';
  import formatMoney from '@/composables/useFormatCurrency';
  import Icon from '@/components/Icon/Icon.vue';

  const { fetchCakeBy } = useFetchCakes();

  const props = defineProps({
    isActive: {
      type: Boolean,
    },
    id: {
      type: Number,
      default: null,
    },
  });
  const emits = defineEmits(['close-modal']);

  const idd = toRef(props, 'id');
  const cake = ref(null);

  watch(idd, async () => {
    const data = await fetchCakeBy(idd.value);
    cake.value = data;
  });

  const handleClick = () => {
    emits('close-modal', false);
  };
</script>
<template>
  <teleport to="body">
    <div
      v-if="props.isActive"
      class="absolute top-0 flex h-full w-full items-center justify-center bg-overlay"
      @click="emits('close-modal', false)"
    >
      <div
        class="relative mx-10 flex w-full flex-col rounded-lg bg-white p-4 md:w-[524px]"
        @click.stop
      >
        <div
          class="absolute -right-4 -top-4 cursor-pointer rounded-full border border-white bg-white p-2 ring-1 ring-slate-900 hover:bg-slate-900"
          @click="emits('close-modal', false)"
        >
          <Icon name="close" />
        </div>
        <div>
          <div>
            <img
              src="https://img.freepik.com/fotos-gratis/bolo-de-chocolate-com-granulado-de-chocolate_144627-8998.jpg?w=2000"
              alt=""
            />
            <div class="mb-6 flex flex-col gap-4">
              <h2 class="text-3xl">{{ cake.name }}</h2>
              <p class="text-lg">{{ cake.description }}</p>
              <span class="text-right text-3xl">{{ formatMoney(cake.price) }}</span>
            </div>
          </div>
          <button
            class="w-full rounded-lg bg-slate-800 py-2 text-white"
            @click="handleClick"
          >
            Adicionar no carrinho
          </button>
        </div>
      </div>
    </div>
  </teleport>
</template>
