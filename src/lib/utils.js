export function formatSeconds(secondsInt) {
  let min = Math.floor(secondsInt / 60);
  let sec = secondsInt % 60;

  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
  return `${min}:${sec}`;
}
