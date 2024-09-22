import React, { useEffect, useState } from "react";
// We will keep some CSS for animations

const FallingStars = () => {
  // Function to create stars
  const createStar = () => {
    let star = document.createElement("div");
    star.setAttribute("class", "star");

    // Random position and animation settings
    star.style.left = Math.random() * window.innerWidth + "px";
    let size = Math.random() * 12;
    star.style.fontSize = 12 + size + "px";
    let duration = Math.random() * 3;
    star.style.animationDuration = 2 + duration + "s";

    document.body.appendChild(star);

    // Remove the star after its animation completes
    setTimeout(() => {
      document.body.removeChild(star);
    }, 5000);
  };

  const [showStars, setShowStars] = useState(true);

  useEffect(() => {
    if (showStars) {
        // Start creating stars
        const intervalId = setInterval(() => {
          createStar();
        }, 1000);
  
        // Stop generating stars after 5 seconds
        setTimeout(() => {
          setShowStars(false);
          clearInterval(intervalId);
        }, 5000);
  
        return () => clearInterval(intervalId);
      }
  }, [showStars]);

  return null; // No JSX needed as stars are created dynamically
};

export default FallingStars;
