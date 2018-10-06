
<template>
  <div class="bpit-border-input">
    <input :class="`effect-${effects}`" @input="$emit('input', $event.target.value)" :value="value" :type="type" :placeholder="placeholder">
    <span class="focus-border"></span>
  </div>
</template>
<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    effects: {
      type: Number,
      default: 1
    },
    value: {
      type: String,
      default: ""
    }
  }
};
</script>
<style lang="scss" scoped>
.bpit-border-input {
  position: relative;
  width: 160px;
  // margin: 40px 3%;
  :focus {
    outline: none;
  }
  input {
    font: 15px/24px "Lato", Arial, sans-serif;
    color: #333;
    width: 100%;
    box-sizing: border-box;
    letter-spacing: 1px;
  }

  .effect-1,
  .effect-2,
  .effect-3 {
    border: 0;
    padding: 7px 0;
    border-bottom: 1px solid #ccc;
  }

  .effect-1 ~ .focus-border {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #3399ff;
    transition: 0.4s;
  }
  .effect-1:focus ~ .focus-border {
    width: 100%;
    transition: 0.4s;
  }

  .effect-2 ~ .focus-border {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: #3399ff;
    transition: 0.4s;
  }
  .effect-2:focus ~ .focus-border {
    width: 100%;
    transition: 0.4s;
    left: 0;
  }

  .effect-3 ~ .focus-border {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    z-index: 99;
  }
  .effect-3 ~ .focus-border:before,
  .effect-3 ~ .focus-border:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: #3399ff;
    transition: 0.4s;
  }
  .effect-3 ~ .focus-border:after {
    left: auto;
    right: 0;
  }
  .effect-3:focus ~ .focus-border:before,
  .effect-3:focus ~ .focus-border:after {
    width: 50%;
    transition: 0.4s;
  }

  .effect-4,
  .effect-5,
  .effect-6 {
    border: 0;
    padding: 5px 0 7px;
    border: 1px solid transparent;
    border-bottom-color: #ccc;
    transition: 0.4s;
  }

  .effect-4:focus,
  .effect-5:focus,
  .effect-6:focus {
    padding: 5px 14px 7px;
    transition: 0.4s;
  }

  .effect-4 ~ .focus-border {
    position: absolute;
    height: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    transition: 0.4s;
    z-index: -1;
  }
  .effect-4:focus ~ .focus-border {
    transition: 0.4s;
    height: 36px;
    border: 2px solid #3399ff;
    z-index: 1;
  }

  .effect-5 ~ .focus-border {
    position: absolute;
    height: 36px;
    bottom: 0;
    left: 0;
    width: 0;
    transition: 0.4s;
  }
  .effect-5:focus ~ .focus-border {
    width: 100%;
    transition: 0.4s;
    border: 2px solid #3399ff;
  }

  .effect-6 ~ .focus-border {
    position: absolute;
    height: 36px;
    bottom: 0;
    right: 0;
    width: 0;
    transition: 0.4s;
  }
  .effect-6:focus ~ .focus-border {
    width: 100%;
    transition: 0.4s;
    border: 2px solid #3399ff;
  }

  .effect-7,
  .effect-8,
  .effect-9 {
    border: 1px solid #ccc;
    padding: 7px 14px 9px;
    transition: 0.4s;
  }

  .effect-7 ~ .focus-border:before,
  .effect-7 ~ .focus-border:after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: #3399ff;
    transition: 0.4s;
  }
  .effect-7 ~ .focus-border:after {
    top: auto;
    bottom: 0;
  }
  .effect-7 ~ .focus-border i:before,
  .effect-7 ~ .focus-border i:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 2px;
    height: 0;
    background-color: #3399ff;
    transition: 0.6s;
  }
  .effect-7 ~ .focus-border i:after {
    left: auto;
    right: 0;
  }
  .effect-7:focus ~ .focus-border:before,
  .effect-7:focus ~ .focus-border:after {
    left: 0;
    width: 100%;
    transition: 0.4s;
  }
  .effect-7:focus ~ .focus-border i:before,
  .effect-7:focus ~ .focus-border i:after {
    top: 0;
    height: 100%;
    transition: 0.6s;
  }

  .effect-8 ~ .focus-border:before,
  .effect-8 ~ .focus-border:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #3399ff;
    transition: 0.3s;
  }
  .effect-8 ~ .focus-border:after {
    top: auto;
    bottom: 0;
    left: auto;
    right: 0;
  }
  .effect-8 ~ .focus-border i:before,
  .effect-8 ~ .focus-border i:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 0;
    background-color: #3399ff;
    transition: 0.4s;
  }
  .effect-8 ~ .focus-border i:after {
    left: auto;
    right: 0;
    top: auto;
    bottom: 0;
  }
  .effect-8:focus ~ .focus-border:before,
  .effect-8:focus ~ .focus-border:after {
    width: 100%;
    transition: 0.3s;
  }
  .effect-8:focus ~ .focus-border i:before,
  .effect-8:focus ~ .focus-border i:after {
    height: 100%;
    transition: 0.4s;
  }

  .effect-9 ~ .focus-border:before,
  .effect-9 ~ .focus-border:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 2px;
    background-color: #3399ff;
    transition: 0.2s;
    transition-delay: 0.2s;
  }
  .effect-9 ~ .focus-border:after {
    top: auto;
    bottom: 0;
    right: auto;
    left: 0;
    transition-delay: 0.6s;
  }
  .effect-9 ~ .focus-border i:before,
  .effect-9 ~ .focus-border i:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 0;
    background-color: #3399ff;
    transition: 0.2s;
  }
  .effect-9 ~ .focus-border i:after {
    left: auto;
    right: 0;
    top: auto;
    bottom: 0;
    transition-delay: 0.4s;
  }
  .effect-9:focus ~ .focus-border:before,
  .effect-9:focus ~ .focus-border:after {
    width: 100%;
    transition: 0.2s;
    transition-delay: 0.6s;
  }
  .effect-9:focus ~ .focus-border:after {
    transition-delay: 0.2s;
  }
  .effect-9:focus ~ .focus-border i:before,
  .effect-9:focus ~ .focus-border i:after {
    height: 100%;
    transition: 0.2s;
  }
  .effect-9:focus ~ .focus-border i:after {
    transition-delay: 0.4s;
  }
}
</style>
