import dayjs from "dayjs";
export function convertTimeToDate(timeInMs) {
  return dayjs(timeInMs).format('dddd, MMMM D');
}