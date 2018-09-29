<template>
  <button class="btn" :disabled="disabled" :class="`${type} ${invert ? 'invert' : ''} ${size}`" @click="$emit('click', $event)">
    <slot>Submit</slot>
    <img
      v-if="loading"
      class="loader"
      :src="loadingIcon"
      height="32px"
      width="32px"
    />
  </button>
</template>
<script>
import loadingIcon from "../../assets/loader-green.svg";
export default {
  name: "FlockButton",
  props: {
    size: {
      default: "auto",
      type: String,
      validator(prop) {
        return ["auto", "full", "half"].indexOf(prop) > -1;
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    type: {
      default: "primary",
      type: String
    },
    disabled: {
      default: false,
      type: Boolean
    },
    invert: {
      default: false,
      type: Boolean
    }
  },
  data() {
    return {
      loadingIcon
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/sass/mixins.scss";
@mixin onHover($color) {
  box-shadow: inset 0 -3px 0 0 $color;
}
.btn {
  @include border-radius();
  border: none;
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  min-width: 72px;
  font-weight: 600;
  padding: 0.825rem 0.75rem;
  text-align: center;
  text-transform: capitalize;
  transition: all 0.1s ease-in-out;
  background: $primary;
  outline: none;
  position: relative;
  .loader {
    position: absolute;
    left: 1em;
    top: 50%;
    transform: translateY(-50%);
  }
  &.full {
    width: 100%;
  }
  &.half {
    width: 50%;
  }
  &.primary {
    &:active {
      background: $primary-dark;
    }
    &:hover {
      @include onHover($primary-dark);
    }
    &.invert {
      color: $primary;
      &:active {
        color: white;
      }
    }
  }
  &.secondary {
    color: $dark-text-color;
    background: $secondary;
    &:active {
      background: $secondary-dark;
      color: white;
    }
    &:hover {
      @include onHover($secondary-dark);
    }
    &:disabled {
      color: white;
      opacity: 0.7;
    }
    &.invert {
      border-color: $secondary-dark;
    }
  }
  &.destructive {
    background: $destructive;
    &:active {
      background: $destructive-dark;
    }
    &:hover {
      @include onHover($destructive-dark);
    }
    &.invert {
      color: $destructive;
      border-color: $destructive;
      &:active {
        color: white;
      }
    }
  }
  &.invert {
    background: white;
    border: solid 1px $primary;
    &:disabled {
      background: white;
      border-color: $secondary;
      color: $secondary;
      opacity: 1;
    }
  }
  &:disabled {
    opacity: 0.5;
    cursor: default;
    &:hover {
      box-shadow: none;
    }
  }
}
</style>
