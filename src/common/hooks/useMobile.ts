import { useState, useEffect } from 'react';

interface MobileHook {
  isMobile: boolean;
}

const useMobile = (): MobileHook => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobileNow = window.innerWidth <= 600; 
      setIsMobile(isMobileNow);
    };
   
    handleResize();
    window.addEventListener('resize', handleResize);

   
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  return { isMobile };
};

export default useMobile;