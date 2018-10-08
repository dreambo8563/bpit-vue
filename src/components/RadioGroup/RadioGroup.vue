
<template>
  <div class="bpit-radio-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  componentName: "bpit-radio-group"
};
</script>
<style scoped>
</style>
