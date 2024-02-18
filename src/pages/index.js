import { userState } from "@/utilities/recoil";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export default function Home() {
  const [user, setUser] = useRecoilState(userState);
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return (
    <div className="p-4">
      {user ? (
        <>
          <h1>
            Hello <b>{user.username ?? "-"}</b>
          </h1>
          <button className="border" onClick={() => setUser(null)}>
            Logout
          </button>
        </>
      ) : null}
    </div>
  );
}
