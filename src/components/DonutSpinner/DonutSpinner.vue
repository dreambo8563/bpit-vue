
<template>
  <div class="bpit-donut-spinner"></div>
</template>
<script>
export default {};
</script>
<style scoped>
@keyframes bpit-donut-spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.bpit-donut-spinner {
  display: inline-block;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: currentColor;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: bpit-donut-spinner 1.2s linear infinite;
}
</style>
