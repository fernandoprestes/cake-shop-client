<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M18 12.998H6a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2z"
    ></path>
  </svg>
</template>

<script>
  export default {
    name: 'Minus',
    props: {
      size: { type: [String, Number], default: 22 },
    },
  };
</script>
