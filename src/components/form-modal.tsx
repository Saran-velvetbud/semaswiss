import { useEffect } from 'react';
import { X } from 'lucide-react';

declare global {
  interface Window {
    jotformEmbedHandler: (selector: string, url: string) => void;
  }
}

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FormModal({ isOpen, onClose }: FormModalProps) {
  useEffect(() => {
    if (isOpen) {
      // Disable body scroll when modal is open
      document.body.style.overflow = 'hidden';
      
      // Load JotForm embed handler script
      const scriptId = 'jotform-embed-handler';
      if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://forms.whitelabelmd.com/s/umd/latest/for-form-embed-handler.js';
        script.onload = () => {
          // Initialize JotForm embed handler after script loads
          if ((window as any).jotformEmbedHandler) {
            (window as any).jotformEmbedHandler("iframe[id='JotFormIFrame-252373097676973']", "https://forms.whitelabelmd.com/");
          }
        };
        document.head.appendChild(script);
      } else {
        // Script already loaded, initialize handler
        setTimeout(() => {
          if ((window as any).jotformEmbedHandler) {
            (window as any).jotformEmbedHandler("iframe[id='JotFormIFrame-252373097676973']", "https://forms.whitelabelmd.com/");
          }
        }, 100);
      }
    } else {
      // Re-enable body scroll when modal closes
      document.body.style.overflow = 'unset';
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" onClick={handleBackdropClick}>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"></div>
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl max-h-[95vh] overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">Start Your Weight Loss Journey</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              data-testid="button-close-modal"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>
          
          {/* Form Container - Using JotForm embed code */}
          <div className="overflow-y-auto max-h-[calc(95vh-120px)] p-4">
            <iframe
              id="JotFormIFrame-252373097676973"
              title="Semaswiss - Personalized - Weight Loss initial V2.0"
              onLoad={() => window.parent.scrollTo(0,0)}
              allowTransparency={true}
              allow="geolocation; microphone; camera; fullscreen; payment"
              src="https://forms.whitelabelmd.com/252373097676973"
              frameBorder={0}
              style={{
                minWidth: '100%',
                maxWidth: '100%',
                height: '539px',
                border: 'none'
              }}
              scrolling="no"
            />
          </div>
        </div>
      </div>
    </div>
  );
}