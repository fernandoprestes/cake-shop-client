<template>
  <component
    :is="name"
    v-bind="$props"
  />
</template>
<script>
  import ShoppingCart from './ShoppingCart.vue';
  import Close from './Close.vue';

  export default {
    components: { ShoppingCart, Close },
    props: {
      name: {
        type: String,
        require: true,
      },
    },
  };
</script>
