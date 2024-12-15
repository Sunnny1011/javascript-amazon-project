import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

export const deliveryOption = [
  {
    deliveryOptionId: 1,
    deliveryDays: 7,
    priceCents: 0,
  },
  { deliveryOptionId: 2, deliveryDays: 3, priceCents: 499 },
  { deliveryOptionId: 3, deliveryDays: 1, priceCents: 999 },
];

export function calculateDeliveryDate(optionItem) {
  const time = dayjs();
  const deliveryTime = time.add(optionItem.deliveryDays, "days");
  const deliveryTimeString = deliveryTime.format("dddd, MMMM D");
  return deliveryTimeString;
}

function isWeekend(date) {
  let testDate = dayjs(date).format("dddd");
  console.log(testDate);
  if (testDate === "Saturday" || testDate === "Sunday") {
    return true;
  } else return false;
}
