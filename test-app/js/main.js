goog.module('main');

goog.require('a');
goog.require('b');
const f = goog.require('f');

exports = function(one, two, three) {
  return a(one) + b(two) + f(three);
};
