// src/pages/Marketplace.tsx
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  quantity: string;
  status: "available" | "limited";
  expiry: string;
  distance: string;
  vendor: string;
  rating: number;
}

export default function Marketplace() {
  const [search, setSearch] = useState("");

    const products: Product[] = [];

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-2">Marketplace</h1>
      <p className="text-gray-600 mb-8">
        Browse available surplus products from retailers near you
      </p>

      {/* Filters */}
      <div className="bg-white shadow rounded-lg p-4 mb-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-500"
        />
        <select className="border px-4 py-2 rounded-lg">
          <option>Category</option>
          <option>Fruits</option>
          <option>Bakery</option>
          <option>Dairy</option>
        </select>
        <select className="border px-4 py-2 rounded-lg">
          <option>Expiry Date</option>
          <option>1 day</option>
          <option>2 days</option>
          <option>3 days</option>
        </select>
        <select className="border px-4 py-2 rounded-lg">
          <option>Distance</option>
          <option>2km</option>
          <option>5km</option>
          <option>10km</option>
        </select>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <div
            key={p.id}
            className="bg-white shadow rounded-lg p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold">{p.name}</h2>
                <span
                  className={`px-3 py-1 text-sm rounded-full ${
                    p.status === "available"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {p.status}
                </span>
              </div>
              <p className="text-gray-500 mb-2">{p.category}</p>
              <p className="text-green-600 text-xl font-bold mb-2">
                ${p.price}
              </p>
              <p className="text-gray-600 mb-2">{p.quantity}</p>
              <div className="flex items-center text-sm text-gray-500 gap-4 mb-2">
                <span>⏳ {p.expiry}</span>
                <span>📍 {p.distance}</span>
              </div>
              <p className="text-gray-700 font-medium mb-1">{p.vendor}</p>
              <p className="text-yellow-500">⭐ {p.rating}</p>
            </div>

            <div className="flex gap-3 mt-4">
              <button className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
                Request/Buy
              </button>
              <button className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-100">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
