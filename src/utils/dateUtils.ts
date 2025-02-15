export function formatDate(date: Date) {
  return date.toLocaleDateString("cs-CZ", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export function calculateDaysDifference(
  orderDate: Date,
  createdDate: Date
): number {
  return Math.ceil(
    (createdDate.getTime() - orderDate.getTime()) / (1000 * 3600 * 24)
  );
}
