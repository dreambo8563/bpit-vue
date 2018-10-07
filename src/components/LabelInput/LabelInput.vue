
<template>
  <div class="bpit-label-input">
    <input :class="classArr" @input="$emit('input', $event.target.value)" :value="value" :type="type">
    <label>
      {{label}}
    </label>
    <span class="focus-border">
      <i></i>
    </span>
  </div>
</template>
<script>
export default {
  props: {
    label: {
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
  },
  computed: {
    classArr() {
      return [`effect-${this.effects}`, { "has-content": this.value != "" }];
    }
  }
};
</script>
<style lang="scss" scoped>
.bpit-label-input {
  position: relative;
  width: 160px;
  // margin: 40px 3%;
  text-align: left;
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
    padding: 4px 0;
    border-bottom: 1px solid #ccc;
    background-color: transparent;
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
  .effect-1:focus ~ .focus-border,
  .has-content.effect-1 ~ .focus-border {
    width: 100%;
    transition: 0.4s;
  }
  .effect-1 ~ label {
    position: absolute;
    left: 0;
    width: 100%;
    top: 9px;
    color: #aaa;
    transition: 0.3s;
    z-index: -1;
    letter-spacing: 0.5px;
  }
  .effect-1:focus ~ label,
  .has-content.effect-1 ~ label {
    top: -16px;
    font-size: 12px;
    color: #3399ff;
    transition: 0.3s;
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
  .effect-2:focus ~ .focus-border,
  .has-content.effect-2 ~ .focus-border {
    width: 100%;
    transition: 0.4s;
    left: 0;
  }
  .effect-2 ~ label {
    position: absolute;
    left: 0;
    width: 100%;
    top: 9px;
    color: #aaa;
    transition: 0.3s;
    z-index: -1;
    letter-spacing: 0.5px;
  }
  .effect-2:focus ~ label,
  .has-content.effect-2 ~ label {
    top: -16px;
    font-size: 12px;
    color: #3399ff;
    transition: 0.3s;
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
  .effect-3:focus ~ .focus-border:after,
  .has-content.effect-3 ~ .focus-border:before,
  .has-content.effect-3 ~ .focus-border:after {
    width: 50%;
    transition: 0.4s;
  }
  .effect-3 ~ label {
    position: absolute;
    left: 0;
    width: 100%;
    top: 9px;
    color: #aaa;
    transition: 0.3s;
    z-index: -1;
    letter-spacing: 0.5px;
  }
  .effect-3:focus ~ label,
  .has-content.effect-3 ~ label {
    top: -16px;
    font-size: 12px;
    color: #3399ff;
    transition: 0.3s;
  }

  .effect-4,
  .effect-5,
  .effect-6 {
    border: 1px solid #ccc;
    padding: 7px 14px;
    transition: 0.4s;
    background: transparent;
  }

  .effect-4 ~ .focus-border:before,
  .effect-4 ~ .focus-border:after {
    content: "";
    position: absolute;
    top: -1px;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: #3399ff;
    transition: 0.4s;
  }
  .effect-4 ~ .focus-border:after {
    top: auto;
    bottom: 0;
  }
  .effect-4 ~ .focus-border i:before,
  .effect-4 ~ .focus-border i:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 2px;
    height: 0;
    background-color: #3399ff;
    transition: 0.6s;
  }
  .effect-4 ~ .focus-border i:after {
    left: auto;
    right: 0;
  }
  .effect-4:focus ~ .focus-border:before,
  .effect-4:focus ~ .focus-border:after,
  .has-content.effect-4 ~ .focus-border:before,
  .has-content.effect-4 ~ .focus-border:after {
    left: 0;
    width: 100%;
    transition: 0.4s;
  }
  .effect-4:focus ~ .focus-border i:before,
  .effect-4:focus ~ .focus-border i:after,
  .has-content.effect-4 ~ .focus-border i:before,
  .has-content.effect-4 ~ .focus-border i:after {
    top: -1px;
    height: 100%;
    transition: 0.6s;
  }
  .effect-4 ~ label {
    position: absolute;
    left: 14px;
    width: 100%;
    top: 10px;
    color: #aaa;
    transition: 0.3s;
    z-index: -1;
    letter-spacing: 0.5px;
  }
  .effect-4:focus ~ label,
  .has-content.effect-4 ~ label {
    top: -18px;
    left: 0;
    font-size: 12px;
    color: #3399ff;
    transition: 0.3s;
  }

  .effect-5 ~ .focus-border:before,
  .effect-5 ~ .focus-border:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #3399ff;
    transition: 0.3s;
  }
  .effect-5 ~ .focus-border:after {
    top: auto;
    bottom: 0;
    left: auto;
    right: 0;
  }
  .effect-5 ~ .focus-border i:before,
  .effect-5 ~ .focus-border i:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 0;
    background-color: #3399ff;
    transition: 0.4s;
  }
  .effect-5 ~ .focus-border i:after {
    left: auto;
    right: 0;
    top: auto;
    bottom: 0;
  }
  .effect-5:focus ~ .focus-border:before,
  .effect-5:focus ~ .focus-border:after,
  .has-content.effect-5 ~ .focus-border:before,
  .has-content.effect-5 ~ .focus-border:after {
    width: 100%;
    transition: 0.3s;
  }
  .effect-5:focus ~ .focus-border i:before,
  .effect-5:focus ~ .focus-border i:after,
  .has-content.effect-5 ~ .focus-border i:before,
  .has-content.effect-5 ~ .focus-border i:after {
    height: 100%;
    transition: 0.4s;
  }
  .effect-5 ~ label {
    position: absolute;
    left: 14px;
    width: 100%;
    top: 10px;
    color: #aaa;
    transition: 0.3s;
    z-index: -1;
    letter-spacing: 0.5px;
  }
  .effect-5:focus ~ label,
  .has-content.effect-5 ~ label {
    top: -18px;
    left: 0;
    font-size: 12px;
    color: #3399ff;
    transition: 0.3s;
  }

  .effect-6 ~ .focus-border:before,
  .effect-6 ~ .focus-border:after {
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
  .effect-6 ~ .focus-border:after {
    top: auto;
    bottom: 0;
    right: auto;
    left: 0;
    transition-delay: 0.6s;
  }
  .effect-6 ~ .focus-border i:before,
  .effect-6 ~ .focus-border i:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 0;
    background-color: #3399ff;
    transition: 0.2s;
  }
  .effect-6 ~ .focus-border i:after {
    left: auto;
    right: 0;
    top: auto;
    bottom: 0;
    transition-delay: 0.4s;
  }
  .effect-6:focus ~ .focus-border:before,
  .effect-6:focus ~ .focus-border:after,
  .has-content.effect-6 ~ .focus-border:before,
  .has-content.effect-6 ~ .focus-border:after {
    width: 100%;
    transition: 0.2s;
    transition-delay: 0.6s;
  }
  .effect-6:focus ~ .focus-border:after,
  .has-content.effect-6 ~ .focus-border:after {
    transition-delay: 0.2s;
  }
  .effect-6:focus ~ .focus-border i:before,
  .effect-6:focus ~ .focus-border i:after,
  .has-content.effect-6 ~ .focus-border i:before,
  .has-content.effect-6 ~ .focus-border i:after {
    height: 100%;
    transition: 0.2s;
  }
  .effect-6:focus ~ .focus-border i:after,
  .has-conten.effect-6 ~ .focus-border i:after {
    transition-delay: 0.4s;
  }
  .effect-6 ~ label {
    position: absolute;
    left: 14px;
    width: 100%;
    top: 10px;
    color: #aaa;
    transition: 0.3s;
    z-index: -1;
    letter-spacing: 0.5px;
  }
  .effect-6:focus ~ label,
  .has-content.effect-6 ~ label {
    top: -18px;
    left: 0;
    font-size: 12px;
    color: #3399ff;
    transition: 0.3s;
  }
}
</style>
