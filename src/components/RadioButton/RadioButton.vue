<template>
  <div @click="handelChange" :class="['bpit-radio-button',{'disabled':isDisabled}]">
    <input v-if="isDisabled" disabled type="radio" :checked="checked" :id="id" :name="groupName">
    <input v-else type="radio" :checked="checked" :id="id" :name="groupName">
    <label :for="id">
      <slot>{{label}}</slot>
    </label>
    <div class="check"></div>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      innerChecked: false
    };
  },
  computed: {
    checked() {
      return this.hasVModel
        ? this.value == this.label
        : this._radioGroup.value != undefined
          ? this._radioGroup.value == this.label
          : this.innerChecked;
    },
    groupName() {
      return (this._radioGroup && this._radioGroup.$vnode.tag) || this.label;
    },
    hasVModel() {
      return this.value != undefined;
    },
    _radioGroup() {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.componentName !== "bpit-radio-group") {
          parent = parent.$parent;
        } else {
          return parent;
        }
      }
      return false;
    },
    id() {
      return `${this.groupName}-${this.label}`;
    },
    isDisabled() {
      return this._radioGroup.disabled || this.disabled;
    }
  },
  methods: {
    handelChange() {
      if (this.isDisabled) {
        return;
      }
      this._radioGroup && this._radioGroup.$emit("input", this.label);
      this.innerChecked = true;
      if (this.hasVModel) {
        this.$emit("input", this.label);
      }
    }
  },
  created() {
    this._radioGroup && this._radioGroup.$emit("input", this.label);
  }
};
</script>
<style lang="scss" scoped>
.bpit-radio-button {
  color: currentColor;
  display: inline-block;
  position: relative;
  padding: 5px;
  margin-left: 35px;
  &.disabled {
    cursor: not-allowed;
    label,
    .check {
      cursor: not-allowed;
    }
  }
  & input[type="radio"] {
    position: absolute;
    visibility: hidden;
    &:checked ~ .check {
      border: 5px solid currentColor;
      &::before {
        background: currentColor;
      }
    }
    &:checked ~ label {
      // color: #359be8;
      color: currentColor;
    }
  }
  & label {
    display: block;
    position: relative;
    font-weight: 300;
    font-size: 1.35em;
    margin: 10px auto;
    height: 30px;
    cursor: pointer;
    transition: all 0.25s linear;
  }
  //   &:hover label {
  //     color: #ffffff;
  //   }
  & .check {
    display: block;
    position: absolute;
    border: 5px solid currentColor;
    border-radius: 100%;
    height: 25px;
    width: 25px;
    top: 50%;
    left: -35px;
    transform: translateY(-50%);
    transition: border 0.25s linear;
    cursor: pointer;
    &::before {
      display: block;
      position: absolute;
      content: "";
      border-radius: 100%;
      height: 15px;
      width: 15px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      margin: auto;
      transition: background 0.25s linear;
    }
  }
}
</style>
