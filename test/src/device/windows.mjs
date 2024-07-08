import { DeviceGenerator } from "./device-generator.mjs";

const OS_VERSIONS = ["8.0", "8.1", "10.0", "11.0"];

const WINDOWS_DEVICES = [
  {"device_model": "Surface Pro 9", "device_type": "Tablet", "os_name": "windows", "width": 2880, "height": 1920},
  {"device_model": "Surface Laptop 5", "device_type": "Laptop", "os_name": "windows", "width": 2256, "height": 1504},
  {"device_model": "Surface Go 3", "device_type": "Tablet", "os_name": "windows", "width": 1920, "height": 1280},
  {"device_model": "Surface Book 3", "device_type": "Laptop", "os_name": "windows", "width": 3240, "height": 2160},
  {"device_model": "Dell XPS 13", "device_type": "Laptop", "os_name": "windows", "width": 3840, "height": 2400},
  {"device_model": "HP Spectre x360", "device_type": "Laptop", "os_name": "windows", "width": 1920, "height": 1080},
  {"device_model": "Lenovo ThinkPad X1 Carbon", "device_type": "Laptop", "os_name": "windows", "width": 2560, "height": 1440},
  {"device_model": "Asus ZenBook 14", "device_type": "Laptop", "os_name": "windows", "width": 1920, "height": 1080},
  {"device_model": "Acer Swift 3", "device_type": "Laptop", "os_name": "windows", "width": 1920, "height": 1080},
  {"device_model": "Microsoft Surface Studio 2", "device_type": "Desktop", "os_name": "windows", "width": 4500, "height": 3000},
  {"device_model": "HP Envy 32", "device_type": "Desktop", "os_name": "windows", "width": 3840, "height": 2160},
  {"device_model": "Dell Inspiron 27", "device_type": "Desktop", "os_name": "windows", "width": 2560, "height": 1440}
];

const TYPES = [
  {value: 'Tablet', weight: 5},
  {value: 'Desktop', weight: 30},
  {value: 'Laptop', weight: 65}
];

export default new DeviceGenerator(WINDOWS_DEVICES, TYPES, OS_VERSIONS, "11.0");
