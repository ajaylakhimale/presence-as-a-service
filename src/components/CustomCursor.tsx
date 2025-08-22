import { useEffect, useRef, useState } from 'react';

interface Sparkle {
    id: number;
    x: number;
    y: number;
    velocityX: number;
    velocityY: number;
    life: number;
    maxLife: number;
    size: number;
}

const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const sparkleContainerRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);
    const [sparkles, setSparkles] = useState<Sparkle[]>([]);
    const [isMoving, setIsMoving] = useState(false);
    const sparkleIdRef = useRef(0);
    const lastPositionRef = useRef({ x: 0, y: 0 });
    const velocityRef = useRef({ x: 0, y: 0 });
    const movementTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

        if (!isDesktop) {
            return () => {
                mediaQuery.removeEventListener('change', handleChange);
                hoverQuery.removeEventListener('change', handleChange);
            };
        }

        let mouseX = 0;
        let mouseY = 0;

        const createSparkle = (x: number, y: number, velocity: { x: number, y: number }) => {
            const speed = Math.sqrt(velocity.x * velocity.x + velocity.y * velocity.y);

            // Only create sparkles when moving fast enough
            if (speed < 2) return;

            const sparkle: Sparkle = {
                id: sparkleIdRef.current++,
                x: x + (Math.random() - 0.5) * 10,
                y: y + (Math.random() - 0.5) * 10,
                velocityX: velocity.x * 0.3 + (Math.random() - 0.5) * 4,
                velocityY: velocity.y * 0.3 + (Math.random() - 0.5) * 4,
                life: 1,
                maxLife: 1,
                size: Math.random() * 3 + 1
            };

            setSparkles(prev => [...prev, sparkle]);
        };

        const onMouseMove = (e: MouseEvent) => {
            const newX = e.clientX;
            const newY = e.clientY;

            // Calculate velocity
            const deltaX = newX - lastPositionRef.current.x;
            const deltaY = newY - lastPositionRef.current.y;
            velocityRef.current = { x: deltaX, y: deltaY };

            mouseX = newX;
            mouseY = newY;

            // Update cursor position
            if (cursorRef.current) {
                cursorRef.current.style.left = `${mouseX}px`;
                cursorRef.current.style.top = `${mouseY}px`;
                cursorRef.current.style.opacity = '1';
            }

            // Create sparkles based on movement
            const speed = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            if (speed > 3 && Math.random() < 0.7) {
                createSparkle(mouseX, mouseY, velocityRef.current);
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
            setIsMoving(speed > 1);

            // Clear movement timeout and set new one
            if (movementTimeoutRef.current) {
                clearTimeout(movementTimeoutRef.current);
            }
            movementTimeoutRef.current = setTimeout(() => {
                setIsMoving(false);
            }, 100);

            lastPositionRef.current = { x: newX, y: newY };
        };

        const onMouseLeave = () => {
            if (cursorRef.current) {
                cursorRef.current.style.opacity = '0';
            }
            setIsMoving(false);
        };

        const onMouseEnter = () => {
            if (cursorRef.current) {
                cursorRef.current.style.opacity = '1';
            }
        };

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
            if (movementTimeoutRef.current) {
                clearTimeout(movementTimeoutRef.current);
            }
        };
    }, [isDesktop]);

    // Animate sparkles
    useEffect(() => {
        const animate = () => {
            setSparkles(prev =>
                prev.map(sparkle => ({
                    ...sparkle,
                    x: sparkle.x + sparkle.velocityX,
                    y: sparkle.y + sparkle.velocityY,
                    velocityX: sparkle.velocityX * 0.98,
                    velocityY: sparkle.velocityY * 0.98 + 0.1, // gravity
                    life: sparkle.life - 0.02,
                    size: sparkle.size * 0.99
                })).filter(sparkle => sparkle.life > 0)
            );
        };

        const interval = setInterval(animate, 16); // ~60fps
        return () => clearInterval(interval);
    }, []);

    // Don't render cursor elements on mobile/tablet devices
    if (!isDesktop) {
        return null;
    }

    return (
        <>
            {/* Main Cursor Arrow */}
            <div
                ref={cursorRef}
                style={{
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    width: '0',
                    height: '0',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    opacity: '0',
                    transition: 'opacity 0.2s ease'
                }}
            >
                {/* Arrow SVG */}
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    style={{
                        transform: `translate(-2px, -2px) scale(${isHovering ? 1.2 : 1})`,
                        transition: 'transform 0.2s ease',
                        filter: isMoving ? 'drop-shadow(0 0 8px hsl(var(--primary)))' : 'none'
                    }}
                >
                    <path
                        d="M2 2 L18 10 L10 12 L8 18 L2 2 Z"
                        fill={isHovering ? 'hsl(var(--accent-brand))' : 'hsl(var(--primary))'}
                        stroke="hsl(var(--background))"
                        strokeWidth="1"
                        style={{
                            transition: 'fill 0.2s ease'
                        }}
                    />
                    {/* Inner glow when moving */}
                    {isMoving && (
                        <path
                            d="M2 2 L18 10 L10 12 L8 18 L2 2 Z"
                            fill="none"
                            stroke="hsl(var(--primary))"
                            strokeWidth="0.5"
                            style={{
                                filter: 'blur(1px)',
                                opacity: 0.8
                            }}
                        />
                    )}
                </svg>
            </div>

            {/* Sparkles Container */}
            <div
                ref={sparkleContainerRef}
                style={{
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    width: '100vw',
                    height: '100vh',
                    pointerEvents: 'none',
                    zIndex: 9998,
                    overflow: 'hidden'
                }}
            >
                {sparkles.map(sparkle => (
                    <div
                        key={sparkle.id}
                        style={{
                            position: 'absolute',
                            left: `${sparkle.x}px`,
                            top: `${sparkle.y}px`,
                            width: `${sparkle.size}px`,
                            height: `${sparkle.size}px`,
                            backgroundColor: 'hsl(var(--primary))',
                            borderRadius: '50%',
                            opacity: sparkle.life,
                            transform: 'translate(-50%, -50%)',
                            boxShadow: '0 0 6px hsl(var(--primary))',
                            animation: `sparkle-twinkle 0.5s ease-in-out infinite alternate`
                        }}
                    />
                ))}
            </div>
        </>
    );
};

export default CustomCursor;
