<template>
  <div class="bpit-switch" :class="[`type-${type}`,{'disabled':disabled,r:type<9,b2:type>9}]">
    <input :disabled="disabled" @change="$emit('input',$event.target.checked)" :checked="value" type="checkbox" class="checkbox">
    <div class="knobs">
      <span>
        {{type==9?'YES':''}}
      </span>
    </div>
    <div class="layer"></div>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: Number,
      default: 1
    }
  }
};
</script>
<style lang="scss" scoped>
.bpit-switch {
  &.b2 {
    border-radius: 2px;
  }
  &.disabled {
    cursor: not-allowed;
    background: grey;
  }
  position: relative;
  display: inline-block;
  // background: currentColor;
  border: solid 1px grey;
  width: 74px;
  height: 36px;
  overflow: hidden;
  .checkbox {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    cursor: pointer;
    z-index: 3;
  }
  .knobs {
    z-index: 2;
  }

  .layer {
    width: 100%;
    background-color: #ebf7fc;
    transition: 0.3s ease all;
    z-index: 1;
  }

  &.type-1 .knobs:before {
    content: "YES";
    position: absolute;
    top: 4px;
    left: 4px;
    width: 20px;
    height: 10px;
    color: #fff;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 9px 4px;
    background-color: #03a9f4;
    border-radius: 50%;
    transition: 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;
  }

  &.type-1 .checkbox:checked + .knobs:before {
    content: "NO";
    left: 42px;
    background-color: #f44336;
  }

  &.type-1 .checkbox:checked ~ .layer {
    background-color: #fcebeb;
  }

  &.type-1 .knobs,
  &.type-1 .knobs:before,
  &.type-1 .layer {
    transition: 0.3s ease all;
  }

  &.type-2 .knobs:before,
  &.type-2 .knobs:after {
    content: "YES";
    position: absolute;
    top: 4px;
    left: 4px;
    width: 20px;
    height: 10px;
    color: #fff;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 9px 4px;
    background-color: #03a9f4;
    border-radius: 50%;
    transition: 0.3s ease all;
  }

  &.type-2 .knobs:before {
    content: "YES";
  }

  &.type-2 .knobs:after {
    content: "NO";
  }

  &.type-2 .knobs:after {
    right: -28px;
    left: auto;
    background-color: #f44336;
  }

  &.type-2 .checkbox:checked + .knobs:before {
    left: -28px;
  }

  &.type-2 .checkbox:checked + .knobs:after {
    right: 4px;
  }

  &.type-2 .checkbox:checked ~ .layer {
    background-color: #fcebeb;
  }

  /* Button 3 */
  &.type-3 .knobs:before {
    content: "YES";
    position: absolute;
    top: 4px;
    left: 4px;
    width: 20px;
    height: 10px;
    color: #fff;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 9px 4px;
    background-color: #03a9f4;
    border-radius: 50%;
    transition: 0.3s ease all, left 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15);
  }

  &.type-3 .checkbox:active + .knobs:before {
    width: 46px;
    border-radius: 100px;
  }

  &.type-3 .checkbox:checked:active + .knobs:before {
    margin-left: -26px;
  }

  &.type-3 .checkbox:checked + .knobs:before {
    content: "NO";
    left: 42px;
    background-color: #f44336;
  }

  &.type-3 .checkbox:checked ~ .layer {
    background-color: #fcebeb;
  }

  /* Button 4 */
  &.type-4 .knobs:before,
  &.type-4 .knobs:after {
    position: absolute;
    top: 4px;
    left: 4px;
    width: 20px;
    height: 10px;
    color: #fff;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 9px 4px;
    background-color: #03a9f4;
    border-radius: 50%;
    transition: 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;
  }

  &.type-4 .knobs:before {
    content: "YES";
  }

  &.type-4 .knobs:after {
    content: "NO";
  }

  &.type-4 .knobs:after {
    top: -28px;
    right: 4px;
    left: auto;
    background-color: #f44336;
  }

  &.type-4 .checkbox:checked + .knobs:before {
    top: -28px;
  }

  &.type-4 .checkbox:checked + .knobs:after {
    top: 4px;
  }

  &.type-4 .checkbox:checked ~ .layer {
    background-color: #fcebeb;
  }

  /* Button 5 */
  &.type-5 {
    perspective: 60px;
    overflow: visible;
  }

  &.type-5 .knobs:before,
  &.type-5 .knobs span {
    content: "";
    position: absolute;
    top: 4px;
    left: 4px;
    width: 20px;
    height: 10px;
    color: #fff;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 9px 4px;
    border-radius: 50%;
    transition: 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;
  }

  &.type-5 .knobs:before {
    background-color: #03a9f4;
  }

  &.type-5 .knobs span:before {
    content: "YES";
  }

  &.type-5 .knobs:before,
  &.type-5 .layer {
    transform: rotateY(0);
    transform-origin: center;
  }

  &.type-5 .checkbox:checked + .knobs:before,
  &.type-5 .checkbox:checked + .knobs span {
    left: 42px;
  }

  &.type-5 .checkbox:checked + .knobs:before {
    transform: rotateY(180deg);
    background-color: #f44336;
  }

  &.type-5 .checkbox:checked + .knobs span:before {
    content: "NO";
    left: 42px;
  }

  &.type-5 .checkbox:checked ~ .layer {
    background-color: #fcebeb;
    transform: rotateY(-180deg);
  }

  &.type-5 .knobs,
  &.type-5 .knobs:before,
  &.type-5 .layer {
    transition: 0.3s ease all;
  }

  /* Button 7 */
  &.type-6 .knobs:before,
  &.type-6 .knobs:after,
  &.type-6 .knobs span {
    position: absolute;
    top: 4px;
    width: 20px;
    height: 10px;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 9px 4px;
    border-radius: 50%;
  }

  &.type-6 .knobs:before {
    content: "YES";
    left: 4px;
    color: #fff;
    opacity: 1;
  }

  &.type-6 .knobs:after {
    content: "N";
    left: 42px;
    color: #fff;
    width: 14px;
    text-align: left;
    padding: 9px 7px;
    background-color: #f44336;
    opacity: 0;
  }

  &.type-6 .knobs:before,
  &.type-6 .knobs:after {
    transition: 0.3s ease all;
    z-index: 2;
  }

  &.type-6 .knobs span {
    left: 4px;
    background-color: #03a9f4;
    transition: 0.2s ease all;
    z-index: 1;
  }

  &.type-6 .checkbox:checked + .knobs:before {
    opacity: 0;
  }

  &.type-6 .checkbox:checked + .knobs:after {
    opacity: 1;
  }

  &.type-6 .checkbox:checked + .knobs span {
    top: 14px;
    left: 56px;
    width: 2px;
    height: 2px;
    padding: 3px;
    background-color: #fff;
    z-index: 3;
  }

  &.type-6 .checkbox:checked ~ .layer {
    background-color: #fcebeb;
  }

  /* Button 8 */
  &.type-7 .knobs:before,
  &.type-7 .knobs:after,
  &.type-7 .knobs span {
    position: absolute;
    top: 4px;
    width: 20px;
    height: 10px;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 9px 4px;
    border-radius: 50%;
    transition: 0.3s ease all;
  }

  &.type-7 .knobs:before {
    content: "YES";
    color: #fff;
    left: 4px;
  }

  &.type-7 .knobs:after {
    content: "NO";
    left: 42px;
    color: #fff;
    background-color: #f44336;
    opacity: 0;
  }

  &.type-7 .knobs:before,
  &.type-7 .knobs:after {
    z-index: 2;
  }

  &.type-7 .knobs span {
    left: 4px;
    background-color: #03a9f4;
    z-index: 1;
  }

  &.type-7 .checkbox:checked + .knobs:before {
    opacity: 0;
  }

  &.type-7 .checkbox:checked + .knobs:after {
    opacity: 1;
  }

  &.type-7 .checkbox:checked + .knobs span {
    background-color: #fcebeb;
    transform: scale(4);
  }

  /* Button 9 */
  &.type-8 .knobs:before,
  &.type-8 .knobs:after,
  &.type-8 .knobs span {
    position: absolute;
    top: 4px;
    width: 20px;
    height: 10px;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 9px 4px;
    border-radius: 50%;
    transition: 0.4s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;
  }

  &.type-8 .knobs:before {
    content: "YES";
    left: 4px;
  }

  &.type-8 .knobs:after {
    content: "NO";
    right: -24px;
  }

  &.type-8 .knobs:before,
  &.type-8 .knobs:after {
    color: #fff;
    z-index: 2;
  }

  &.type-8 .knobs span {
    left: 4px;
    background-color: #03a9f4;
    z-index: 1;
  }

  &.type-8 .checkbox:checked + .knobs:before {
    left: -24px;
  }

  &.type-8 .checkbox:checked + .knobs:after {
    right: 4px;
  }

  &.type-8 .checkbox:checked + .knobs span {
    left: 42px;
    background-color: #f44336;
  }

  &.type-8 .checkbox:checked ~ .layer {
    background-color: #fcebeb;
  }

  /* Button 10 */
  &.type-9 .knobs:before,
  &.type-9 .knobs:after,
  &.type-9 .knobs span {
    position: absolute;
    top: 4px;
    width: 20px;
    height: 10px;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 9px 4px;
    border-radius: 2px;
    transition: 0.3s ease all;
  }

  &.type-9 .knobs:before {
    content: "";
    left: 4px;
    background-color: #03a9f4;
  }

  &.type-9 .knobs:after {
    content: "NO";
    right: 4px;
    color: #4e4e4e;
  }

  &.type-9 .knobs span {
    display: inline-block;
    left: 4px;
    color: #fff;
    z-index: 1;
  }

  &.type-9 .checkbox:checked + .knobs span {
    color: #4e4e4e;
  }

  &.type-9 .checkbox:checked + .knobs:before {
    left: 42px;
    background-color: #f44336;
  }

  &.type-9 .checkbox:checked + .knobs:after {
    color: #fff;
  }

  &.type-9 .checkbox:checked ~ .layer {
    background-color: #fcebeb;
  }

  &.type-10 {
    overflow: visible;
  }

  // &.type-10 .knobs {
  //   perspective: 70px;
  // }

  &.type-10 .knobs:before,
  &.type-10 .knobs:after,
  &.type-10 .knobs span {
    position: absolute;
    top: 4px;
    border-radius: 2px;
  }

  &.type-10 .knobs:before,
  &.type-10 .knobs:after {
    width: 20px;
    height: 10px;
    color: #4e4e4e;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 9px 4px;
  }

  &.type-10 .knobs:before {
    content: "YES";
    left: 4px;
  }

  &.type-10 .knobs:after {
    content: "NO";
    right: 4px;
  }

  &.type-10 .knobs span {
    right: 4px;
    width: 33px;
    height: 28px;
    background-color: #03a9f4;
    transform: rotateY(0);
    transform-origin: 0% 50%;
    transition: 0.6s ease all;
    z-index: 1;
  }

  &.type-10 .checkbox:checked + .knobs span {
    transform: rotateY(-180deg);
    background-color: #f44336;
  }

  &.type-10 .checkbox:checked ~ .layer {
    background-color: #fcebeb;
  }

  /* Button 12 */
  &.type-11 .knobs:before,
  &.type-11 .knobs:after,
  &.type-11 .knobs span,
  &.type-11 .knobs span:before,
  &.type-11 .knobs span:after {
    position: absolute;
    top: 4px;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    border-radius: 2px;
    transition: 0.3s ease all;
  }

  &.type-11 .knobs:before {
    content: "YES";
    left: 4px;
  }

  &.type-11 .knobs:after {
    content: "NO";
    right: 4px;
  }

  &.type-11 .knobs:before,
  &.type-11 .knobs:after {
    width: 27px;
    height: 10px;
    color: #4e4e4e;
    padding: 9px 3px;
    z-index: 1;
  }

  &.type-11 .knobs span {
    display: inline-block;
    z-index: 2;
  }

  &.type-11 .knobs span,
  &.type-11 .knobs span:before,
  &.type-11 .knobs span:after {
    width: 20px;
    height: 10px;
    padding: 9px 4px;
  }

  &.type-11 .knobs span:before,
  &.type-11 .knobs span:after {
    content: "";
    top: 0;
  }

  &.type-11 .knobs span:before {
    left: -28px;
    background-color: #f44336;
  }

  &.type-11 .knobs span:after {
    right: -42px;
    background-color: #03a9f4;
  }

  &.type-11 .checkbox:checked + .knobs span:before {
    left: 4px;
  }

  &.type-11 .checkbox:checked + .knobs span:after {
    right: -74px;
  }

  &.type-11 .checkbox:checked ~ .layer {
    background-color: #fcebeb;
  }

  /* Button 13 */
  &.type-12 .knobs:before,
  &.type-12 .knobs:after,
  &.type-12 .knobs span {
    position: absolute;
    top: 4px;
    width: 20px;
    height: 10px;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 9px 4px;
    border-radius: 2px;
    transition: 0.3s ease all;
  }

  &.type-12 .knobs:before,
  &.type-12 .knobs:after {
    color: #4e4e4e;
    z-index: 1;
  }

  &.type-12 .knobs:before {
    content: "YES";
    left: 4px;
  }

  &.type-12 .knobs:after {
    content: "NO";
    right: 4px;
  }

  &.type-12 .knobs span {
    width: 25px;
    left: 37px;
    background-color: #03a9f4;
    z-index: 2;
  }

  &.type-12 .checkbox:checked + .knobs span {
    left: 4px;
    background-color: #f44336;
  }

  &.type-12 .checkbox:checked ~ .layer {
    background-color: #fcebeb;
  }

  /* Button 14 */
  &.type-13 .knobs:before,
  &.type-13 .knobs:after,
  &.type-13 .knobs span:before,
  &.type-13 .knobs span:after {
    position: absolute;
    top: 4px;
    width: 20px;
    height: 10px;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 9px 4px;
    border-radius: 2px;
    transition: 0.3s ease all;
  }

  &.type-13 .knobs:before,
  &.type-13 .knobs:after {
    color: #4e4e4e;
    z-index: 1;
  }

  &.type-13 .knobs:before {
    content: "YES";
    left: 4px;
  }

  &.type-13 .knobs:after {
    content: "NO";
    right: 4px;
  }

  &.type-13 .knobs span {
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
  }

  &.type-13 .knobs span:before {
    left: 4px;
    top: -28px;
    background-color: #f44336;
  }

  &.type-13 .knobs span:after {
    top: 4px;
    left: 39px;
    background-color: #03a9f4;
  }

  &.type-13 .knobs span:before,
  &.type-13 .knobs span:after {
    content: "";
    width: 23px;
    z-index: 2;
  }

  &.type-13 .checkbox:checked + .knobs span:before {
    top: 4px;
  }

  &.type-13 .checkbox:checked + .knobs span:after {
    top: -28px;
  }

  &.type-13 .checkbox:checked ~ .layer {
    background-color: #fcebeb;
  }

  /* Button 15 */
  &.type-14 .knobs:before,
  &.type-14 .knobs:after {
    position: absolute;
    top: 4px;
    width: 20px;
    height: 10px;
    color: #fff;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 9px 4px;
    opacity: 1;
    border-radius: 2px;
    transform: scale(1);
    transition: 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;
  }

  &.type-14 .knobs:before {
    content: "YES";
    left: 4px;
    background-color: #03a9f4;
  }

  &.type-14 .knobs:after {
    content: "NO";
    right: 4px;
    opacity: 0;
    transform: scale(4);
    background-color: #f44336;
  }

  &.type-14 .checkbox:checked + .knobs:before {
    opacity: 0;
    transform: scale(4);
  }

  &.type-14 .checkbox:checked + .knobs:after {
    opacity: 1;
    transform: scale(1);
  }

  &.type-14 .checkbox:checked ~ .layer {
    background-color: #fcebeb;
  }

  /* Button 16 */
  &.type-15 .knobs:before {
    content: "YES";
    position: absolute;
    top: 4px;
    left: 4px;
    width: 20px;
    height: 10px;
    color: #fff;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 9px 4px;
    background-color: #03a9f4;
    border-radius: 2px;
    transition: 0.3s ease all, left 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15);
  }

  &.type-15 .checkbox:active + .knobs:before {
    width: 46px;
  }

  &.type-15 .checkbox:checked:active + .knobs:before {
    margin-left: -26px;
  }

  &.type-15 .checkbox:checked + .knobs:before {
    content: "NO";
    left: 42px;
    background-color: #f44336;
  }

  &.type-15 .checkbox:checked ~ .layer {
    background-color: #fcebeb;
  }

  /* Button 17 */
  &.type-16 .knobs:before,
  &.type-16 .knobs span {
    content: "YES";
    position: absolute;
    top: 4px;
    left: 4px;
    width: 20px;
    height: 10px;
    color: #fff;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 9px 4px;
  }

  &.type-16 .knobs:before {
    transition: 0.3s ease all, left 0.5s cubic-bezier(0.18, 0.89, 0.35, 1.15);
    z-index: 2;
  }

  &.type-16 .knobs span {
    background-color: #03a9f4;
    border-radius: 2px;
    transition: 0.3s ease all, left 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15);
    z-index: 1;
  }

  &.type-16 .checkbox:checked + .knobs:before {
    content: "NO";
    left: 42px;
  }

  &.type-16 .checkbox:checked + .knobs span {
    left: 42px;
    background-color: #f44336;
  }

  &.type-16 .checkbox:checked ~ .layer {
    background-color: #fcebeb;
  }

  /* Button 18 */
  &.type-17 .knobs:before,
  &.type-17 .knobs span {
    content: "YES";
    position: absolute;
    top: 4px;
    left: 4px;
    color: #fff;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    background-color: #03a9f4;
    border-radius: 2px;
  }

  &.type-17 .knobs:before {
    top: 50%;
    left: 8px;
    width: 20px;
    height: 10px;
    margin-top: -5px;
    background-color: transparent;
    z-index: 2;
  }

  &.type-17 .knobs span {
    width: 20px;
    height: 10px;
    padding: 9px 4px;
    transition: 0.3s ease all, left 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15);
    z-index: 1;
  }

  &.type-17 .checkbox:active + .knobs:before {
    left: 10px;
    width: 46px;
    height: 4px;
    color: transparent;
    margin-top: -2px;
    background-color: #0095d8;
    transition: 0.3s ease all;
    overflow: hidden;
  }

  &.type-17 .checkbox:active + .knobs span {
    width: 58px;
  }

  &.type-17 .checkbox:checked:active + .knobs:before {
    left: auto;
    right: 10px;
    background-color: #d80000;
  }

  &.type-17 .checkbox:checked:active + .knobs span {
    margin-left: -38px;
  }

  &.type-17 .checkbox:checked + .knobs:before {
    content: "NO";
    left: 47px;
  }

  &.type-17 .checkbox:checked + .knobs span {
    left: 42px;
    background-color: #f44336;
  }

  &.type-17 .checkbox:checked ~ .layer {
    background-color: #fcebeb;
  }
}
.bpit-switch.r,
.bpit-switch.r .layer {
  border-radius: 100px;
}
</style>
