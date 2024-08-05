import {DeviceGenerator} from "./device-generator.mjs";

const OS_VERSIONS = [
  "4.0", "4.1", "4.2", "4.3", "4.4",
  "5.0", "5.1", "5.1.1",
  "6.0", "6.0.1",
  "7.0", "7.1", "7.1.1", "7.1.2",
  "8.0", "8.1",
  "9.0",
  "10.0",
  "11.0",
  "12.0", "12.1",
  "13.0",
  "14.0"
];

const ANDROID_DEVICES = [
  {"device": {"model": "Samsung Galaxy S24", "type": "Phone"}, "os": {"name": "android"}, "screen": {"width": 1080, "height": 2400}},
  {"device": {"model": "Samsung Galaxy Tab S8", "type": "Tablet"}, "os": {"name": "android"}, "screen": {"width": 1600, "height": 2560}},
  {"device": {"model": "Google Pixel 6", "type": "Phone"}, "os": {"name": "android"}, "screen": {"width": 1080, "height": 2340}},
  {"device": {"model": "Samsung Smart TV", "type": "TV"}, "os": {"name": "android"}, "screen": {"width": 3840, "height": 2160}},
  {"device": {"model": "OnePlus 9 Pro", "type": "Phone"}, "os": {"name": "android"}, "screen": {"width": 1440, "height": 3216}},
  {"device": {"model": "Samsung Galaxy S21 Ultra", "type": "Phone"}, "os": {"name": "android"}, "screen": {"width": 1440, "height": 3200}},
  {"device": {"model": "Samsung Galaxy Note 20 Ultra", "type": "Phone"}, "os": {"name": "android"}, "screen": {"width": 1440, "height": 3088}},
  {"device": {"model": "Xiaomi Mi 11 Ultra", "type": "Phone"}, "os": {"name": "android"}, "screen": {"width": 1440, "height": 3200}},
  {"device": {"model": "OnePlus 8 Pro", "type": "Phone"}, "os": {"name": "android"}, "screen": {"width": 1440, "height": 3168}},
  {"device": {"model": "Sony Xperia 1 III", "type": "Phone"}, "os": {"name": "android"}, "screen": {"width": 1644, "height": 3840}},
  {"device": {"model": "Oppo Find X3 Pro", "type": "Phone"}, "os": {"name": "android"}, "screen": {"width": 1440, "height": 3216}},
  {"device": {"model": "Samsung Galaxy Tab S7+", "type": "Tablet"}, "os": {"name": "android"}, "screen": {"width": 1752, "height": 2800}},
  {"device": {"model": "LG G1 OLED TV", "type": "TV"}, "os": {"name": "android"}, "screen": {"width": 3840, "height": 2160}},
  {"device": {"model": "Google Pixel 6 Pro", "type": "Phone"}, "os": {"name": "android"}, "screen": {"width": 1440, "height": 3120}},
  {"device": {"model": "Samsung Galaxy A52 5G", "type": "Phone"}, "os": {"name": "android"}, "screen": {"width": 1080, "height": 2400}},
  {"device": {"model": "OnePlus Nord CE 5G", "type": "Phone"}, "os": {"name": "android"}, "screen": {"width": 1080, "height": 2400}},
  {"device": {"model": "Xiaomi Redmi Note 10 Pro", "type": "Phone"}, "os": {"name": "android"}, "screen": {"width": 1080, "height": 2400}},
  {"device": {"model": "Samsung Galaxy Tab A7", "type": "Tablet"}, "os": {"name": "android"}, "screen": {"width": 1200, "height": 2000}},
  {"device": {"model": "Lenovo Tab P11 Pro", "type": "Tablet"}, "os": {"name": "android"}, "screen": {"width": 1600, "height": 2560}},
  {"device": {"model": "Sony Bravia XR A90J", "type": "TV"}, "os": {"name": "android"}, "screen": {"width": 3840, "height": 2160}},
  {"device": {"model": "TCL 6-Series 4K QLED TV", "type": "TV"}, "os": {"name": "android"}, "screen": {"width": 3840, "height": 2160}}
];

const TYPES = [
  {value: 'Tablet', weight: 5},
  {value: 'TV', weight: 1},
  {value: 'Phone', weight: 94}
];

export default new DeviceGenerator(ANDROID_DEVICES, TYPES, OS_VERSIONS, "13.0");
