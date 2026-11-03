"use client";
import { useState, useRef } from "react";

export function Sandbox() {
  const [testText, setTestText] = useState("test")
  const [isClicked, setIsClicked] = useState(false)
  const testTextRef = useRef("")

  const handleClick = () => {
    if (isClicked) {
      setIsClicked(false)
      setTestText("test")
    } else {
      setIsClicked(true)
      setTestText("clicked")
      throw new Error('throw new Error test')
    }
  }


  return (
      <div className="flex justify-center py-2">
        <button
          className="p-2 bg-blue-500 text-white rounded"
          onClick={handleClick}
        >
          {testText}
        </button>
      </div>
  );
}
