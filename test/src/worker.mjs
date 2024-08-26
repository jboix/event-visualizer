if (!Array.prototype.last) {
  Array.prototype.last = function () {
    return this[this.length - 1];
  };
}

import axios from 'axios';
import SessionGenerator from "./events/session-generator.mjs";
import ErrorGenerator from "./events/error-generator.mjs";
import EventGenerator from "./events/event-generator.mjs";
import { parentPort } from 'node:worker_threads';

const generator = new SessionGenerator();
const errorGenerator = new ErrorGenerator();
const eventGenerator = new EventGenerator();

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function postEvent(event) {
  try {
    const startTime = Date.now(); // Start time in milliseconds
    const response = await axios.post('http://localhost:8080/api/events', event);
    const endTime = Date.now(); // End time in milliseconds
    const elapsedTime = endTime - startTime; // Calculate the elapsed time

    console.log(`Event posted: ${response.status}, Time taken: ${elapsedTime} ms`);
  } catch (error) {
    console.error(`Error posting event: ${error.message}`);
  }
}


async function generateLongSession() {
  const heartbeatDelay = 5;
  const session = generator.generateSession();
  const history = [];

  await postEvent(session);

  do {
    await sleep(heartbeatDelay * 1000);
    const r = Math.random();
    if (r < 0.995) {
      if (r > 0.01) {
        history.push(eventGenerator.generateHeartBeat(session, history, heartbeatDelay));
      } else if (r > 0.005) {
        history.push(eventGenerator.generateStall(session, history, heartbeatDelay));
      } else {
        history.push(eventGenerator.generateBuffer(session, history, heartbeatDelay));
      }
    } else if (r < 0.9999) {
      history.push(eventGenerator.generateStop(session, history, heartbeatDelay));
    } else {
      history.push(errorGenerator.generateError(session, history));
    }
    await postEvent(history.last());
  } while(!['ERROR', 'STOP'].includes(history.last().event_name))
}


async function generateShortSession() {
  const heartbeatDelay = 5;
  const session = generator.generateSession();
  const history = [];

  await postEvent(session);

  do {
    await sleep(heartbeatDelay * 1000);
    const r = Math.random();
    if (r < 0.9) {
      if (r > 0.10) {
        history.push(eventGenerator.generateHeartBeat(session, history, heartbeatDelay));
      } else if (r > 0.05) {
        history.push(eventGenerator.generateStall(session, history, heartbeatDelay));
      } else {
        history.push(eventGenerator.generateBuffer(session, history, heartbeatDelay));
      }
    } else if (r < 0.99) {
      history.push(eventGenerator.generateStop(session, history, heartbeatDelay));
    } else {
      history.push(errorGenerator.generateError(session, history));
    }
    await postEvent(history.last());
  } while(!['ERROR', 'STOP'].includes(history.last().event_name))
}

async function generateInitialErrorSession() {
  const session = generator.generateSession(true);
  await postEvent(session);
  await sleep(session.data.time_metrics.total);
  const error = errorGenerator.generateError(session, []);
  await postEvent(error);
}

async function main() {
  if (Math.random() < 0.2) {
    await generateLongSession();
  } else if (Math.random() < 0.95) {
    await generateShortSession();
  } else {
    await generateInitialErrorSession();
  }

}

while (true) {
  await main();
  parentPort.postMessage('Worker is alive');
}

