import { useForm } from "react-hook-form";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userState } from "@/utilities/recoil";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import appLogo from "../../../public/vercel-logo.png";
import Link from "next/link";
import visibilityOn from "../../../public/icons/visibility-on.svg";
import visibilityOff from "../../../public/icons/visibility-off.svg";

export default function Login() {
  const [user, setUser] = useRecoilState(userState);
  const [isSend, setIsSend] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendForm = async (data) => {
    if (isSend == true) {
      return;
    }
    setIsSend(true);
    const { username, password } = data;
    try {
      await axios.post("/api/login", {
        username: username,
        password: password,
      });
      setUser({ username, password });
      router.push("/");
    } catch (error) {
      setIsSend(false);
      alert("Login failed");
    }
  };

  return (
    <div className="p-4 min-h-screen flex flex-col items-center justify-center gap-4 max-w-screen-sm mx-auto">
      <Image src={appLogo} alt="logo" className="w-[8rem]" />
      <div>
        <h1 className="uppercase w-full text-center font-bold text-3xl">
          React PWA
        </h1>
        <p className="w-full text-center">
          Masuk sistem atau{" "}
          <Link href="/register" className="font-bold hover:underline">
            Buat Akun
          </Link>
        </p>
      </div>
      <form
        onSubmit={handleSubmit(sendForm)}
        className="flex flex-col gap-2 lg:flex-row w-full"
      >
        <div className="flex flex-col relative gap-1">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            {...register("username", { required: true })}
            placeholder=""
            className="border p-2 rounded"
            id="username"
            required
          />
        </div>
        <div className="flex flex-col relative gap-1">
          <label htmlFor="password">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            {...register("password", { required: true, minLength: 8 })}
            placeholder=""
            className="border p-2 rounded"
            required
          />
          <small>Minimal 8 karakter</small>
          <button
            type="button"
            onClick={() => setShowPassword((current) => !current)}
            className="absolute right-2 top-[36px]"
          >
            {showPassword ? (
              <Image src={visibilityOff} alt="password off" />
            ) : (
              <Image src={visibilityOn} alt="password on" />
            )}
          </button>
        </div>
        <button
          type="submit"
          className="border p-2 bg-gray-800 hover:bg-gray-950 text-white rounded transition-colors"
        >
          {isSend ? "Loading..." : "Masuk"}
        </button>
        <div className="flex justify-center">
          <Link href="/forgot-password" className="hover:underline">
            Lupa Password
          </Link>
        </div>
      </form>
    </div>
  );
}
