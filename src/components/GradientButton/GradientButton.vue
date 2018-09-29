
<template>
  <button :disabled="disabled" @click="$emit('click', $event)" class="bpit-gradient-btn" :class="`color-${type}`">
    <slot>
      Button
    </slot>
  </button>
</template>
<script>
export default {
  name: "bpit-gradient-button",
  props: {
    disabled: {
      default: false,
      type: Boolean
    },
    type: {
      default: "1",
      type: String
    }
  }
};
</script>
<style lang="scss" scoped>
.bpit-gradient-btn {
  // margin: 10%;
  text-align: center;
  width: 200px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  height: 55px;
  text-align: center;
  border: none;
  background-size: 300% 100%;
  border-radius: 50px;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    background-image: none;
    &:hover {
      box-shadow: none;
    }
  }
  &:hover {
    background-position: 100% 0;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
  &:focus {
    outline: none;
  }

  &.color-1 {
    background-image: linear-gradient(
      to right,
      #25aae1,
      #40e495,
      #30dd8a,
      #2bb673
    );
    box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);
  }
  &.color-2 {
    background-image: linear-gradient(
      to right,
      #f5ce62,
      #e43603,
      #fa7199,
      #e85a19
    );
    box-shadow: 0 4px 15px 0 rgba(229, 66, 10, 0.75);
  }
  &.color-3 {
    background-image: linear-gradient(
      to right,
      #667eea,
      #764ba2,
      #6b8dd6,
      #8e37d7
    );
    box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);
  }
  &.color-4 {
    background-image: linear-gradient(
      to right,
      #fc6076,
      #ff9a44,
      #ef9d43,
      #e75516
    );
    box-shadow: 0 4px 15px 0 rgba(252, 104, 110, 0.75);
  }
  &.color-5 {
    background-image: linear-gradient(
      to right,
      #0ba360,
      #3cba92,
      #30dd8a,
      #2bb673
    );
    box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);
  }
  &.color-6 {
    background-image: linear-gradient(
      to right,
      #009245,
      #fcee21,
      #00a8c5,
      #d9e021
    );
    box-shadow: 0 4px 15px 0 rgba(83, 176, 57, 0.75);
  }
  &.color-7 {
    background-image: linear-gradient(
      to right,
      #6253e1,
      #852d91,
      #a3a1ff,
      #f24645
    );
    box-shadow: 0 4px 15px 0 rgba(126, 52, 161, 0.75);
  }
  &.color-8 {
    background-image: linear-gradient(
      to right,
      #29323c,
      #485563,
      #2b5876,
      #4e4376
    );
    box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);
  }
  &.color-9 {
    background-image: linear-gradient(
      to right,
      #25aae1,
      #4481eb,
      #04befe,
      #3f86ed
    );
    box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);
  }
  &.color-10 {
    background-image: linear-gradient(
      to right,
      #ed6ea0,
      #ec8c69,
      #f7186a,
      #fbb03b
    );
    box-shadow: 0 4px 15px 0 rgba(236, 116, 149, 0.75);
  }
  &.color-11 {
    background-image: linear-gradient(
      to right,
      #eb3941,
      #f15e64,
      #e14e53,
      #e2373f
    );
    box-shadow: 0 5px 15px rgba(242, 97, 103, 0.4);
  }
}
</style>
