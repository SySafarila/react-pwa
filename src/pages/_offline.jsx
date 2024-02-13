import useOnline from "@/hooks/useOnline";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";

const Offline = () => {
  const isOnline = useOnline();
  // const router = useRouter();
  // useEffect(() => {
  //   // if (router.isReady) {
  //   if (isOnline == true) {
  //     // router.push("/");
  //     alert("online");
  //   }
  //   // }
  // }, [isOnline]);
  return (
    <div>
      <p>offline</p>
      {isOnline == true ? (
        <Link href="/">Click here if you already online</Link>
      ) : null}
    </div>
  );
};
export default Offline;
