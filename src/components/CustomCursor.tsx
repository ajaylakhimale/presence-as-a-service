import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
    const cursorDotRef = useRef<HTMLDivElement>(null);
    const cursorOutlineRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        // Check if device is desktop (screens larger than 1024px and has a mouse)
        const checkIsDesktop = () => {
            const hasHover = window.matchMedia('(hover: hover)').matches;
            const isLargeScreen = window.matchMedia('(min-width: 1024px)').matches;
            setIsDesktop(hasHover && isLargeScreen);
        };

        // Initial check
        checkIsDesktop();

        // Listen for screen size changes
        const mediaQuery = window.matchMedia('(min-width: 1024px)');
        const hoverQuery = window.matchMedia('(hover: hover)');

        const handleChange = () => checkIsDesktop();

        mediaQuery.addEventListener('change', handleChange);
        hoverQuery.addEventListener('change', handleChange);

        // Only initialize cursor if on desktop
        if (!isDesktop) {
            return () => {
                mediaQuery.removeEventListener('change', handleChange);
                hoverQuery.removeEventListener('change', handleChange);
            };
        }
        let mouseX = 0;
        let mouseY = 0;
        let outlineX = 0;
        let outlineY = 0;

        const onMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Update cursor dot position immediately
            if (cursorDotRef.current) {
                cursorDotRef.current.style.left = `${mouseX}px`;
                cursorDotRef.current.style.top = `${mouseY}px`;
                cursorDotRef.current.style.opacity = '1';
            }

            // Check if hovering over interactive elements
            const element = document.elementFromPoint(e.clientX, e.clientY);
            const isInteractive = element && (
                element.tagName === 'A' ||
                element.tagName === 'BUTTON' ||
                element.closest('a') ||
                element.closest('button') ||
                element.classList.contains('cursor-pointer') ||
                element.closest('.cursor-pointer') ||
                getComputedStyle(element).cursor === 'pointer'
            );

            setIsHovering(!!isInteractive);
        };

        const onMouseLeave = () => {
            if (cursorDotRef.current) {
                cursorDotRef.current.style.opacity = '0';
            }
            if (cursorOutlineRef.current) {
                cursorOutlineRef.current.style.opacity = '0';
            }
        };

        const onMouseEnter = () => {
            if (cursorDotRef.current) {
                cursorDotRef.current.style.opacity = '1';
            }
            if (cursorOutlineRef.current) {
                cursorOutlineRef.current.style.opacity = '1';
            }
        };

        // Animate the outline to follow with delay
        const animateOutline = () => {
            const dx = mouseX - outlineX;
            const dy = mouseY - outlineY;

            outlineX += dx * 0.1;
            outlineY += dy * 0.1;

            if (cursorOutlineRef.current) {
                cursorOutlineRef.current.style.left = `${outlineX}px`;
                cursorOutlineRef.current.style.top = `${outlineY}px`;
                cursorOutlineRef.current.style.opacity = '1';
            }

            requestAnimationFrame(animateOutline);
        };

        // Start animations
        animateOutline();

        // Add event listeners
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseleave', onMouseLeave);
        document.addEventListener('mouseenter', onMouseEnter);

        // Cleanup
        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseleave', onMouseLeave);
            document.removeEventListener('mouseenter', onMouseEnter);
            mediaQuery.removeEventListener('change', handleChange);
            hoverQuery.removeEventListener('change', handleChange);
        };
    }, [isDesktop]);

    // Don't render cursor elements on mobile/tablet devices
    if (!isDesktop) {
        return null;
    }

    return (
        <>
            <div
                id="cursor-dot"
                ref={cursorDotRef}
                style={{
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    width: isHovering ? '15px' : '10px',
                    height: isHovering ? '15px' : '10px',
                    backgroundColor: isHovering ? 'white' : 'rgb(220, 90, 90)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    transform: 'translate(-50%, -50%)',
                    opacity: '0',
                    transition: 'width 0.2s ease, height 0.2s ease, background-color 0.2s ease',
                    mixBlendMode: 'difference'
                }}
            />
            <div
                id="cursor-dot-outline"
                ref={cursorOutlineRef}
                style={{
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    width: isHovering ? '45px' : '30px',
                    height: isHovering ? '45px' : '30px',
                    backgroundColor: isHovering ? 'rgba(255, 255, 255, 0.2)' : 'rgba(220, 90, 90, 0.3)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9998,
                    transform: 'translate(-50%, -50%)',
                    opacity: '0',
                    transition: 'width 0.2s ease, height 0.2s ease, background-color 0.2s ease',
                    mixBlendMode: 'difference'
                }}
            />
        </>
    );
};

export default CustomCursor;
