import RandomPool from "../random/pool.mjs";

export default class DeviceCache {
  constructor() {
    this.casual = new RandomPool(10);
    this.avid = new RandomPool(100);
  }

  add(platform) {
    if (Math.random() < 0.05) {
      this.avid.add(platform)
    }

    this.casual.add(platform);
  }

  request() {
    if (Math.random() > 0.1)
      return;

    if (Math.random() < 0.9) {
      return this.avid.request()
    }

    return this.casual.request();
  }
}
