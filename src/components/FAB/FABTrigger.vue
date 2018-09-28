<template>
  <a @click="$emit('click', $event)" class="bpit-fab-trigger">
    <slot></slot>
  </a>
</template>
<script>
export default {
  name: "bpit-fab-trigger"
};
</script>
<style scoped>
.bpit-fab-trigger {
  box-shadow: 0px 5px 11px -2px rgba(0, 0, 0, 0.18),
    0px 4px 12px -7px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  display: block;
  width: 56px;
  height: 56px;
  margin: 20px auto 0;
  position: relative;
  -webkit-transition: all 0.1s ease-out;
  transition: all 0.1s ease-out;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
}
</style>
