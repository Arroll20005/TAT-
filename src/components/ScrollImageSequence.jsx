import React, { useEffect, useState, useRef } from "react";

const ScrollImageSequence = ({
  imageCount = 97,
  imagePrefix = "frame_",
  imageExtension = "webp",
  startIndex = 1,
  heightInVh = 600,
}) => {
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const animationFrameRef = useRef(null);

  // Preload all images
  useEffect(() => {
    const loadImages = async () => {
      const imageObjects = [];
      let loadedCount = 0;

      // Create promises for all images
      const loadPromises = Array.from({ length: imageCount }, (_, i) => {
        const index = startIndex + i;
        const paddedIndex = String(index).padStart(4, "0");
        const img = new Image();

        return new Promise((resolve) => {
          img.onload = () => {
            loadedCount++;
            setLoadProgress(Math.round((loadedCount / imageCount) * 100));
            resolve();
          };
          img.onerror = () => {
            console.warn(
              `Failed to load image: ${imagePrefix}${paddedIndex}.${imageExtension}`,
            );
            loadedCount++;
            setLoadProgress(Math.round((loadedCount / imageCount) * 100));
            resolve(); // Continue even if one fails
          };
          img.src = `/images/video/frames/${imagePrefix}${paddedIndex}.${imageExtension}`;
          //img.src = `/${imagePrefix}${paddedIndex}.${imageExtension}`;
          imageObjects.push(img);
        });
      });

      try {
        await Promise.all(loadPromises);
        setImages(imageObjects);
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading images:", error);
        setIsLoading(false);
      }
    };

    loadImages();
  }, [imageCount, imagePrefix, imageExtension, startIndex]);

  // Handle scroll and animate
  useEffect(() => {
    const handleScroll = () => {
      if (!canvasRef.current || images.length === 0) return;

      // Calculate scroll progress (0 to 1)
      const scrollContainer = document.querySelector(".scroll-container");
      if (!scrollContainer) return;

      const rect = scrollContainer.getBoundingClientRect();

      const scrollProgress = Math.min(
        1,
        Math.max(0, -rect.top / (rect.height - window.innerHeight)),
      );

      // Calculate current image index
      const targetIndex = Math.floor(scrollProgress * (imageCount - 1));

      // Only update if index actually changed
      if (targetIndex !== currentIndex) {
        setCurrentIndex(targetIndex);

        // Draw image using requestAnimationFrame for smooth rendering
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        animationFrameRef.current = requestAnimationFrame(() => {
          drawImage(targetIndex);
        });
      }
    };
    const drawImage = (index) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const img = images[index] || images[images.length - 1];
      if (!img) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      //---ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      const imgRatio = img.width / img.height;
      const canvasRatio = canvas.width / canvas.height;

      let drawWidth, drawHeight, offsetX, offsetY;

      if (imgRatio > canvasRatio) {
        drawHeight = canvas.height;
        drawWidth = img.width * (canvas.height / img.height);
        offsetX = (canvas.width - drawWidth) / 2;
        offsetY = 0;
      } else {
        drawWidth = canvas.width;
        drawHeight = img.height * (canvas.width / img.width);
        offsetX = 0;
        offsetY = (canvas.height - drawHeight) / 2;
      }

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      console.log("frame:", index);
    };
    // Handle resize
    const handleResize = () => {
      if (canvasRef.current) {
        // Update canvas size to maintain aspect ratio (assuming 16:9, adjust as needed)
        //const containerWidth = Math.min(window.innerWidth * 0.9, 800); // Max 800px width
        //const aspectRatio = 16 / 9; // Change this to match your image aspect ratio
        //const canvasHeight = containerWidth / aspectRatio;
        const containerWidth = window.innerWidth;
        const containerHeight = window.innerHeight;

        //canvasRef.current.width = containerWidth * window.devicePixelRatio;
        // canvasRef.current.height = canvasHeight * window.devicePixelRatio;

        //canvasRef.current.style.width = `${containerWidth}px`;
        // canvasRef.current.style.height = `${canvasHeight}px`;
        canvasRef.current.width = containerWidth * window.devicePixelRatio;
        canvasRef.current.height = containerHeight * window.devicePixelRatio;

        canvasRef.current.style.width = `${containerWidth}px`;
        canvasRef.current.style.height = `${containerHeight}px`;

        // Scale context for retina displays
        const ctx = canvasRef.current.getContext("2d");
        if (ctx) {
          ctx.setTransform(1, 0, 0, 1, 0, 0);
          ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        }
      }
    };

    // Initial setup and event listeners
    handleResize();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    // Draw initial frame
    if (images.length > 0) {
      drawImage(0);
    }

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [images, imageCount]);

  if (isLoading) {
    return (
      <div
        style={{ minHeight: `${heightInVh}vh` }}
        className="scroll-container  flex items-center justify-center bg-gray-50"
      >
        <div className="text-center">
          <h3 className="text-lg font-medium mb-4">Cargando secuencia...</h3>
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
    <div
      style={{ minHeight: `${heightInVh}vh` }}
      className="scroll-container  relative"
    >
      {/* Sticky canvas container */}
      <div className="sticky top-0 h-screen flex items-center justify-center pointer-events-none">
        <canvas ref={canvasRef} />
      </div>

      {/* Scroll spacer */}
      <div style={{ height: `${heightInVh}vh` }}></div>
    </div>
  );
};

export default ScrollImageSequence;
