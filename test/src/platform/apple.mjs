import ios from "../device/ios.mjs";
import PlatformGenerator from "./paltform-generator.mjs";

const DEVICES = [
  {value: ios, weight: 1000}
];

const DOMAINS = [
  { value: 'ch.srf.news', weight: 15 },
  { value: 'ch.srf.sports', weight: 15 },
  { value: 'ch.srf.meteo', weight: 15 },
  { value: 'ch.srf.play', weight: 30 },
  { value: 'ch.rts.info', weight: 10 },
  { value: 'ch.rts.sport', weight: 10 },
  { value: 'ch.rts.play', weight: 10 },
  { value: 'ch.rsi.news', weight: 5 },
  { value: 'ch.rsi.sports', weight: 5 },
  { value: 'ch.rsi.play', weight: 10 },
  { value: 'ch.swi.main', weight: 2 },
  { value: 'ch.rtr.play', weight: 3 }
];

export default {
  create: function () {
    return new PlatformGenerator(DEVICES, DOMAINS, 'apple');
  }
};
