<template>
  <button
    type="button"
    class="border shadow-xs font-medium leading-5 rounded-base text-sm rounded-lg transition-colors duration-150 cursor-pointer"
  >
    {{ buttonContent }}
  </button>
</template>

<script>
export default {
  props: {
    buttonContent: {
      type: String,
      required: true,
    },
  },
}
</script>
