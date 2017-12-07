goog.module('test');

const main = goog.require('main');
const destruct = goog.require('destruct');

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
  });

  it('should concatenate constants', function() {
    expect(destruct).toEqual('gigou246');
  });
});
