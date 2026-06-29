"use client"

import { createContext, ReactNode, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";

interface ToastContextType {
    showToast: (type: 'success' | 'error' | 'warning' | 'info', message: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

interface ToastProviderProps {
    children: ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {

    const showToast = (type: 'success' | 'error' | 'warning' | 'info', message: string) => {
        if (type === 'success')
            toast.success(message);

        if (type === 'error')
            toast.error(message);

        if (type === 'warning')
            toast.warning(message);

        if (type === 'info')
            toast.info(message);
    }

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <ToastContainer position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </ToastContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useToastAlert = (): ToastContextType => {
    const context = useContext(ToastContext);
    if (context === undefined) {
        throw new Error('useToast must be used within a ModalProvider');
    }
    return context;
}
