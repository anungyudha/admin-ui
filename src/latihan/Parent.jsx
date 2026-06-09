import React, { useState } from "react"; 

// Component Parent
function Parent() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-2xl">
      <p>Nilai count di Parent: {count}</p>

      <button
        className="p-2 bg-gray-300 rounded-md"
        onClick={() => setCount(count + 1)}
      >
        Tambah
      </button>
    </div>
  );
}

export default Parent;