const UID = {
  _current: 0,
  getNew: function() {
    this._current++;
    return this._current;
  }
};
export default UID;
