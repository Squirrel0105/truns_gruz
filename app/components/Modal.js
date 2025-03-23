'use client';
import { useEffect } from 'react';

export default function Modal({ show, onClose, children }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-linear-to-br from-[#a1bbe1] to-white p-6 rounded-3xl h-140 w-115 relative">
        <img src='./img/close.svg'
          onClick={onClose}
          className="absolute top-2 right-2 cursor-pointer"
        />
        {children}
      </div>
    </div>
  );
}
