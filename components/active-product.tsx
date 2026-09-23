"use client";

import { createContext, useContext, useMemo, useState } from "react";

type ActiveProductCtx = {
  activeProduct: string | null;
  setActiveProduct: (name: string | null) => void;
};

const Ctx = createContext<ActiveProductCtx | null>(null);

export function ActiveProductProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeProduct, setActiveProduct] = useState<string | null>(null);
  const value = useMemo(
    () => ({ activeProduct, setActiveProduct }),
    [activeProduct],
  );
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useActiveProduct() {
  const ctx = useContext(Ctx);
  if (!ctx) {
    return {
      activeProduct: null as string | null,
      setActiveProduct: (_: string | null) => {},
    };
  }
  return ctx;
}
