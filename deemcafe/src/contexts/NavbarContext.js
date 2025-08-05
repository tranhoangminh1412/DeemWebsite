'use client';
import { createContext, useContext, useState } from 'react';

const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('');

  return (
    <NavbarContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbar = () => useContext(NavbarContext);
