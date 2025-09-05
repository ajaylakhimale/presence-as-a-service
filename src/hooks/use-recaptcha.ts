import { useState, useRef, useCallback } from 'react';
import { ReCaptchaRef } from '@/components/ReCaptcha';

export interface UseReCaptchaReturn {
  recaptchaRef: React.RefObject<ReCaptchaRef>;
  recaptchaToken: string | null;
  isRecaptchaVerified: boolean;
  setRecaptchaToken: (token: string | null) => void;
  resetRecaptcha: () => void;
  executeRecaptcha: () => Promise<string | null>;
  handleRecaptchaChange: (token: string | null) => void;
  handleRecaptchaExpired: () => void;
  handleRecaptchaError: () => void;
}

export const useReCaptcha = (): UseReCaptchaReturn => {
  const recaptchaRef = useRef<ReCaptchaRef>(null);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const isRecaptchaVerified = Boolean(recaptchaToken);

  const resetRecaptcha = useCallback(() => {
    recaptchaRef.current?.reset();
    setRecaptchaToken(null);
  }, []);

  const executeRecaptcha = useCallback(async (): Promise<string | null> => {
    try {
      const token = await recaptchaRef.current?.execute();
      if (token) {
        setRecaptchaToken(token);
      }
      return token || null;
    } catch (error) {
      console.error('reCAPTCHA execution failed:', error);
      return null;
    }
  }, []);

  const handleRecaptchaChange = useCallback((token: string | null) => {
    setRecaptchaToken(token);
  }, []);

  const handleRecaptchaExpired = useCallback(() => {
    setRecaptchaToken(null);
    console.log('reCAPTCHA expired');
  }, []);

  const handleRecaptchaError = useCallback(() => {
    setRecaptchaToken(null);
    console.error('reCAPTCHA error occurred');
  }, []);

  return {
    recaptchaRef,
    recaptchaToken,
    isRecaptchaVerified,
    setRecaptchaToken,
    resetRecaptcha,
    executeRecaptcha,
    handleRecaptchaChange,
    handleRecaptchaExpired,
    handleRecaptchaError,
  };
};
