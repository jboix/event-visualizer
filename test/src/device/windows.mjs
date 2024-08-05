import { DeviceGenerator } from "./device-generator.mjs";

const OS_VERSIONS = ["8.0", "8.1", "10.0", "11.0"];

const WINDOWS_DEVICES = [
  {"device": { "model": "Surface Pro 9", "type": "Tablet" }, "os": { "name": "windows" }, "screen": { "width": 2880, "height": 1920 }},
  {"device": { "model": "Surface Laptop 5", "type": "Laptop" }, "os": { "name": "windows" }, "screen": { "width": 2256, "height": 1504 }},
  {"device": { "model": "Surface Go 3", "type": "Tablet" }, "os": { "name": "windows" }, "screen": { "width": 1920, "height": 1280 }},
  {"device": { "model": "Surface Book 3", "type": "Laptop" }, "os": { "name": "windows" }, "screen": { "width": 3240, "height": 2160 }},
  {"device": { "model": "Dell XPS 13", "type": "Laptop" }, "os": { "name": "windows" }, "screen": { "width": 3840, "height": 2400 }},
  {"device": { "model": "HP Spectre x360", "type": "Laptop" }, "os": { "name": "windows" }, "screen": { "width": 1920, "height": 1080 }},
  {"device": { "model": "Lenovo ThinkPad X1 Carbon", "type": "Laptop" }, "os": { "name": "windows" }, "screen": { "width": 2560, "height": 1440 }},
  {"device": { "model": "Asus ZenBook 14", "type": "Laptop" }, "os": { "name": "windows" }, "screen": { "width": 1920, "height": 1080 }},
  {"device": { "model": "Acer Swift 3", "type": "Laptop" }, "os": { "name": "windows" }, "screen": { "width": 1920, "height": 1080 }},
  {"device": { "model": "Microsoft Surface Studio 2", "type": "Desktop" }, "os": { "name": "windows" }, "screen": { "width": 4500, "height": 3000 }},
  {"device": { "model": "HP Envy 32", "type": "Desktop" }, "os": { "name": "windows" }, "screen": { "width": 3840, "height": 2160 }},
  {"device": { "model": "Dell Inspiron 27", "type": "Desktop" }, "os": { "name": "windows" }, "screen": { "width": 2560, "height": 1440 }}
];

const TYPES = [
  {value: 'Tablet', weight: 5},
  {value: 'Desktop', weight: 30},
  {value: 'Laptop', weight: 65}
];

export default new DeviceGenerator(WINDOWS_DEVICES, TYPES, OS_VERSIONS, "11.0");
