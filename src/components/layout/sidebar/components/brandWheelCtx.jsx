"use client";
import { createContext, useContext, useState } from "react";

const Ctx = createContext(null);

export function BrandWheelProvider({ children }) {
  const [activeGroup, setActiveGroup] = useState(null); // "vw" | "fiat" | ...
  const [hoverBrand, setHoverBrand] = useState(null);   // { key, slug } | null

  return (
    <Ctx.Provider value={{ activeGroup, setActiveGroup, hoverBrand, setHoverBrand }}>
      {children}
    </Ctx.Provider>
  );
}

export const useBrandWheel = () => {
  const v = useContext(Ctx);
  if (!v) throw new Error("useBrandWheel must be used inside <BrandWheelProvider>");
  return v;
};
