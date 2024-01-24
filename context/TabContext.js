
import { createContext, useContext, useState } from "react";

const TabContext = createContext();

export const useTabContext = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error("useTabContext must be used within a TabProvider");
  }
  return context;
};

export const TabProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const value = {
    activeTab,
    setActiveTab,
  };

  return <TabContext.Provider value={[activeTab, setActiveTab]}>{children}</TabContext.Provider>;
};
