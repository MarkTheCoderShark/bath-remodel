import { createContext, useContext, useState, useCallback } from 'react';

const EstimateModalContext = createContext(null);

export function EstimateModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return (
    <EstimateModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </EstimateModalContext.Provider>
  );
}

export function useEstimateModal() {
  const context = useContext(EstimateModalContext);
  if (!context) {
    throw new Error('useEstimateModal must be used within an EstimateModalProvider');
  }
  return context;
}
