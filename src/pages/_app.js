import useOnline from "@/hooks/useOnline";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isOnline = useOnline();
  useEffect(() => {
    console.log(router);
    if (isOnline == false && router.route != "/_offline") {
      // if (router.route != "/login") {
      router.push("/_offline");
      // }
    }
  }, [isOnline, router]);
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
