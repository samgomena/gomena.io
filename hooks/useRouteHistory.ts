import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useRouteHistory = () => {
  const [previousUrl, setPreviousUrl] = useState("");
  const router = useRouter();

  const handleBeforeHistoryChange = (url: string) => {
    const [nextUrl] = url.split("?") ?? [];
    if (nextUrl !== previousUrl) {
      setPreviousUrl(router.asPath);
    }
  };

  useEffect(() => {
    router.events.on("beforeHistoryChange", handleBeforeHistoryChange);
    return () =>
      router.events.off("beforeHistoryChange", handleBeforeHistoryChange);
  }, []);

  return previousUrl;
};

export default useRouteHistory;
