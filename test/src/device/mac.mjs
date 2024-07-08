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
  {"device_model": "MacBook Pro 16-inch (2023)", "device_type": "Laptop", "os_name": "macos", "width": 3456, "height": 2234},
  {"device_model": "MacBook Pro 14-inch (2023)", "device_type": "Laptop", "os_name": "macos", "width": 3024, "height": 1964},
  {"device_model": "MacBook Air 13-inch (M2, 2022)", "device_type": "Laptop", "os_name": "macos", "width": 2560, "height": 1664},
  {"device_model": "MacBook Air 13-inch (M1, 2020)", "device_type": "Laptop", "os_name": "macos", "width": 2560, "height": 1600},
  {"device_model": "MacBook Pro 13-inch (2022)", "device_type": "Laptop", "os_name": "macos", "width": 2560, "height": 1600},
  {"device_model": "iMac 24-inch (2021)", "device_type": "Desktop", "os_name": "macos", "width": 4480, "height": 2520},
  {"device_model": "iMac 27-inch (2020)", "device_type": "Desktop", "os_name": "macos", "width": 5120, "height": 2880},
  {"device_model": "iMac Pro (2017)", "device_type": "Desktop", "os_name": "macos", "width": 5120, "height": 2880},
  {"device_model": "Mac Mini (2023)", "device_type": "Desktop", "os_name": "macos", "width": 3840, "height": 2160},
  {"device_model": "Mac Studio (2022)", "device_type": "Desktop", "os_name": "macos", "width": 5120, "height": 2880}
];

const TYPES = [
  {value: 'Desktop', weight: 5},
  {value: 'Laptop', weight: 95}
];

export default new DeviceGenerator(MAC_DEVICES, TYPES, OS_VERSIONS, "14.0");
