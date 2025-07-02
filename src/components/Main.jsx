import ComputerView from "./ComputerView";
import MobileView from "./MobileView";
import { useState, useEffect } from "react";

function useIsMobile(maxWidth = 1024) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < maxWidth);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < maxWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [maxWidth]);

  return isMobile;
}

function Main() {
  const isMobile = useIsMobile();
  return <>{isMobile ? <MobileView /> : <ComputerView />}</>;
}

export default Main;
