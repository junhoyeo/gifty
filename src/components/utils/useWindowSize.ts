import { useEffect, useState } from 'react';
import { useSafeWindow } from 'use-safe-window';

const useWindowSize = () => {
  const [width, height] = useSafeWindow(
    window => [
      window.innerWidth,
      window.innerHeight,
    ],
    [800, 450]
  );

  const [state, setState] = useState<{ width: number; height: number }>({
    width,
    height,
  });

  useEffect(() => {
    const handler = () => {
      setState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return state;
};

export default useWindowSize;
