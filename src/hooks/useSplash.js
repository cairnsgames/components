import { useState, useEffect } from "react";

const useSplash = (delay = 2500) => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    console.log("Start Splash Timeout");
    setTimeout(() => {
      setShowSplash(false);
    }, delay);
  }, [delay]);

  return { showSplash };
};

export default useSplash;
