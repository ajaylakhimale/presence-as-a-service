import React, { forwardRef, useImperativeHandle } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

interface ReCaptchaProps {
  onVerify: (token: string | null) => void;
  onExpired?: () => void;
  onError?: () => void;
  size?: 'compact' | 'normal' | 'invisible';
  theme?: 'light' | 'dark';
  className?: string;
}

export interface ReCaptchaRef {
  reset: () => void;
  execute: () => Promise<string | null>;
}

const ReCaptcha = forwardRef<ReCaptchaRef, ReCaptchaProps>(({
  onVerify,
  onExpired,
  onError,
  size = 'normal',
  theme = 'light',
  className = ''
}, ref) => {
  const recaptchaRef = React.useRef<ReCAPTCHA>(null);
  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  useImperativeHandle(ref, () => ({
    reset: () => {
      recaptchaRef.current?.reset();
    },
    execute: async () => {
      if (size === 'invisible') {
        return await recaptchaRef.current?.executeAsync() || null;
      }
      return null;
    }
  }));

  if (!siteKey) {
    console.warn('reCAPTCHA site key not found. Please add VITE_RECAPTCHA_SITE_KEY to your environment variables.');
    return (
      <div className={`p-4 border border-amber-200 bg-amber-50 rounded-lg ${className}`}>
        <p className="text-sm text-amber-800">
          reCAPTCHA is not configured. Please contact the administrator.
        </p>
      </div>
    );
  }

  return (
    <div className={className}>
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={siteKey}
        onChange={onVerify}
        onExpired={onExpired}
        onError={onError}
        size={size}
        theme={theme}
      />
    </div>
  );
});

ReCaptcha.displayName = 'ReCaptcha';

export default ReCaptcha;
