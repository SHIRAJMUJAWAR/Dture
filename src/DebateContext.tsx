import React, { createContext, useState, ReactNode } from "react";

// Define type for a debate
export interface Debate {
  id: number;
  name: string;
  description: string;
  duration: string;
  image?: string | null;
}

// Define type for context
interface DebateContextType {
  debates: Debate[];
  addDebate: (debate: Debate) => void;
}

export const DebateContext = createContext<DebateContextType>({
  debates: [],
  addDebate: () => {},
});

interface DebateProviderProps {
  children: ReactNode;
}

export const DebateProvider = ({ children }: DebateProviderProps) => {
  const [debates, setDebates] = useState<Debate[]>([]);

  const addDebate = (debate: Debate) => {
    setDebates((prev) => [...prev, debate]);
  };

  return (
    <DebateContext.Provider value={{ debates, addDebate }}>
      {children}
    </DebateContext.Provider>
  );
};
