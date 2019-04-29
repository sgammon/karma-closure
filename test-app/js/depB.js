goog.provide('b');

b = function(value) {
  const f = goog.module.get('f');
  return f(2 * value);
};
