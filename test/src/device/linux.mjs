import { DeviceGenerator } from "./device-generator.mjs";

const OS_VERSIONS = [
  "Ubuntu 18.04", "Ubuntu 20.04", "Ubuntu 22.04", "Ubuntu 23.04",
  "Debian 9", "Debian 10", "Debian 11", "Debian 12",
  "Fedora 34", "Fedora 35", "Fedora 36", "Fedora 37", "Fedora 38",
  "Arch Linux",
  "CentOS 7", "CentOS 8", "CentOS Stream 8", "CentOS Stream 9",
  "openSUSE Leap 15.2", "openSUSE Leap 15.3", "openSUSE Leap 15.4",
  "Linux Mint 19.3", "Linux Mint 20.1", "Linux Mint 20.2", "Linux Mint 20.3", "Linux Mint 21",
  "Pop!_OS 20.04", "Pop!_OS 21.04", "Pop!_OS 21.10", "Pop!_OS 22.04",
  "Manjaro 21.0", "Manjaro 21.1", "Manjaro 21.2", "Manjaro 21.3", "Manjaro 22.0"
];

const LINUX_DEVICES = [
  {"device": { "model": "Dell XPS 13", "type": "Laptop" }, "os": { "name": "linux" }, "screen": { "width": 3840, "height": 2400 }},
  {"device": { "model": "System76 Lemur Pro", "type": "Laptop" }, "os": { "name": "linux" }, "screen": { "width": 1920, "height": 1080 }},
  {"device": { "model": "Purism Librem 14", "type": "Laptop" }, "os": { "name": "linux" }, "screen": { "width": 1920, "height": 1080 }},
  {"device": { "model": "Lenovo ThinkPad X1 Carbon", "type": "Laptop" }, "os": { "name": "linux" }, "screen": { "width": 2560, "height": 1440 }},
  {"device": { "model": "Asus ZenBook 14", "type": "Laptop" }, "os": { "name": "linux" }, "screen": { "width": 1920, "height": 1080 }},
  {"device": { "model": "Acer Swift 3", "type": "Laptop" }, "os": { "name": "linux" }, "screen": { "width": 1920, "height": 1080 }},
  {"device": { "model": "System76 Thelio Major", "type": "Desktop" }, "os": { "name": "linux" }, "screen": { "width": 3840, "height": 2160 }},
  {"device": { "model": "Dell Precision 5820", "type": "Desktop" }, "os": { "name": "linux" }, "screen": { "width": 5120, "height": 2880 }},
  {"device": { "model": "Lenovo ThinkCentre M720", "type": "Desktop" }, "os": { "name": "linux" }, "screen": { "width": 2560, "height": 1440 }},
  {"device": { "model": "HP Z2 Tower G5", "type": "Desktop" }, "os": { "name": "linux" }, "screen": { "width": 3840, "height": 2160 }}
];

const TYPES = [
  {value: 'Desktop', weight: 70},
  {value: 'Laptop', weight: 30}
];

export default new DeviceGenerator(LINUX_DEVICES, TYPES, OS_VERSIONS, "Ubuntu 22.04");
