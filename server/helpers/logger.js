/* eslint-disable no-console */

function getDate() {
  const today = new Date();
  return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
}

function error(message) {
  console.error(`[${getDate()}] ERROR: ${message}`);
}

function info(message) {
  console.info(`[${getDate()}] INFO: ${message}`);
}

function warn(message) {
  console.warn(`[${getDate()}] WARN: ${message}`);
}

module.exports = {
  error,
  info,
  warn,
};
