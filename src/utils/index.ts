export const ALLOWED_MOVES_LIST = [
  "R",
  "R'",
  "L",
  "L'",
  "U",
  "U'",
  "F",
  "F'",
  "D",
  "D'",
  "B",
  "B'",
  "R2",
  "L2",
  "U2",
  "F2",
  "D2",
  "B2",
];

export function numberToStopwatch(time: number) {
  let minute = "";
  let second = "";
  let milisecond = "";

  if (Math.floor((time / 60000) % 60) >= 1) {
    minute = ("" + Math.floor((time / 60000) % 60)).slice(-2);
    second = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
  } else {
    second = ("" + Math.floor((time / 1000) % 60)).slice(-2);
  }

  milisecond = ("0" + ((time / 10) % 100)).slice(-2);

  return `${minute ? minute + ":" : ""}${second}.${milisecond}`;
}

export function millisToTime(time: number): string {
  const date = new Date(Math.round(time));
  const formatMillis = String(date.getMilliseconds()).slice(0, 2);
  const formatSeconds = String(date.getSeconds()).padStart(2, "0");

  if (date.getMinutes() === 0) {
    return `${date.getSeconds()}.${formatMillis}`;
  }

  return `${date.getMinutes()}:${formatSeconds}.${formatMillis}`;
}
