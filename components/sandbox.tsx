"use client";

export function Sandbox() {
  return (
      <div className="flex justify-center py-2">
        <button
          className="p-2 bg-blue-500 text-white rounded"
          onClick={() => {throw new Error('throw new Error test')}}
        >
          test
        </button>
      </div>
  );
}
