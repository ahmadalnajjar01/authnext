"use client";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  const handleLogout = async () => {
    await axios.post("/api/auth/logout");
    router.push("/login");
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-4">Dashboard 🔒</h1>
      <p className="mb-4">You're logged in ✅</p>
      <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded">Logout</button>
    </div>
  );
}
