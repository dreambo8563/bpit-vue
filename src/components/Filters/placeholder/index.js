//为空的时候显示 property
function placeholder(input, property) {
  return input === undefined || input === "" || input === null
    ? property
    : input;
}

export default placeholder;
