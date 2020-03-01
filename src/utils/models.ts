export interface IGiftCard {
  name: string;
  barcode: string;
  dueDate: Date | null;
  order: string;
  image?: string;
}

export const defaultGiftCard: IGiftCard = {
  name: '',
  barcode: '',
  dueDate: null,
  order: '',
};

const isValidDate = (date: Date) =>
  date instanceof Date && !isNaN(Number(date));

export const checkValidGiftCard = (giftCard: IGiftCard) => {
  const { name, barcode, dueDate, order } = giftCard;
  if (!isValidDate(dueDate)) {
    throw Error('올바른 날짜가 아닙니다.');
  }
  if (!name || !barcode || !order) {
    throw Error('모든 필드의 값을 확인해 주세요.');
  }
};
