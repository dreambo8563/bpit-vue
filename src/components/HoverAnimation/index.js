function hoverAnimation(el, binding) {
  const injectStyle = require("../../utils/injectStyle").default;
  const id = require("../../utils/getID").default.getNew();

  el.classList.add("bpit-hover-animation", "inject" + id);
  const styles = `
  .inject${id}..bpit-hover-animation{
    color:${binding.value.textColor}
  }
  .inject${id}.bpit-hover-animation::before {
    background-color: ${binding.value.backgroundColor};
    top: -0.25rem;
    left: 0.5rem;
    -webkit-animation: top 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.25s
      infinite alternate;
    animation: top 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.25s infinite
      alternate;
  }
  .inject${id}.bpit-hover-animation::after {
    background-color: ${binding.value.foregroundColor};
    top: 2.5rem;
    right: 0.5rem;
    -webkit-animation: bottom 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.5s
      infinite alternate;
    animation: bottom 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.5s infinite
      alternate;
  }

  .inject${id}.bpit-hover-animation {
    position: relative;
    letter-spacing: 0.15em;
    margin: 0 auto;
    padding: 1rem 2.5rem;
    background: transparent;
    outline: none;
    font-size: 28px;
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.15s;
  }
  .inject${id}.bpit-hover-animation::after,
  .inject${id}.bpit-hover-animation::before {
    content: "";
    position: absolute;
    height: 40%;
    width: 10%;
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    z-index: -2;
    border-radius: 50%;
    -webkit-animation: grow 1s infinite;
    animation: grow 1s infinite;
  }
  
  .inject${id}.bpit-hover-animation:hover {
    color: white;
  }
  .inject${id}.bpit-hover-animation:hover::before,
  .inject${id}.bpit-hover-animation:hover::after {
    top: 0;
    -webkit-transform: skewx(-10deg);
    transform: skewx(-10deg);
    height: 100%;
    width: 100%;
    border-radius: 0;
    -webkit-animation: none;
    animation: none;
  }
  .inject${id}.bpit-hover-animation:hover::after {
    left: 0rem;
  }
  .inject${id}.bpit-hover-animation:hover::before {
    top: 0.5rem;
    left: 0.35rem;
  }
  `;
  injectStyle(styles);
}

export default {
  HoverAnimation: {
    bind: hoverAnimation
  }
};
