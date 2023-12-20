import { useEffect, useState } from 'react';

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState(0);
  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const breakpoints = {
    xs: windowSize < 600,
    sm: windowSize < 900, //Маленькие экраны (телефоны и маленькие планшеты)
    md: windowSize < 1200, //Средние экраны (планшеты)
    lg: windowSize < 1536, //Большие экраны (десктопы)
    xl: windowSize > 1536
  };

  return { windowSize, breakpoints };
}
