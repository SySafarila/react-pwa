import useOnline from "@/hooks/useOnline";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Offline = () => {
  const isOnline = useOnline();
  const router = useRouter();
  useEffect(() => {
    // if (router.isReady) {
    if (isOnline == true) {
      router.push("/");
    }
    // }
  }, [isOnline]);
  return (
    <div>
      <p>offline</p>
    </div>
  );
};
export default Offline;
