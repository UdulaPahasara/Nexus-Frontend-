import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname, search, hash } = useLocation();

    useLayoutEffect(() => {
        // Force browser to stop restoring scroll position
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        const resetScroll = () => {
            // Reset main components
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            if (document.body) document.body.scrollTop = 0;
            if (document.documentElement) document.documentElement.scrollTop = 0;

            // Nuclear sweep: identify and reset ALL scrolled elements in the DOM
            // This catches internal overflow boxes in MUI and other components
            const allElements = document.getElementsByTagName('*');
            for (let i = 0; i < allElements.length; i++) {
                const el = allElements[i];
                if (el.scrollTop > 0) {
                    el.scrollTop = 0;
                }
            }
        };

        // Fire immediately
        resetScroll();

        // Some layouts take time to settle, especially with MUI and async content.
        // We run a persistent interval for 1 second to ensure it STAYS at the top.
        const intervalId = setInterval(resetScroll, 50);
        const timeoutId = setTimeout(() => clearInterval(intervalId), 1000);

        return () => {
            clearInterval(intervalId);
            clearTimeout(timeoutId);
        };
    }, [pathname, search, hash]);

    return null;
};

export default ScrollToTop;
