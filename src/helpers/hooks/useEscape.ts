import { useEffect } from 'react';

const useEscape = (callback: () => void): void => {
  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === 'Escape') callback();
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [callback]);
};

export default useEscape;
