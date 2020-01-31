import { useEffect } from "react";

export default function useKeyboard() {
  function handleKeyPress(e) {
    e.preventDefault();
    console.log(e.code);
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keypress", handleKeyPress);
  }, []);
}
