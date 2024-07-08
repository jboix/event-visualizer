import {faker} from "@faker-js/faker";
import MediaGenerator from "../media/media.mjs";

const ERRORS = [
  {
    value: {
      name: "IL_404",
      messages: {
        apple: "Resource not found.",
        android: "The content you're looking for is not available.",
        web: "The page you are looking for cannot be found."
      },
      initial: true
    },
    weight: 20
  },
  {
    value: {
      name: "IL_500",
      messages: {
        apple: "Internal server error.",
        android: "We're sorry, something went wrong. Please try again later.",
        web: "Internal server error. Please try again later."
      },
      initial: true
    },
    weight: 20
  },
  {
    value: {
      name: "AUDIO_DECODING_ERROR",
      messages: {
        apple: "Error decoding audio.",
        android: "Failed to decode audio stream.",
        web: "Audio format not supported."
      },
      initial: false
    },
    weight: 10
  },
  {
    value: {
      name: "VIDEO_PLAYBACK_ERROR",
      messages: {
        apple: "Error playing video.",
        android: "Video playback failed.",
        web: "Playback error: Video could not be played."
      },
      initial: false
    },
    weight: 10
  },
  {
    value: {
      name: "STREAM_FORMAT_ERROR",
      messages: {
        apple: "Stream format error.",
        android: "Unsupported stream format.",
        web: "Error: Invalid stream format detected."
      },
      initial: false
    },
    weight: 10
  },
  {
    value: {
      name: "GEO_BLOCKED_CONTENT",
      messages: {
        apple: "Content not available in your region.",
        android: "You are not authorized to access this content.",
        web: "Region blocked: This content is not available in your area."
      },
      initial: true
    },
    weight: 30
  }
];

export default class ErrorGenerator {
  constructor() {
  }

  generateError(session, history) {
    const lastPosition = history.last()?.data?.player_position ?? 0;
    const candidates = !lastPosition ?
      ERRORS.filter(error => error.value.initial) :
      ERRORS.filter(error => !error.value.initial);
    const error = faker.helpers.weightedArrayElement(candidates);
    const duration = MediaGenerator.find(session.data.media_id).duration;

    return {
      session_id: session.session_id,
      event_name: "ERROR",
      timestamp: Date.now(),
      data: {
        severity: 'FATAL',
        name: error.name,
        message: error.messages[session.data.player_platform],
        player_position: lastPosition,
        log: this.generateLog()
      }
    }
  }

  generateLog() {
    const logs = [];
    const nbrLines = faker.number.int({min: 1, max: 6});

    for (let i = 0; i < nbrLines; i++) {
      const severity = faker.helpers.arrayElement(['INFO', 'WARN', 'ERROR']);
      logs.push(`[${severity}] ${faker.word.words(faker.number.int({min: 3, max: 10}))}`);
    }

    return logs;
  }
}
