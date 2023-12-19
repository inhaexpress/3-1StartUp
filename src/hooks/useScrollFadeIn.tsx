import { useRef, useEffect, useCallback, CSSProperties } from 'react';

type ScrollDirection = 'up' | 'down' | 'left' | 'right';

interface ScrollFadeInOptions {
    direction?: ScrollDirection;
    duration?: number;
    delay?: number;
}

const useScrollFadeIn = ({
                             direction = 'up',
                             duration = 1,
                             delay = 0,
                         }: ScrollFadeInOptions = {}): {
    ref: React.RefObject<HTMLDivElement>;
    style: CSSProperties;
} => {
    const dom = useRef<HTMLDivElement>(null);

    const handleDirection = useCallback((name: ScrollDirection): string => {
        switch (name) {
            case 'up':
                return 'translate3d(0, 50%, 0)';
            case 'down':
                return 'translate3d(0, -50%, 0)';
            case 'left':
                return 'translate3d(50%, 0, 0)';
            case 'right':
                return 'translate3d(-50%, 0, 0)';
            default:
                return '';
        }
    }, []);

    const handleScroll = useCallback(
        ([entry]: IntersectionObserverEntry[]): void => {
            const { current } = dom;
            if (entry.isIntersecting && current) {
                current.style.transitionProperty = 'all';
                current.style.transitionDuration = `${duration}s`;
                current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
                current.style.transitionDelay = `${delay}s`;
                current.style.opacity = '1';
                current.style.transform = 'translate3d(0, 0, 0)';
            }
        },
        [delay, duration]
    );

    useEffect(() => {
        let observer: IntersectionObserver | null = null;
        const { current } = dom;

        if (current) {
            observer = new IntersectionObserver(handleScroll, { threshold: 0.7 });
            observer.observe(current);
        }

        return () => {
            if (observer) {
                observer.disconnect();
            }
        };
    }, [handleScroll]);

    return {
        ref: dom,
        style: {
            opacity: 0,
            transform: handleDirection(direction),
        },
    };
};

export default useScrollFadeIn;
