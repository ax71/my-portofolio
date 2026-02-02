import { useSyncExternalStore } from "react";

function useIsMounted() {
  return useSyncExternalStore(
    (callback) => {
      window.addEventListener("resize", callback);
      return () => window.removeEventListener("resize", callback);
    },
    () => true,
    () => false,
  );
}

export default useIsMounted;
