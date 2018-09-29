export default function(html) {
  var _head = document.head || document.getElementsByTagName("head")[0];
  var _sheet = document.createElement("style");

  _sheet.type = "text/css";

  _sheet.innerHTML += html;
  _head.appendChild(_sheet);
  //   return this;
}
