import android from '../platform/android.mjs';
import apple from "../platform/apple.mjs";
import web from "../platform/web.mjs";
import random from "../random/random.mjs";
import {faker} from "@faker-js/faker";

const TYPE_LOAD_SKEW = {
  "PHONE": 2,
  "TABLET": 2.2,
  "TV": 2.3
};

export default class SessionGenerator {
  constructor() {
    this.platforms = [
      {value: android.create(), weight: 10},
      {value: apple.create(), weight: 30},
      {value: web.create(), weight: 60}
    ];
  }

  generateSession(isError = false) {
    const data = faker.helpers.weightedArrayElement(this.platforms).generate();
    data.time_metrics = this.timeMetrics(data.device.type, isError);

    return {
      session_id: faker.string.uuid(),
      event_name: "START",
      timestamp: Date.now(),
      data: data
    }
  }

  timeMetrics(type, isError = false) {
    const skew = TYPE_LOAD_SKEW[type] ?? 3;

    let timeMetrics = {
      media_source: !isError ? random.normal(600, 10000, skew) : 0,
      asset: random.normal(200, 5000, skew),
      token: random.normal(10, 100),
      drm: !isError ? random.normal(100, 1000, skew) : 0
    };

    const delta = random.normal(1, 100, skew);

    timeMetrics.total =
      Object
        .values(timeMetrics)
        .reduce((total, value) => total + value)
      + delta;

    return timeMetrics;
  }
}
