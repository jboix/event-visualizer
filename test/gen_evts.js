const axios = require('axios');
const {v4: uuidv4} = require('uuid');

// Function to generate a random integer between min and max (inclusive)
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Function to generate a random string
const getRandomString = (length) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(getRandomInt(0, characters.length - 1));
  }
  return result;
};

// Define devices with consistent data
const devices = {
  web: [
    {id: 'MAC123456789', model: 'Generic PC', type: 'PC', os: 'windows', browser: 'chrome', width: 1920, height: 1080},
    {id: 'ISBN223344556', model: 'Generic PC', type: 'PC', os: 'macos', browser: 'safari', width: 2560, height: 1600},
    {
      id: 'MAC567890123',
      model: 'Generic Laptop',
      type: 'Laptop',
      os: 'windows',
      browser: 'firefox',
      width: 1366,
      height: 768
    },
    {
      id: 'ISBN334455667',
      model: 'Generic Laptop',
      type: 'Laptop',
      os: 'linux',
      browser: 'chrome',
      width: 1920,
      height: 1080
    }
  ],
  apple: [
    {id: 'ISBN987654321', model: 'iPhone15,7', type: 'Phone', os: 'ios', browser: 'safari', width: 1170, height: 2532},
    {id: 'MAC223344556', model: 'iPadPro12,9', type: 'Tablet', os: 'ios', browser: 'safari', width: 2048, height: 2732},
    {id: 'ISBN998877665', model: 'iPhone13,4', type: 'Phone', os: 'ios', browser: 'safari', width: 1125, height: 2436},
    {id: 'MAC667788990', model: 'Apple TV', type: 'TV', os: 'tvos', browser: 'safari', width: 3840, height: 2160}
  ],
  android: [
    {
      id: 'MAC123456789',
      model: 'Samsung Galaxy S24',
      type: 'Phone',
      os: 'android',
      browser: 'chrome',
      width: 1080,
      height: 2400
    },
    {
      id: 'ISBN1122334455',
      model: 'Samsung Galaxy Tab S8',
      type: 'Tablet',
      os: 'android',
      browser: 'firefox',
      width: 1600,
      height: 2560
    },
    {
      id: 'MAC345678901',
      model: 'Google Pixel 6',
      type: 'Phone',
      os: 'android',
      browser: 'chrome',
      width: 1080,
      height: 2340
    },
    {
      id: 'ISBN5544332211',
      model: 'Samsung Smart TV',
      type: 'TV',
      os: 'android',
      browser: 'firefox',
      width: 3840,
      height: 2160
    }
  ]
};

const playerNames = ['pillarbox', 'letterbox'];
const origins = ['ch.srgssr.srf-meteo', 'www.rts.ch/info/article/1234', 'www.rts.ch/info/article/5678'];
const bus = ['srf', 'rts', 'rsi', 'swi', 'rtr'];
const eventNames = ['BUFFER', 'HEARTBEAT', 'STOP', 'STALL', 'DISCONTINUITY'];

// Function to create a random QoS payload event
const createSessionEvent = (platform, session_id, timestamp) => {
  const device = devices[platform][getRandomInt(0, devices[platform].length - 1)];
  const playerName = playerNames[getRandomInt(0, playerNames.length - 1)];
  const origin = origins[getRandomInt(0, origins.length - 1)];
  const bu = bus[getRandomInt(0, bus.length - 1)];

  const timeMetrics = {
    media_source: getRandomInt(1000, 1500),
    asset: getRandomInt(1500, 2000),
    drm: getRandomInt(100, 250)
  };
  timeMetrics.total = timeMetrics.media_source + timeMetrics.asset + timeMetrics.drm + getRandomInt(50, 100);

  return {
    session_id: session_id,
    event_name: "SESSION",
    timestamp: timestamp,
    data: {
      device_id: device.id,
      device_model: device.model,
      device_type: device.type,
      screen_width: device.width,
      screen_height: device.height,
      os_name: device.os,
      os_version: `${getRandomInt(10, 16)}.${getRandomInt(0, 4)}`,
      browser: device.browser,
      browser_version: `${getRandomInt(80, 91)}.${getRandomInt(0, 9)}`,
      player_name: playerName,
      player_platform: platform,
      player_version: "1.0.0",
      origin: origin,
      media_id: `urn:${bu}:video:${getRandomInt(1000, 9999)}`,
      media_source: `https://il.srgssr.ch/composition/?urn=urn:rts:video:${getRandomInt(1000, 9999)}`,
      time_metrics: timeMetrics
    }
  };
};

