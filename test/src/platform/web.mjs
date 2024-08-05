import android from "../device/android.mjs";
import windows from "../device/windows.mjs";
import mac from "../device/mac.mjs";
import linux from "../device/linux.mjs";
import ios from "../device/ios.mjs";
import PlatformGenerator from "./paltform-generator.mjs";
import {faker} from "@faker-js/faker";
import browser from "../browser/browser-generator.mjs";

const DEVICES = [
  {value: android, weight: 22},
  {value: ios, weight: 36},
  {value: windows, weight: 40},
  {value: mac, weight: 10},
  {value: linux, weight: 1}
];

const DOMAINS = [
  {value: 'https://www.srf.ch/news', weight: 15},
  {value: 'https://www.srf.ch/sports', weight: 15},
  {value: 'https://www.srf.ch/kultur', weight: 15},
  {value: 'https://www.srf.ch/play', weight: 30},
  {value: 'https://www.srf.ch/play', weight: 20},
  {value: 'https://www.rts.ch/info', weight: 10},
  {value: 'https://www.rts.ch/sport', weight: 10},
  {value: 'https://www.rts.ch/culture', weight: 10},
  {value: 'https://www.rts.ch/play', weight: 10},
  {value: 'https://www.rsi.ch/news', weight: 5},
  {value: 'https://www.rsi.ch/sports', weight: 5},
  {value: 'https://www.rsi.ch/cultura', weight: 5},
  {value: 'https://www.rsi.ch/play', weight: 10},
  {value: 'https://www.swi.ch/', weight: 3},
  {value: 'https://www.rtr.ch/play', weight: 2},
  {value: 'https://www.rtr.ch/novitads', weight: 1},
  {value: 'https://www.rtr.ch/sport', weight: 1},
  {value: 'https://www.rtr.ch/cultura', weight: 1}
];

class WebPlatformGenerator extends PlatformGenerator {
  dateFormat = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });

  origin() {
    const domain = faker.helpers.weightedArrayElement(this.domains);
    const articleDate = faker.date.recent({days: 360});
    const articleTitle = faker.helpers.slugify(
      faker.word.words(faker.number.int({min: 3, max: 10}))
    );

    return `${domain}/${this.dateFormat.format(articleDate).replace(/\//g, '-')}/${articleTitle}`;
  }

  device() {
    const generator = faker.helpers.weightedArrayElement(this.devices);

    let result = generator.device();
    while (result.device.type === 'TV') result = generator.device();

    result.player = {
      name: 'pillarbox',
      platform: this.platform
    };

    result.browser = browser.browser(result.os.name);

    this.cache.add(result);

    return result;
  }
}

export default {
  create: function () {
    return new WebPlatformGenerator(DEVICES, DOMAINS, 'web');
  }
};

