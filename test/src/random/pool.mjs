import {faker} from "@faker-js/faker";

/**
 * A class representing a pool with weighted removal and request mechanism.
 */
export default class RandomPool {
  /**
   * Creates a RandomPool instance with a specified limit.
   *
   * @param {number} limit - The maximum number of items the pool can hold.
   */
  constructor(limit) {
    this.pool = [];
    this.limit = limit;
  }

  /**
   * Adds a new item to the pool with an initial weight of 100.
   * If the pool exceeds its limit, it removes an item using weighted removal strategy.
   *
   * @param {any} value - The value to add to the pool.
   */
  add(value) {
    if (this.pool.length >= this.limit) {
      const value = faker.helpers.weightedArrayElement(this.pool);
      const indexToRemove = this.pool.findIndex(item => item.value === value);
      this.pool.splice(indexToRemove, 1);
    }

    this.pool.push({value: value, weight: this.limit});
  }

  /**
   * Requests a random item from the pool and decreases its weight by 10.
   *
   * @returns {Object} The item selected from the pool with updated weight.
   */
  request() {
    if (!this.pool.length)
      return;

    const item = faker.helpers.arrayElement(this.pool);

    item.weight -= Math.min(1, this.limit / 10);

    return item.value;
  }
}
