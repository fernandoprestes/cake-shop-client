<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
  >
    <path
      :fill="color"
      d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2zM1 3c0 .55.45 1 1 1h1l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.67-1.43a.993.993 0 0 0-.9-.57H2c-.55 0-1 .45-1 1zm16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2z"
    ></path>
  </svg>
</template>

<script>
  export default {
    name: 'ShoppingCart',
    props: {
      size: { type: [String, Number], default: 22 },
      color: { type: String, default: '#AEAEAE' },
    },
  };
</script>
