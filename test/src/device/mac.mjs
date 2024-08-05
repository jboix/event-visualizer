import { DeviceGenerator } from "./device-generator.mjs";

const OS_VERSIONS = [
  "10.13", "10.14",
  "10.15",
  "11.0",
  "12.0",
  "13.0",
  "14.0"
];

const MAC_DEVICES = [
  {"device": { "model": "MacBook Pro 16-inch (2023)", "type": "Laptop" }, "os": { "name": "macos" }, "screen": { "width": 3456, "height": 2234 }},
  {"device": { "model": "MacBook Pro 14-inch (2023)", "type": "Laptop" }, "os": { "name": "macos" }, "screen": { "width": 3024, "height": 1964 }},
  {"device": { "model": "MacBook Air 13-inch (M2, 2022)", "type": "Laptop" }, "os": { "name": "macos" }, "screen": { "width": 2560, "height": 1664 }},
  {"device": { "model": "MacBook Air 13-inch (M1, 2020)", "type": "Laptop" }, "os": { "name": "macos" }, "screen": { "width": 2560, "height": 1600 }},
  {"device": { "model": "MacBook Pro 13-inch (2022)", "type": "Laptop" }, "os": { "name": "macos" }, "screen": { "width": 2560, "height": 1600 }},
  {"device": { "model": "iMac 24-inch (2021)", "type": "Desktop" }, "os": { "name": "macos" }, "screen": { "width": 4480, "height": 2520 }},
  {"device": { "model": "iMac 27-inch (2020)", "type": "Desktop" }, "os": { "name": "macos" }, "screen": { "width": 5120, "height": 2880 }},
  {"device": { "model": "iMac Pro (2017)", "type": "Desktop" }, "os": { "name": "macos" }, "screen": { "width": 5120, "height": 2880 }},
  {"device": { "model": "Mac Mini (2023)", "type": "Desktop" }, "os": { "name": "macos" }, "screen": { "width": 3840, "height": 2160 }},
  {"device": { "model": "Mac Studio (2022)", "type": "Desktop" }, "os": { "name": "macos" }, "screen": { "width": 5120, "height": 2880 }}
];

const TYPES = [
  {value: 'Desktop', weight: 5},
  {value: 'Laptop', weight: 95}
];

export default new DeviceGenerator(MAC_DEVICES, TYPES, OS_VERSIONS, "14.0");
