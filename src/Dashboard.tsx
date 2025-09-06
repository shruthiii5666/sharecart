// src/pages/Dashboard.tsx
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Welcome Vendor 🎉</h1>
      <p className="mb-8 text-gray-600">Choose where you want to go:</p>

      <div className="flex gap-6">
        <button
          onClick={() => navigate("/marketplace")}
          className="bg-purple-600 text-white px-6 py-2 rounded-lg shadow hover:bg-purple-700"
        >
          Go to Marketplace
        </button>

        <button
          onClick={() => navigate("/mysurplus")}
          className="bg-purple-600 text-white px-6 py-2 rounded-lg shadow hover:bg-purple-700"
        >
          Go to My Surplus
        </button>
      </div>
    </div>
  );
}
