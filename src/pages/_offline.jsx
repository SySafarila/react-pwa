import useOnline from "@/hooks/useOnline";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";

const Offline = () => {
  const isOnline = useOnline();
  const router = useRouter();
  useEffect(() => {
    if (isOnline == true) {
      setTimeout(() => {
        router.push("/");
      }, 3000);
    }
  }, [isOnline]);
  return (
    <div>
      <p>You are in offline mode</p>
      {isOnline == true ? (
        <>
          <p>Welcome back, redirecting in 3 seconds</p>
          <p>
            <Link href="/">Click Here</Link>
            <span>If you are not redirected</span>
          </p>
        </>
      ) : null}
    </div>
  );
};
export default Offline;
