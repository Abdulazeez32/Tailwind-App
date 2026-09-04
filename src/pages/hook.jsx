import { useState } from "react";

// Static data declared outside the component to avoid re-creation on every render
const initialUser = { name: "Abdul Azeez", age: 25, city: "Chennai" };
const updatedUser = { name: "Dhanush", age: 22, city: "Chennai" };

export default function Hook() {
  const [user, setUser] = useState(initialUser);

  const handleUpdate = () => setUser(updatedUser);
  const handleReset = () => setUser(initialUser);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="flex w-full max-w-sm flex-col items-center gap-3 rounded-2xl border border-gray-300 bg-white p-6 shadow-sm">
        <div className="w-full space-y-1 text-center text-gray-700">
          <p className="text-xl font-semibold text-gray-900">
            <span className="font-normal text-gray-500">Name: </span>
            {user.name}
          </p>
          <p className="text-base">
            <span className="font-normal text-gray-500">Age: </span>
            {user.age}
          </p>
          <p className="text-base">
            <span className="font-normal text-gray-500">City: </span>
            {user.city}
          </p>
        </div>

        <div className="mt-4 flex gap-4">
          <button
            type="button"
            onClick={handleUpdate}
            className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Change
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            Reset
          </button>
        </div>
      </div>
    </main>
  );
}