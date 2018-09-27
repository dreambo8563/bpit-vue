<template>
  <a @click="click" class="bpit-fab-buttons">
    <slot></slot>
  </a>
</template>
<script>
export default {
  methods: {
    click(e) {
      this.$emit("click", e);
    }
  }
};
</script>
<style scoped>
[tooltip]:before {
  bottom: 25%;
  font-family: arial;
  font-weight: 600;
  border-radius: 2px;
  background: #585858;
  color: #fff;
  content: attr(tooltip);
  font-size: 12px;
  visibility: hidden;
  opacity: 0;
  padding: 5px 7px;
  margin-right: 12px;
  position: absolute;
  right: 100%;
  white-space: nowrap;
}

[tooltip]:hover:before,
[tooltip]:hover:after {
  visibility: visible;
  opacity: 1;
}

.bpit-fab-buttons {
  box-shadow: 0px 5px 11px -2px rgba(0, 0, 0, 0.18),
    0px 4px 12px -7px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  display: block;
  -webkit-transition: all 0.1s ease-out;
  transition: all 0.1s ease-out;
}

.bpit-fab-buttons:active,
.bpit-fab-buttons:focus,
.bpit-fab-buttons:hover {
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);
}

.bpit-fab-buttons {
  width: 0px;
  height: 0px;
  margin: 20px auto 0;
  opacity: 0;
  font-size: 0em;
  -webkit-transform: translateY(50px);
  -ms-transform: translateY(50px);
  transform: translateY(50px);
}
</style>
