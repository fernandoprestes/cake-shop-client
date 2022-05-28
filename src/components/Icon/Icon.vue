<template>
  <component
    :is="name"
    v-bind="$props"
  />
</template>
<script>
  import ShoppingCart from './ShoppingCart.vue';

  export default {
    components: { ShoppingCart },
    props: {
      name: {
        type: String,
        require: true,
      },
    },
  };
</script>
