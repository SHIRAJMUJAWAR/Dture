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
  activeDebates: Debate[];
  addActiveDebate: (debate: Debate) => void;
  removeActiveDebate: (id: number) => void;
}

export const DebateContext = createContext<DebateContextType>({
  debates: [],
  addDebate: () => {},
  activeDebates: [],
  addActiveDebate: () => {},
  removeActiveDebate: () => {},
});

interface DebateProviderProps {
  children: ReactNode;
}

export const DebateProvider = ({ children }: DebateProviderProps) => {
  const [debates, setDebates] = useState<Debate[]>([]);
  const [activeDebates, setActiveDebates] = useState<Debate[]>([]);

  const addDebate = (debate: Debate) => {
    setDebates((prev) => [...prev, debate]);
  };

  const addActiveDebate = (debate: Debate) => {
    setActiveDebates((prev) => {
      // prevent duplicates
      if (prev.some((d) => d.id === debate.id)) return prev;
      return [...prev, debate];
    });
  };

  const removeActiveDebate = (id: number) => {
    setActiveDebates((prev) => prev.filter((d) => d.id !== id));
  };

  return (
    <DebateContext.Provider
      value={{
        debates,
        addDebate,
        activeDebates,
        addActiveDebate,
        removeActiveDebate,
      }}
    >
      {children}
    </DebateContext.Provider>
  );
};
