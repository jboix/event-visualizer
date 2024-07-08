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
  {"device_model": "Samsung Galaxy S24", "device_type": "Phone", "os_name": "android", "width": 1080, "height": 2400},
  {"device_model": "Samsung Galaxy Tab S8", "device_type": "Tablet", "os_name": "android", "width": 1600, "height": 2560},
  {"device_model": "Google Pixel 6", "device_type": "Phone", "os_name": "android", "width": 1080, "height": 2340},
  {"device_model": "Samsung Smart TV", "device_type": "TV", "os_name": "android", "width": 3840, "height": 2160},
  {"device_model": "OnePlus 9 Pro", "device_type": "Phone", "os_name": "android", "width": 1440, "height": 3216},
  {"device_model": "Samsung Galaxy S21 Ultra", "device_type": "Phone", "os_name": "android", "width": 1440, "height": 3200},
  {"device_model": "Samsung Galaxy Note 20 Ultra", "device_type": "Phone", "os_name": "android", "width": 1440, "height": 3088},
  {"device_model": "Xiaomi Mi 11 Ultra", "device_type": "Phone", "os_name": "android", "width": 1440, "height": 3200},
  {"device_model": "OnePlus 8 Pro", "device_type": "Phone", "os_name": "android", "width": 1440, "height": 3168},
  {"device_model": "Sony Xperia 1 III", "device_type": "Phone", "os_name": "android", "width": 1644, "height": 3840},
  {"device_model": "Oppo Find X3 Pro", "device_type": "Phone", "os_name": "android", "width": 1440, "height": 3216},
  {"device_model": "Samsung Galaxy Tab S7+", "device_type": "Tablet", "os_name": "android", "width": 1752, "height": 2800},
  {"device_model": "LG G1 OLED TV", "device_type": "TV", "os_name": "android", "width": 3840, "height": 2160},
  {"device_model": "Google Pixel 6 Pro", "device_type": "Phone", "os_name": "android", "width": 1440, "height": 3120},
  {"device_model": "Samsung Galaxy A52 5G", "device_type": "Phone", "os_name": "android", "width": 1080, "height": 2400},
  {"device_model": "OnePlus Nord CE 5G", "device_type": "Phone", "os_name": "android", "width": 1080, "height": 2400},
  {"device_model": "Xiaomi Redmi Note 10 Pro", "device_type": "Phone", "os_name": "android", "width": 1080, "height": 2400},
  {"device_model": "Samsung Galaxy Tab A7", "device_type": "Tablet", "os_name": "android", "width": 1200, "height": 2000},
  {"device_model": "Lenovo Tab P11 Pro", "device_type": "Tablet", "os_name": "android", "width": 1600, "height": 2560},
  {"device_model": "Sony Bravia XR A90J", "device_type": "TV", "os_name": "android", "width": 3840, "height": 2160},
  {"device_model": "TCL 6-Series 4K QLED TV", "device_type": "TV", "os_name": "android", "width": 3840, "height": 2160}
];

const TYPES = [
  {value: 'Tablet', weight: 5},
  {value: 'TV', weight: 1},
  {value: 'Phone', weight: 94}
];

export default new DeviceGenerator(ANDROID_DEVICES, TYPES, OS_VERSIONS, "13.0");
