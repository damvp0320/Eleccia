import { createContext, useContext, useState } from "react";

export type EleccionType = "Presidencia" | "Senado" | "Cámara de Representantes";

interface EleccionContextValue {
  eleccion: EleccionType;
  setEleccion: (e: EleccionType) => void;
}

const EleccionContext = createContext<EleccionContextValue | null>(null);

export function EleccionProvider({ children }: { children: React.ReactNode }) {
  const [eleccion, setEleccion] = useState<EleccionType>("Presidencia");

  return (
    <EleccionContext.Provider value={{ eleccion, setEleccion }}>
      {children}
    </EleccionContext.Provider>
  );
}

export function useEleccion() {
  const ctx = useContext(EleccionContext);
  if (!ctx) throw new Error("useEleccion must be used within EleccionProvider");
  return ctx;
}
