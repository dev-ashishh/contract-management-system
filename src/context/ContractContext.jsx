import { createContext, useContext, useEffect, useState } from "react";
import { demoContracts } from "../data/demoData";

const ContractContext = createContext();

const STATUS_FLOW = ["CREATED", "APPROVED", "SENT", "SIGNED", "LOCKED"];

const getNextStatus = (status) => {
  const index = STATUS_FLOW.indexOf(status);
  if (index === -1 || index === STATUS_FLOW.length - 1) return status;
  return STATUS_FLOW[index + 1];
};

export const ContractProvider = ({ children }) => {
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("contracts");
    const parsed = stored ? JSON.parse(stored) : [];

    if (parsed.length > 0) {
      setContracts(parsed);
    } else {
      setContracts(demoContracts);
      localStorage.setItem("contracts", JSON.stringify(demoContracts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contracts", JSON.stringify(contracts));
  }, [contracts]);

  
  const createContract = (contract) => {
    setContracts(prev => [
      ...prev,
      {
        id: contract.id ?? crypto.randomUUID(),
        ...contract
      }
    ]);
  };

  const moveNext = (id) => {
    setContracts(prev =>
      prev.map(c =>
        c.id === id && c.status !== "LOCKED" && c.status !== "REVOKED"
          ? { ...c, status: getNextStatus(c.status) }
          : c
      )
    );
  };

  const revoke = (id) => {
    setContracts(prev =>
      prev.map(c =>
        c.id === id && c.status !== "LOCKED"
          ? { ...c, status: "REVOKED" }
          : c
      )
    );
  };

  const deleteContract = (id) => {
    setContracts(prev => prev.filter(c => c.id !== id));
  };

  return (
    <ContractContext.Provider
      value={{ contracts, createContract, moveNext, revoke, deleteContract }}
    >
      {children}
    </ContractContext.Provider>
  );
};

export const useContracts = () => useContext(ContractContext);
