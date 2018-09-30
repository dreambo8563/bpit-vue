function hoverMagicUnderline(el, binding) {
  const injectStyle = require("../../utils/injectStyle").default;
  const id = require("../../utils/getID").default.getNew();

  el.classList.add("bpit-hover-magic-underline", "inject" + id);
  const styles = `
  .inject${id}.bpit-hover-magic-underline {
    background-image: linear-gradient(120deg, ${binding.value.leftColor} 0%, ${
    binding.value.rightColor
  } 100%);
    background-repeat: no-repeat;
    background-size: 100% 0.2em;
    background-position: 0 88%;
    transition: background-size 0.25s ease-in;
  }
  .inject${id}.bpit-hover-magic-underline:hover {
    background-size: 100% 88%;
  }

  `;
  injectStyle(styles);
}

export default {
  HoverMagicUnderline: {
    bind: hoverMagicUnderline
  }
};
