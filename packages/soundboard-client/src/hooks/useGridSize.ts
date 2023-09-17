import { useEffect, useState } from "react";

export function useGridSize() {
  const [size, setSize] = useState([0, 0]);
  useEffect(() => {
    function updateSize() {
      const grid: any = document.getElementById("root");
      setSize([grid.offsetWidth - 100, grid.offsetHeight - 180]);
    }
    window.addEventListener("resize", updateSize);

    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}
