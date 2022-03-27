import { getBrowser } from "../utils/utils";
import useIsMounted from "./useIsMounted";

export default function useBrowser() {
  const isMounted = useIsMounted();
  return isMounted ? getBrowser() : null;
}
