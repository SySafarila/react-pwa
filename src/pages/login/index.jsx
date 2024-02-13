import { useForm } from "react-hook-form";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userState } from "@/utilities/recoil";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Login() {
  const [user, setUser] = useRecoilState(userState);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, []);

  const sendForm = async (data) => {
    const { username, password } = data;
    try {
      await axios.post("/api/login", {
        username: username,
        password: password,
      });
      setUser({ username, password });
      router.push("/");
    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <div className="p-4">
      <form
        onSubmit={handleSubmit(sendForm)}
        className="flex flex-col gap-2 lg:flex-row"
      >
        <input
          type="text"
          {...register("username")}
          placeholder="username"
          className="border"
        />
        <input
          type="text"
          {...register("password")}
          placeholder="password"
          className="border"
        />
        <button type="submit" className="border">
          Login
        </button>
      </form>
    </div>
  );
}
