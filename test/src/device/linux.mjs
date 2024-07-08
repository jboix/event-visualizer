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
  {"device_model": "Dell XPS 13", "device_type": "Laptop", "os_name": "linux", "width": 3840, "height": 2400},
  {"device_model": "System76 Lemur Pro", "device_type": "Laptop", "os_name": "linux", "width": 1920, "height": 1080},
  {"device_model": "Purism Librem 14", "device_type": "Laptop", "os_name": "linux", "width": 1920, "height": 1080},
  {"device_model": "Lenovo ThinkPad X1 Carbon", "device_type": "Laptop", "os_name": "linux", "width": 2560, "height": 1440},
  {"device_model": "Asus ZenBook 14", "device_type": "Laptop", "os_name": "linux", "width": 1920, "height": 1080},
  {"device_model": "Acer Swift 3", "device_type": "Laptop", "os_name": "linux", "width": 1920, "height": 1080},
  {"device_model": "System76 Thelio Major", "device_type": "Desktop", "os_name": "linux", "width": 3840, "height": 2160},
  {"device_model": "Dell Precision 5820", "device_type": "Desktop", "os_name": "linux", "width": 5120, "height": 2880},
  {"device_model": "Lenovo ThinkCentre M720", "device_type": "Desktop", "os_name": "linux", "width": 2560, "height": 1440},
  {"device_model": "HP Z2 Tower G5", "device_type": "Desktop", "os_name": "linux", "width": 3840, "height": 2160}
];

const TYPES = [
  {value: 'Desktop', weight: 70},
  {value: 'Laptop', weight: 30}
];

export default new DeviceGenerator(LINUX_DEVICES, TYPES, OS_VERSIONS, "Ubuntu 22.04");
