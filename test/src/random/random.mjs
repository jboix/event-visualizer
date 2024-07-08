function nonZeroRandom() {
  let n = 0;
  while (n === 0) n = Math.random();
  return n;
}

export default {
  /**
   * Generates a random number from a skewed normal distribution within a specified range.
   *
   * @param {number} min - The minimum value of the range.
   * @param {number} max - The maximum value of the range.
   * @param {number} skew - The skewness of the distribution (higher values skew towards min, lower values skew towards max).
   *
   * @returns {number} A random number within the specified range with a skewed distribution.
   */
  normal: function (min, max, skew = 1) {
    let num =
      Math.sqrt( -2.0 * Math.log( nonZeroRandom() ) ) *
      Math.cos( 2.0 * Math.PI * nonZeroRandom() );

    num = num / 10.0 + 0.5;

    if (num > 1 || num < 0)
      return this.normal(min, max, skew);

    num = Math.pow(num, skew);
    num *= max - min;
    num += min;

    return num;
  },

  normalElement: function(array, meanIndex) {
    const relativePosition = meanIndex / array.length - 1;
    const skew = relativePosition < 0.5 ?
      1 + (0.5 - relativePosition) :
      0.5 / (relativePosition - 0.5);
    const index = Math.floor(this.normal(0, array.length, skew));

    return array[index];
  }
};
