import useLocalStorage from './useLocalStorage';
import { IGiftCard } from './models';

export default function useProductList(): readonly [IGiftCard[], ((value: IGiftCard[]) => void)] {
  const [productList, setProductList] =
    useLocalStorage<IGiftCard[]>('products', []);
  const parsedProductList =
    productList.map(({ dueDate, ...product }: IGiftCard) => ({
      ...product,
      dueDate: new Date(dueDate),
    }));
  return [parsedProductList, setProductList];
}
