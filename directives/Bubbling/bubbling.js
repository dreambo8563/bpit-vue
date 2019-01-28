import "./bubbling.css";
const instances = new WeakMap();

export default {
  inserted(el, binding) {
    const rect = el.getBoundingClientRect();
    const sArray = [4, 6, 8, 10];
    let bArray = [];
    if (!el.style.position) {
      el.style.position = "relative";
    }
    const bindingValue = binding.value || {};

    // Push the header width values to bArray
    // Function to select random array element
    // Used within the setInterval a few times
    function randomValue(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }

    for (var i = 0; i < rect.width; i++) {
      bArray.push(i);
    }

    const handler = setInterval(function() {
      let bubbleFrame = document.createElement("div");
      const size = randomValue(sArray);
      bubbleFrame.className = "individual-bubble";
      if (bindingValue.color) {
        bubbleFrame.style.backgroundColor = bindingValue.color;
      }
      bubbleFrame.style.left = randomValue(bArray) + "px";
      bubbleFrame.style.width = size + "px";
      bubbleFrame.style.height = size + "px";
      el.appendChild(bubbleFrame);
      //   bubbleFrame.style.bottom = "100%";
      bubbleFrame.style.opacity = "0.7";
      setTimeout(() => {
        bubbleFrame.remove();
      }, 3000);
    }, 500);
    instances.set(el, handler);
    // return false;
  },
  unbind(el) {
    if (instances.has(el)) {
      const handler = instances.get(el);
      instances.delete(el);
      clearInterval(handler);
    }
  }
};
