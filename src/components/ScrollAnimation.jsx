import React, { useEffect, useState, useRef } from 'react';

const ScrollAnimation = () => {
  const canvasRef = useRef(null);
  const [frameImages, setFrameImages] = useState([]);
  const [totalFrames, setTotalFrames] = useState(0);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const animationFrameRef = useRef(null);

  // Video metadata (update these based on your actual video)
  const VIDEO_WIDTH = 1920;  // Replace with actual width
  const VIDEO_HEIGHT = 1080; // Replace with actual height
  const FRAME_COUNT = 150;   // Replace with actual frame count

  // Preload all frames
  useEffect(() => {
    const loadFrames = async () => {
      const images = [];
      let loadedCount = 0;

      // Create promises for all frame images
      const loadPromises = Array.from({ length: FRAME_COUNT }, (_, i) => {
        const frameNumber = String(i + 1).padStart(4, '0');
        const img = new Image();
        
        return new Promise((resolve) => {
          img.onload = () => {
            loadedCount++;
            setLoadProgress(Math.round((loadedCount / FRAME_COUNT) * 100));
            resolve();
          };
          img.onerror = () => {
            loadedCount++;
            setLoadProgress(Math.round((loadedCount / FRAME_COUNT) * 100));
            resolve(); // Continue even if one fails
          };
          img.src = `/frames/frame_${frameNumber}.webp`;
          images.push(img);
        });
      });

      try {
        await Promise.all(loadPromises);
        setFrameImages(images);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading frames:', error);
        setIsLoading(false);
      }
    };

    loadFrames();
  }, []);

  // Handle scroll and animate
  useEffect(() => {
    const handleScroll = () => {
      if (!canvasRef.current || frameImages.length === 0) return;

      // Calculate scroll progress (0 to 1)
      const scrollContainer = document.querySelector('.scroll-container');
      if (!scrollContainer) return;

      const containerHeight = scrollContainer.scrollHeight - window.innerHeight;
     const rect = scrollContainer.getBoundingClientRect();
const scrollProgress = Math.min(
  1,
  Math.max(0, -rect.top / (rect.height - window.innerHeight))
);
      const scrollProgress = Math.max(0, Math.min(1, scrollPosition / containerHeight));

      // Calculate current frame
      const targetFrame = Math.floor(scrollProgress * (FRAME_COUNT - 1));
      
      // Only update if frame actually changed
     if (targetFrame !== currentFrame) {
  setCurrentFrame(targetFrame);

  if (animationFrameRef.current) {
    cancelAnimationFrame(animationFrameRef.current);
  }

  animationFrameRef.current = requestAnimationFrame(() => {
    drawFrame(targetFrame); // 👈 PASAR EL FRAME
  });
}
    };

    const drawFrame = (frameIndex) => {
  const canvas = canvasRef.current;
  if (!canvas || !frameImages[frameIndex]) return;

  const ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(frameImages[frameIndex], 0, 0, canvas.width, canvas.height);
};

    // Handle resize
    const handleResize = () => {
      if (canvasRef.current) {
        // Update canvas size to maintain aspect ratio
        const containerWidth = window.innerWidth * 0.9; // 90% of viewport width
        const aspectRatio = VIDEO_WIDTH / VIDEO_HEIGHT;
        const canvasHeight = containerWidth / aspectRatio;
        
        canvasRef.current.width = containerWidth * window.devicePixelRatio;
        canvasRef.current.height = canvasHeight * window.devicePixelRatio;
        canvasRef.current.style.width = `${containerWidth}px`;
        canvasRef.current.style.height = `${canvasHeight}px`;
        
        // Scale context for retina displays
        const ctx = canvasRef.current.getContext('2d');
        if (ctx) {
          ctx.setTransform(1, 0, 0, 1, 0, 0); // reset
           ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        }
      }
    };

    // Initial setup and event listeners
    handleResize();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    // Draw initial frame
    drawFrame();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [frameImages, currentFrame, FRAME_COUNT]);

  if (isLoading) {
    return (
      <div className="scroll-container min-h-[600vh] flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h3 className="text-lg font-medium mb-4">Cargando animación...</h3>
          <div className="w-full max-w-xs bg-gray-200 rounded-full h-2.5 overflow-hidden">
            <div 
              className="bg-blue-600 h-2.5 rounded-full transition-all duration-300" 
              style={{ width: `${loadProgress}%` }}
            ></div>
          </div>
          <p className="mt-2 text-sm text-gray-500">{loadProgress}%</p>
        </div>
      </div>
    );
  }

  return (
    <div className="scroll-container min-h-[600vh] relative">
      {/* Sticky canvas container */}
      <div className="sticky top-0 h-screen flex items-center justify-center pointer-events-none">
        <canvas 
          ref={canvasRef}
          className="left-1/2 -translate-x-1/2 top-0"
        />
      </div>
      
      {/* Scroll spacer */}
      <div className="h-[600vh]"></div>
    </div>
  );
};

export default ScrollAnimation;