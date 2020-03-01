import { useState } from 'react';
import { useSafeWindow } from 'use-safe-window';

export function loadFromLocalStorage<T>(key: string, initialValue: T): T {
  const localStorage = typeof window !== 'undefined' ? window.localStorage : undefined;
  const item = localStorage?.getItem(key);
  return item ? JSON.parse(item) : initialValue;
};

export default function useLocalStorage<T>(key: string, initialValue: T): readonly [T, ((value: T) => void)] {
  const localStorage = useSafeWindow(window => window.localStorage);

  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      return loadFromLocalStorage<T>(key, initialValue);
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      localStorage?.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}
