import bubbling from "./bubbling";

const install = function(Vue) {
  Vue.directive("bubbling", bubbling);
};

if (window.Vue) {
  window.bubbling = bubbling;
  Vue.use(install) // eslint-disable-line
}

bubbling.install = install;
export default bubbling;
