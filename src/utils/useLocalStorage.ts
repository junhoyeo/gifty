import { useState } from 'react';
import { useSafeWindow } from 'use-safe-window';

export default function useLocalStorage(key, initialValue) {
  const localStorage = useSafeWindow(window => window.localStorage);

  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage?.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = value => {
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
