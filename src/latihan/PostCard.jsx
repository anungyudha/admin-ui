import React, { useState } from "react";

function PostCard(props) {
  const { id, userId, title, body } = props;
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <div className="bg-white hover:bg-red-50 transition-transform duration-300 ease-in-out hover:border hover:scale-105 flex flex-col items-center p-6 rounded-md shadow h-full">
        <div className="text-xl text-center font-semibold text-gray-800 mb-2">{title}</div>
        <p className="text-center text-gray-600 flex-1">{body}</p>
        <button
          className={`${clicked ? "bg-Special-Red2 hover:brightness-125" : "bg-gray-01"} text-white p-2 rounded md w-full mt-4`}
          onClick={() => setClicked(true)}
        >
          {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
        </button>
      </div>
    </>
  );
}

export default PostCard;