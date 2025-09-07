import { useState, useEffect, ReactNode } from 'react';
import '@/styles/Home.module.css';

interface FadeExampleProps {
  children: ReactNode;
  show: boolean;
  duration?: number;
  onHideComplete?: () => void;
}

export default function FadeExample({ children, show, duration = 500, onHideComplete }: FadeExampleProps) {
  const [render, setRender] = useState(show);

  useEffect(() => {
    if (show) {
      setRender(true);
    } else {
      const timeout = setTimeout(() => {
        setRender(false);
        onHideComplete?.();
      }, duration);
      return () => clearTimeout(timeout);
    }
  }, [show, duration, onHideComplete]);

  return render ? (
    <div className={`fade ${show ? 'show' : ''}`}>{children}</div>
  ) : null;
}