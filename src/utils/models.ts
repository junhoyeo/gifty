export interface IGiftCard {
  name: string;
  barcode: string;
  dueDate: Date | null;
  order: string;
}

export const defaultGiftCard: IGiftCard = {
  name: '',
  barcode: '',
  dueDate: null,
  order: '',
};
