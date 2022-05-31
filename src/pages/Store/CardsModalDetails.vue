<script setup>
  import { ref, toRef, watch } from 'vue';
  import useFetchCakes from '@/composables/useFetchCakes';
  import formatCurrency from '@/composables/useFormatCurrency';
  import Icon from '@/components/Icon/Icon.vue';
  import { useCardStore } from '../../store/card';

  const { fetchCakeBy } = useFetchCakes();

  const store = useCardStore();

  const props = defineProps({
    isActive: Boolean,
    id: Number,
  });
  const emits = defineEmits(['close-modal']);

  const idd = toRef(props, 'id');
  const cake = ref({});

  watch(idd, async () => {
    if (!idd.value) return;
    const data = await fetchCakeBy(idd.value);
    cake.value = data;
  });

  const handleClick = () => {
    store.ADD_CARD_LIST(cake.value);
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
              :src="cake.imageUrl"
              alt=""
            />
            <div class="mb-6 flex flex-col gap-4">
              <h2 class="text-3xl">{{ cake.name }}</h2>
              <p class="text-lg">{{ cake.description }}</p>
              <span class="text-right text-3xl">{{ formatCurrency(cake.price) }}</span>
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
