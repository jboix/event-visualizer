import MediaGenerator from "../media/media.mjs";
import random from "../random/random.mjs";

export default class EventGenerator {
  generateHeartBeat(session, history, delta) {
    const duration = MediaGenerator.find(session.data.media.id).duration;
    const data = Object.assign({
      buffer_duration: 0,
      stall: {
        count: 0,
        duration: 0
      },
      playback_duration: 0,
      player_position: 0
    }, history.last()?.data || {});
    data.player_position = Math.min(duration, data.player_position + delta);
    data.playback_duration = data.playback_duration + delta;

    const media = MediaGenerator.find(session.data.media.id);
    data.bitrate = this.bitrate(media, session, history);
    data.bandwidth = Math.floor(random.normal(data.bitrate + 200, data.bitrate + 5000, 5));

    return {
      session_id: session.session_id,
      event_name: data.player_position >= duration ? 'STOP' : 'HEARTBEAT',
      timestamp: Date.now(),
      version: 1,
      data: data
    }
  }

  generateBuffer(session, history, delta) {
    const event = this.generateHeartBeat(session, history, delta);
    const media = MediaGenerator.find(session.data.media.id);

    event.event_name = 'BUFFER';
    event.data.bitrate = this.bitrate(media, session, history);
    event.data.bandwidth = Math.floor(random.normal(event.data.bitrate, event.data.bitrate + 200, 5));
    event.data.buffer_duration += Math.floor(random.normal(1, delta, 2.5));

    return event;
  }

  generateStall(session, history, delta) {
    const event = this.generateHeartBeat(session, history, delta);
    event.event_name = 'STALL';
    event.data.stall.count += 1;
    event.data.stall.duration += Math.floor(random.normal(1, delta, 2.5));

    return event;
  }

  generateDiscontinuity(session, history, delta) {
    const event = this.generateHeartBeat(session, history, delta);
    event.event_name = 'DISCONTINUITY';
    return event;
  }


  generateStop(session, history, delta) {
    const event = this.generateHeartBeat(session, history, delta);
    event.event_name = 'STOP';
    return event;
  }

  bitrate(media, session, history) {
    if (history.last()?.event_name === 'BUFFER')
      return media.bitrates.low;

    const lastBitrate = history.last()?.bitrate;

    if (!lastBitrate)
      return random.normalElement(Object.values(media.bitrates), 1);

    const toMediumChance = session.data.device.type === 'Phone' ? 0.1 : 0.3;
    if (lastBitrate === media.bitrates.low && Math.random() < toMediumChance)
      return media.bitrates.medium;

    const toHighChance = session.data.device.type === 'Phone' ? 0.05 : 0.1;
    if (media.bitrates.high && lastBitrate === media.bitrates.medium && Math.random() < toHighChance)
      return media.bitrates.high;

    return lastBitrate;
  }
}
