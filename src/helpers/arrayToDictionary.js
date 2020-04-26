export default arr =>
  arr.reduce((prev, cur, key) => ({ ...prev, [key + 1]: cur }), {});
