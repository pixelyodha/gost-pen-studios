import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, state } = useLocation();

  useEffect(() => {
    // If we have a specific element to scroll to (like in ServicesPage), let that handle it.
    // Otherwise, scroll to top with an animation.
    if (!state?.scrollTo) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }, [pathname, state]);

  return null;
}
