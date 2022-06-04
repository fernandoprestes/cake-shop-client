<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2z"
    ></path>
  </svg>
</template>

<script>
  export default {
    name: 'Plus',
    props: {
      size: { type: [String, Number], default: 22 },
    },
  };
</script>
