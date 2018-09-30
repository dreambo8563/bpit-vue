
<template>
  <div class="bpit-bouncing-loader">
    <div :style="bgStyle"></div>
    <div :style="bgStyle"></div>
    <div :style="bgStyle"></div>
  </div>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: "#8385aa"
    }
  },
  computed: {
    bgStyle() {
      return {
        background: this.color
      };
    }
  }
};
</script>
<style scoped>
@keyframes bpit-bouncing-loader {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0.1;
    transform: translateY(-1rem);
  }
}
.bpit-bouncing-loader {
  display: flex;
  justify-content: center;
}
.bpit-bouncing-loader > div {
  width: 1rem;
  height: 1rem;
  margin: 3rem 0.2rem;
  border-radius: 50%;
  animation: bpit-bouncing-loader 0.6s infinite alternate;
}
.bpit-bouncing-loader > div:nth-child(2) {
  animation-delay: 0.2s;
}
.bpit-bouncing-loader > div:nth-child(3) {
  animation-delay: 0.4s;
}
</style>
