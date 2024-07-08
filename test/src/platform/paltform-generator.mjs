import DeviceCache from "./cache.mjs";
import {faker} from "@faker-js/faker";
import MediaGenerator from "../media/media.mjs";

export default class PlatformGenerator {
  constructor(devices, domains, platform, businessUnits = ['srf', 'rts', 'rsi', 'rtr', 'swi']) {
    this.cache = new DeviceCache();
    this.mediaGenerator = new MediaGenerator(businessUnits);
    this.devices = devices;
    this.domains = domains;
    this.platform = platform;
  }

  generate() {
    let result = this.cache.request();

    if (!result) {
      result = this.device();
    }

    result.origin = this.origin();
    result.media_id = this.mediaGenerator.media(result.origin);
    result.media_source = `https://il.srgssr.ch/integrationlayer/2.1/mediaComposition/byUrn/${result.media_id}`;

    return result;
  }

  device() {
    const generator = faker.helpers.weightedArrayElement(this.devices);

    let result = generator.device();

    result.player_name = 'pillarbox';
    result.player_platform = this.platform;

    this.cache.add(result);

    return result;
  }

  origin() {
    return faker.helpers.weightedArrayElement(this.domains);
  }
}
