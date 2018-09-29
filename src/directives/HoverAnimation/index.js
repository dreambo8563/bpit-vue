function hoverAnimation(el, binding) {
  import("./style.css");
  const injectStyle = require("../../utils/injectStyle").default;
  const id = require("../../utils/getID").default.getNew();

  el.classList.add("bpit-hover-animation", "inject" + id);
  const styles = `
  .inject${id}..bpit-hover-animation{
    color:${binding.value.textColor}
  }
  .inject${id}.bpit-hover-animation::before {
    background-color: ${binding.value.backgroundColor};
    top: -0.75rem;
    left: 0.5rem;
    -webkit-animation: top 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.25s
      infinite alternate;
    animation: top 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.25s infinite
      alternate;
  }
  .inject${id}.bpit-hover-animation::after {
    background-color: ${binding.value.foregroundColor};
    top: 3rem;
    right: 0.5rem;
    -webkit-animation: bottom 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.5s
      infinite alternate;
    animation: bottom 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.5s infinite
      alternate;
  }
  `;
  injectStyle(styles);
}

export default {
  HoverAnimation: {
    bind: hoverAnimation
  }
};
