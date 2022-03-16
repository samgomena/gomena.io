import { useEffect, useState } from "react";

export default function useIsMounted() {
  const [isMounted, setIsMounted] = useState(false);
  // Set isMounted to true on mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted;
}
