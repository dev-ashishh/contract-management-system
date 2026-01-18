import { createContext, useContext, useEffect, useState } from "react";
import { demoBlueprints } from "../data/demoData";

const BlueprintContext = createContext();

export const BlueprintProvider = ({ children }) => {
  const [blueprints, setBlueprints] = useState([]);

  
  useEffect(() => {
    try {
      const stored = localStorage.getItem("blueprints");
      const parsed = stored ? JSON.parse(stored) : [];

      const merged = [...demoBlueprints];

      if (Array.isArray(parsed)) {
        parsed.forEach((bp) => {
          if (!merged.find((d) => d.id === bp.id)) {
            merged.push(bp);
          }
        });
      }

      setBlueprints(merged);
      localStorage.setItem("blueprints", JSON.stringify(merged));
    } catch {
      setBlueprints(demoBlueprints);
      localStorage.setItem("blueprints", JSON.stringify(demoBlueprints));
    }
  }, []);

  useEffect(() => {
    if (blueprints.length > 0) {
      localStorage.setItem("blueprints", JSON.stringify(blueprints));
    }
  }, [blueprints]);

  
  const addBlueprint = (bp) => {
    setBlueprints((prev) => [...prev, bp]);
  };

  return (
    <BlueprintContext.Provider value={{ blueprints, addBlueprint }}>
      {children}
    </BlueprintContext.Provider>
  );
};

export const useBlueprints = () => useContext(BlueprintContext);
