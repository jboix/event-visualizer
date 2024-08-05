import {faker} from "@faker-js/faker";
import random from "../random/random.mjs";

export class DeviceGenerator {
  constructor(devices, types, osVersions, meanOsVersion) {
    this.devices = devices;
    this.types = types;
    this.osVersions = osVersions;
    this.meanOsVersion = meanOsVersion;
  }
  /**
   *
   * Generate a random device type based on weighted probabilities.
   *
   * @returns {string} The randomly selected device type ('Tablet', 'TV', or 'Phone').
   */
  type() {
    return faker.helpers.weightedArrayElement(this.types);
  }

  /**
   * Generate a random device object based on a selected device type.
   *
   * @returns {Object} The generated device object with additional properties.
   */
  device() {
    const type = this.type();
    const filteredDevices = this.devices.filter(device => device.device.type === type);
    const result = Object.assign({}, faker.helpers.arrayElement(filteredDevices));

    result.os.version = this.osVersion();
    result.device.id = faker.phone.imei();

    return result;
  }

  /**
   * Generate a random Android OS version based on a normal distribution around a mean version.
   *
   * @returns {string} The randomly generated Android OS version.
   */
   osVersion() {
    return random.normalElement(this.osVersions, this.osVersions.indexOf(this.meanOsVersion));
  }
};
