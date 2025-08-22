"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleCredentialLogin = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (res.ok) {
      router.push("/products");
      toast.success("Logged in successfully");
    } else {
      toast.error("Login failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form
        onSubmit={handleCredentialLogin}
        className="flex flex-col space-y-4"
      >
        <input
          type="text"
          placeholder="user@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="password"
          placeholder="pass"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border rounded"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          Sign in
        </button>
      </form>
      {/* Example for social login */}
      <button
        onClick={() => signIn("google", { callbackUrl: "/products" })}
        className="mt-4 p-2 bg-red-500 text-white rounded"
      >
        Sign in with Google
      </button>
    </div>
  );
}
