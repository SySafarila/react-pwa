import { userState } from "@/utilities/recoil";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";

export default function Home() {
  const user = useRecoilValue(userState);
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, []);
  return (
    <div className="p-4">
      {user ? (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, numquam
          vitae officia fugiat molestias inventore quasi rerum corporis
          recusandae? Quam laboriosam est eligendi quae eaque ipsa pariatur
          voluptatibus vero eos.
        </p>
      ) : null}
    </div>
  );
}
