import { useEffect, useState } from 'react';

type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const breakpoints: Record<Breakpoint, number> = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export function useBreakpoint(breakpoint: Breakpoint, direction: 'up' | 'down' = 'up') {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = document.body.clientWidth;
      const breakpointValue = breakpoints[breakpoint];
      if (direction === 'up') {
        setMatches(width >= breakpointValue);
      } else {
        setMatches(width < breakpointValue);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint, direction]);

  return matches;
}
