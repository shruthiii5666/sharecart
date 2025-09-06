// src/pages/MySurplus.tsx
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  status: "available" | "sold";
}

export default function MySurplus() {
    const [products, setProducts] = useState<Product[]>([]);

  const [newProduct, setNewProduct] = useState("");

  const handleAddProduct = () => {
    if (newProduct.trim() === "") return;

    const newItem: Product = {
      id: Date.now(),
      name: newProduct,
      status: "available",
    };

    setProducts([...products, newItem]);
    setNewProduct("");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-6">My Surplus</h1>
      <p className="text-gray-600 mb-8">
        Manage your surplus inventory and listings
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Add Surplus Item */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
            <span className="text-purple-600">📦</span> Add Surplus Item
          </h2>
          <input
            type="text"
            value={newProduct}
            onChange={(e) => setNewProduct(e.target.value)}
            placeholder="e.g., Organic Apples"
            className="w-full border rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            onClick={handleAddProduct}
            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
          >
            List Product
          </button>
        </div>

        {/* Current Listings */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Current Listings</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left border-b">
                <th className="py-2">Product</th>
                <th className="py-2">Status</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b">
                  <td className="py-2">{product.name}</td>
                  <td className="py-2">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        product.status === "available"
                          ? "bg-green-100 text-purple-600"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {product.status}
                    </span>
                  </td>
                  <td className="py-2">
                    <button className="text-blue-600 hover:underline">
                      ✏️ Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
