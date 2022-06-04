<template>
  <component
    :is="name"
    v-bind="$props"
  />
</template>
<script>
  import Close from './Close.vue';
  import CreditCard from './CreditCard.vue';
  import DeliveryDining from './DeliveryDining.vue';
  import DoneAll from './DoneAll.vue';
  import Minus from './Minus.vue';
  import Monetization from './Monetization.vue';
  import Plus from './Plus.vue';
  import ReceiptLong from './ReceiptLong.vue';
  import ShoppingCart from './ShoppingCart.vue';
  import Store from './Store.vue';
  import LogosElo from './LogosElo.vue';
  import LogosMastercard from './LogosMastercard.vue';
  import LogosVisa from './LogosVisa.vue';
  export default {
    components: {
      Close,
      CreditCard,
      DeliveryDining,
      DoneAll,
      Minus,
      Monetization,
      Plus,
      ReceiptLong,
      ShoppingCart,
      Store,
      LogosElo,
      LogosMastercard,
      LogosVisa,
    },
    props: {
      name: {
        type: String,
        require: true,
      },
    },
  };
</script>
