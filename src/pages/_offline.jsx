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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOnline]);
  return (
    <div className="p-4 min-h-screen w-full max-w-screen-sm mx-auto items-center justify-center flex">
      {isOnline == true ? (
        <div className="flex flex-col items-center">
          <p className="text-center block">Your connection is back, redirecting to homepage in 3 seconds</p>
          <p>
            <Link href="/" className="underline">
              Click Here
            </Link>
            <span> If you are not redirected</span>
          </p>
        </div>
      ) : (
        <p>You are in offline mode</p>
      )}
    </div>
  );
};
export default Offline;
