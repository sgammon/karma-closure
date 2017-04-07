goog.module('test');

const main = goog.require('main');

/**
 * main
 *   -> a
 *     -> b
 *     -> c
 *       -> d
 *   -> b
 *   -> e
 *   -> f
 */

describe('main', function() {
  it('should call through a(), b() and sum', function() {
    expect(main(1, 2, 3)).toBe(24);
  })
});
