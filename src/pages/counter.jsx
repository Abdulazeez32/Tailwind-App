import useCounterStore from "../store/counterStore";

export default function Counter() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);
  const value = useCounterStore((state) => state.value);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 text-center">

        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Counter App
        </h1>

        <p className="text-gray-500 mb-8">
          Built with Zustand
        </p>

        <div className="bg-gray-100 rounded-2xl py-8 mb-8">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
            Current Count
          </p>

          <h2 className="text-6xl font-bold text-blue-600">
            {count}
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4">

          <button
            onClick={increment}
            className="bg-blue-500 text-white py-3 px-4 rounded-xl font-semibold
                       hover:bg-blue-600 active:scale-95 transition"
          >
            + Increment
          </button>

          <button
            onClick={decrement}
            className="bg-red-500 text-white py-3 px-4 rounded-xl font-semibold
                       hover:bg-red-600 active:scale-95 transition"
          >
            − Decrement
          </button>

          <button
            onClick={reset}
            className="bg-gray-700 text-white py-3 px-4 rounded-xl font-semibold
                       hover:bg-gray-800 active:scale-95 transition"
          >
            ↻ Reset
          </button>

          <button
            onClick={value}
            className="bg-green-500 text-white py-3 px-4 rounded-xl font-semibold
                       hover:bg-green-600 active:scale-95 transition"
          >
            👁 Current
          </button>

        </div>
      </div>
    </div>
  );
}