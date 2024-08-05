import {DeviceGenerator} from "./device-generator.mjs";

const OS_VERSIONS = [
  "8.0", "8.1",
  "9.0",
  "10.0",
  "11.0",
  "12.0", "12.1",
  "13.0",
  "14.0", "14.1", "14.2", "14.3",
  "15.0", "15.1", "15.2", "15.3",
  "16.0", "16.1", "16.2", "16.3",
  "17.0", "17.1", "17.2", "17.3"
];

const IOS_DEVICES = [
  {"device": { "model": "iPhone 14 Pro Max", "type": "Phone" }, "os": { "name": "ios" }, "screen": { "width": 1290, "height": 2796 }},
  {"device": { "model": "iPhone 14 Pro", "type": "Phone" }, "os": { "name": "ios" }, "screen": { "width": 1179, "height": 2556 }},
  {"device": { "model": "iPhone 14 Plus", "type": "Phone" }, "os": { "name": "ios" }, "screen": { "width": 1284, "height": 2778 }},
  {"device": { "model": "iPhone 14", "type": "Phone" }, "os": { "name": "ios" }, "screen": { "width": 1170, "height": 2532 }},
  {"device": { "model": "iPhone 13 Pro Max", "type": "Phone" }, "os": { "name": "ios" }, "screen": { "width": 1284, "height": 2778 }},
  {"device": { "model": "iPhone 13 Pro", "type": "Phone" }, "os": { "name": "ios" }, "screen": { "width": 1170, "height": 2532 }},
  {"device": { "model": "iPhone 13", "type": "Phone" }, "os": { "name": "ios" }, "screen": { "width": 1170, "height": 2532 }},
  {"device": { "model": "iPhone 13 Mini", "type": "Phone" }, "os": { "name": "ios" }, "screen": { "width": 1080, "height": 2340 }},
  {"device": { "model": "iPhone 12 Pro Max", "type": "Phone" }, "os": { "name": "ios" }, "screen": { "width": 1284, "height": 2778 }},
  {"device": { "model": "iPhone 12 Pro", "type": "Phone" }, "os": { "name": "ios" }, "screen": { "width": 1170, "height": 2532 }},
  {"device": { "model": "iPhone 12", "type": "Phone" }, "os": { "name": "ios" }, "screen": { "width": 1170, "height": 2532 }},
  {"device": { "model": "iPhone 12 Mini", "type": "Phone" }, "os": { "name": "ios" }, "screen": { "width": 1080, "height": 2340 }},
  {"device": { "model": "iPhone 11 Pro Max", "type": "Phone" }, "os": { "name": "ios" }, "screen": { "width": 1242, "height": 2688 }},
  {"device": { "model": "iPhone 11 Pro", "type": "Phone" }, "os": { "name": "ios" }, "screen": { "width": 1125, "height": 2436 }},
  {"device": { "model": "iPhone 11", "type": "Phone" }, "os": { "name": "ios" }, "screen": { "width": 828, "height": 1792 }},
  {"device": { "model": "iPhone SE (2022)", "type": "Phone" }, "os": { "name": "ios" }, "screen": { "width": 750, "height": 1334 }},
  {"device": { "model": "iPhone SE (2020)", "type": "Phone" }, "os": { "name": "ios" }, "screen": { "width": 750, "height": 1334 }},
  {"device": { "model": "iPad Pro 12.9-inch (2022)", "type": "Tablet" }, "os": { "name": "ipados" }, "screen": { "width": 2048, "height": 2732 }},
  {"device": { "model": "iPad Pro 11-inch (2022)", "type": "Tablet" }, "os": { "name": "ipados" }, "screen": { "width": 1668, "height": 2388 }},
  {"device": { "model": "iPad Air (2022)", "type": "Tablet" }, "os": { "name": "ipados" }, "screen": { "width": 1640, "height": 2360 }},
  {"device": { "model": "iPad Mini (2021)", "type": "Tablet" }, "os": { "name": "ipados" }, "screen": { "width": 1488, "height": 2266 }},
  {"device": { "model": "iPad (2022)", "type": "Tablet" }, "os": { "name": "ipados" }, "screen": { "width": 1620, "height": 2160 }},
  {"device": { "model": "Apple TV 4K (2022)", "type": "TV" }, "os": { "name": "tvos" }, "screen": { "width": 3840, "height": 2160 }},
  {"device": { "model": "Apple TV HD", "type": "TV" }, "os": { "name": "tvos" }, "screen": { "width": 1920, "height": 1080 }}
];

const TYPES = [
  {value: 'Tablet', weight: 10},
  {value: 'TV', weight: 5},
  {value: 'Phone', weight: 85}
];

export default new DeviceGenerator(IOS_DEVICES, TYPES, OS_VERSIONS, "17.2");
