
'use client';

import { useState, useEffect } from 'react';
import SplashScreen from '@/components/landing/splash-screen';
import PromotionalDialog from '@/components/landing/promotional-dialog';

export default function SplashScreenProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showPromotion, setShowPromotion] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show splash screen for 2 seconds

    // Show promotion 1 second after splash screen disappears
    const promotionTimer = setTimeout(() => {
        // Check if the user has seen the promotion before in this session
        if (!sessionStorage.getItem('promotionShown')) {
            setShowPromotion(true);
            sessionStorage.setItem('promotionShown', 'true');
        }
    }, 3000);

    return () => {
        clearTimeout(loadingTimer);
        clearTimeout(promotionTimer);
    }
  }, []);

  if (!isClient) {
    return null; // Render nothing on the server
  }

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <>
        {children}
        <PromotionalDialog show={showPromotion} onHide={() => setShowPromotion(false)} />
    </>
  );
}
