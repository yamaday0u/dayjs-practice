import dayjs from "dayjs";

// const momentToday = moment();
// console.log(momentToday.format("YYYY-MM-DD"));
// const momentTomorrow = momentToday.add(1, "day");
// console.log(momentTomorrow.format("YYYY-MM-DD"));
// console.log(momentToday.format("YYYY-MM-DD"));

const dayjsToday = dayjs();
console.log(dayjsToday.format("YYYY-MM-DD"));
const dayjsTomorrow = dayjsToday.add(1, "day");
console.log(dayjsTomorrow.format("YYYY-MM-DD"));
console.log(dayjsToday.format("YYYY-MM-DD"));


import utc from "dayjs/plugin/utc.js";
import timezone from "dayjs/plugin/timezone.js";
import moment from "moment";
dayjs.extend(utc);
dayjs.extend(timezone);

const todayTokyo = dayjs().tz("Asia/Tokyo").format("YYYY-MM-DD HH:mm:ss");
console.log(`Tokyo: ${todayTokyo}`);

const todayNewYork = dayjs().tz("America/New_York").format("YYYY-MM-DD HH:mm:ss");
console.log(`NewYork: ${todayNewYork}`);

// const yesterday = dayjs().subtract(1, "day").format("YYYY-MM-DD");
// console.log(`yesterday: ${yesterday}`);

// const tomorrow = dayjs().add(1, "day").format("YYYY-MM-DD");
// console.log(`tomorrow: ${tomorrow}`);

// const startOfMonth = dayjs().startOf("month").format("YYYY-MM-DD");
// console.log(`startOfMonth:  ${startOfMonth}`);

// const endOfMonth = dayjs().endOf("month").format("YYYY-MM-DD");
// console.log(`endOfMonth  ${endOfMonth}`);