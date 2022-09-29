import * as dayjs from "dayjs";

export const dateIsAfter = (date: Date, sentAt: Date) => {
  return dayjs(date).isAfter(sentAt);
}
