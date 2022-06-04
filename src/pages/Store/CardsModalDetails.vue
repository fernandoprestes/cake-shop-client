<script setup>
  import { ref, toRef, watch } from 'vue';
  import formatCurrency from '@/composables/useFormatCurrency';
  import Icon from '@/components/Icon/Icon.vue';
  import { useCartStore } from '../../store/cart';
  import { useCakesStore } from '../../store/cakes';

  const store = useCartStore();
  const storeCakes = useCakesStore();

  const props = defineProps({
    modelValue: Boolean,
    id: Number,
  });
  const emits = defineEmits(['update:modelValue']);

  const idd = toRef(props, 'id');
  const cake = ref({});

  //buscar na propria store nao precisa ir no banco
  watch(idd, async () => {
    if (!idd.value) return;
    // const data = await fetchOneCakeBy(idd.value);
    // cake.value = data;
    cake.value = storeCakes.findOneCake(idd.value);
  });

  const handleClick = () => {
    store.addCartList(cake.value);
    emits('update:modelValue', false);
  };
</script>
<template>
  <teleport to="body">
    <div
      v-if="props.modelValue"
      class="absolute top-0 flex h-full w-full items-center justify-center bg-overlay"
      @click="emits('update:modelValue', false)"
    >
      <div
        class="animate__animated animate__fadeIn relative mx-10 flex w-full flex-col rounded-lg bg-secondary p-4 md:w-[524px]"
        @click.stop
      >
        <div
          class="absolute -right-4 -top-4 cursor-pointer rounded-full border border-secondary bg-primary p-2 hover:bg-accent"
          @click="emits('update:modelValue', false)"
        >
          <Icon
            name="close"
            class="text-secondary"
          />
        </div>
        <div>
          <div>
            <img
              class="rounded-lg border-b-4 border-primary"
              :src="cake.imageUrl"
              :alt="cake.name"
            />
            <div class="mt-4 mb-6 flex flex-col gap-4 text-primary">
              <h2 class="text-3xl font-bold">{{ cake.name }}</h2>
              <p class="text-lg">{{ cake.description }}</p>
              <span class="text-right text-3xl font-bold">{{ formatCurrency(cake.price) }}</span>
            </div>
          </div>
          <button
            class="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-center text-white hover:brightness-105"
            @click="handleClick"
          >
            Adicionar no carrinho
          </button>
        </div>
      </div>
    </div>
  </teleport>
</template>