// Function to create a random ERROR event
const createErrorEvent = (session_id, timestamp) => {
  const severityLevels = ['WARNING', 'FATAL'];
  const errorNames = ['ERR_001', 'ERR_002', 'ERR_003'];
  const errorMessages = ['Not found', 'Timeout', 'Unknown error'];

  return {
    session_id: session_id,
    event_name: "ERROR",
    timestamp: timestamp,
    data: {
      severity: severityLevels[getRandomInt(0, severityLevels.length - 1)],
      name: errorNames[getRandomInt(0, errorNames.length - 1)],
      message: errorMessages[getRandomInt(0, errorMessages.length - 1)],
      player_position: getRandomInt(0, 30000),
      log: getRandomString(100)
    }
  };
};

const createGenericEvent = (session_id, timestamp) => {
  const urls = [
    'https://www.rts-vod.akamai.com/content/segm10.ts',
    'https://www.rts-vod.akamai.com/content/segm20.ts',
    'https://www.rts-vod.akamai.com/content/segm30.ts'
  ];

  // Determine event type based on realistic distribution
  let event_name;
  const rand = Math.random();
  if (rand < 0.5) {
    event_name = 'HEARTBEAT'; // 50% chance
  } else if (rand < 0.7) {
    event_name = 'BUFFER'; // 20% chance
  } else if (rand < 0.85) {
    event_name = 'STALL'; // 15% chance
  } else if (rand < 0.95) {
    event_name = 'DISCONTINUITY'; // 10% chance
  } else {
    event_name = 'STOP'; // 5% chance
  }

  return {
    session_id: session_id,
    event_name: event_name,
    timestamp: timestamp,
    data: {
      url: urls[getRandomInt(0, urls.length - 1)],
      bitrate: getRandomInt(500000, 5000000),
      bandwidth: getRandomInt(1000000, 5000000),
      buffer_duration: getRandomInt(50000, 300000),
      stall_count: getRandomInt(0, 5),
      stall_duration: getRandomInt(500, 3000),
      playback_duration: getRandomInt(10000, 60000),
      player_position: getRandomInt(0, 60000)
    }
  };
};

// Function to post an event to the server
const postEvent = async (event) => {
  try {
    const response = await axios.post('http://localhost:8080/api/events', event);
    console.log(`Event posted: ${response.status}`);
  } catch (error) {
    console.error(`Error posting event: ${error.message}`);
  }
};

// Main function to generate and post events
const main = async (numSessions) => {
  const now = Date.now();
  const oneHourAgo = now - (30 * 60 * 1000);
  for (let i = 0; i < numSessions; i++) {
    const session_id = uuidv4();
    const platform = ["web", "apple", "android"][getRandomInt(0, 2)];
    let currentTime = getRandomInt(oneHourAgo, now);

    // Create and post SESSION event
    const sessionEvent = createSessionEvent(platform, session_id, currentTime);
    await postEvent(sessionEvent);

    // Create and post a sequence of generic events
    const numGenericEvents = getRandomInt(5, 15);
    for (let j = 0; j < numGenericEvents; j++) {
      currentTime += getRandomInt(5000, 15000); // Add 5 to 15 seconds
      const genericEvent = createGenericEvent(session_id, currentTime);
      await postEvent(genericEvent);
    }

    // Toss a coin to decide the final event
    currentTime += getRandomInt(5000, 15000);
    if (Math.random() < 0.05) {
      const errorEvent = createErrorEvent(session_id, currentTime);
      await postEvent(errorEvent);
    } else {
      const endEvent = createGenericEvent(session_id, currentTime);
      endEvent.event_name = 'END';
      await postEvent(endEvent);
    }
  }
  setTimeout(() => main(numSessions), 100000); // 100 seconds delay
};

// Generate and post 1000 sessions
main(10000);
