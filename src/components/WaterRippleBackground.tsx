import { useEffect, useRef } from 'react';

const WaterRippleBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Simple test - just draw a colored rectangle
        ctx.fillStyle = 'rgba(59, 130, 246, 0.2)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw a test circle
        ctx.beginPath();
        ctx.arc(100, 100, 50, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.fill();

        console.log('WaterRippleBackground rendered successfully');
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: -1,
                pointerEvents: 'none',
                background: 'linear-gradient(135deg, #3b82f6 0%, #9333ea 50%, #ec4899 100%)'
            }}
        />
    );
};

export default WaterRippleBackground;
