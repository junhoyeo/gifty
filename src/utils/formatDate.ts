export function formatDateToKorean(date: Date) {
  const padNumber = (value: number) => String(value).padStart(2, '0');

  const year = date.getFullYear();
  const month = (date.getMonth() + 1);
  const day = date.getDate();

  return `${year}년 ${padNumber(month)}월 ${padNumber(day)}일`;
}
