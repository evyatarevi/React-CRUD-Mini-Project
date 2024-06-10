import React, { createContext, useState, useContext } from 'react';

// Create the context
const PageContext = createContext();
const [currentUser, setCurrentUser] = 

// Create a provider component
export const PageProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('Login'); // Default page

  return (
    <PageContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </PageContext.Provider>
  );
};

// Create a custom hook to use the PageContext
export const usePage = () => {
  return useContext(PageContext);
};