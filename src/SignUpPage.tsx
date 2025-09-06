import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function SignUpPage() {
  const [vendorName, setVendorName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ vendorName, email, password });
    alert("Vendor signed up successfully!");
    navigate("/login"); // Redirect to login after signup
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-6">Vendor Sign Up</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md flex flex-col gap-4"
      >
        <input
          type="text"
          placeholder="Vendor Name"
          value={vendorName}
          onChange={(e) => setVendorName(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
          required
        />
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-700"
        >
          Sign Up
        </button>
        <p className="text-sm text-gray-500 mt-2">
          Already have an account?{" "}
          <span
            className="text-purple-600 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Sign In
          </span>
        </p>
      </form>
    </div>
  );
}
