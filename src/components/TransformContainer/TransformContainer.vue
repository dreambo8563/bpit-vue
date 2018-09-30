
<template>
  <div class="bpit-TransformContainer" :class="[{[openClass]:open},defaultClass]">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: false
    },
    openClass: {
      type: String,
      default: ""
    },
    defaultClass: {
      type: String,
      default: ""
    }
  }
};
</script>
<style lang="scss" scoped>
.bpit-TransformContainer {
  display: inline-block;
  transition: all 0.3s ease;
  cursor: pointer;
}
</style>
