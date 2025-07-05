import { useForm, ValidationError } from '@formspree/react';
import { useTranslation } from 'react-i18next';
import { useState, useEffect, useRef } from 'react';

function Contact() {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm("meokweok");
  const [formStartTime] = useState<number>(Date.now());
  const [isJavaScriptEnabled, setIsJavaScriptEnabled] = useState<boolean>(false);
  const [hasUserInteraction, setHasUserInteraction] = useState<boolean>(false);
  const [mouseMovements, setMouseMovements] = useState<number>(0);
  const formRef = useRef<HTMLFormElement>(null);

  // Check if JavaScript is enabled and track user interactions
  useEffect(() => {
    setIsJavaScriptEnabled(true);
    
    // Track mouse movements
    const handleMouseMove = () => {
      setMouseMovements(prev => prev + 1);
      setHasUserInteraction(true);
    };
    
    // Track keyboard interactions
    const handleKeyPress = () => {
      setHasUserInteraction(true);
    };
    
    // Track form focus
    const handleFormFocus = () => {
      setHasUserInteraction(true);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('keypress', handleKeyPress);
    
    const currentFormRef = formRef.current;
    if (currentFormRef) {
      currentFormRef.addEventListener('focusin', handleFormFocus);
    }
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('keypress', handleKeyPress);
      if (currentFormRef) {
        currentFormRef.removeEventListener('focusin', handleFormFocus);
      }
    };
  }, []);

  // Custom form submission handler with enhanced bot protection
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const honeypotValue = formData.get('website');
    const submissionTime = Date.now();
    const timeElapsed = submissionTime - formStartTime;
    
    // Enhanced bot protection checks
    if (honeypotValue) {
      console.log('Bot detected: honeypot field filled');
      return;
    }
    
    if (timeElapsed < 3000) {
      console.log('Bot detected: form submitted too quickly');
      return;
    }
    
    if (!isJavaScriptEnabled) {
      console.log('Bot detected: JavaScript disabled');
      return;
    }
    
    if (!hasUserInteraction) {
      console.log('Bot detected: no user interaction detected');
      return;
    }
    
    if (mouseMovements < 5) {
      console.log('Bot detected: insufficient mouse movements');
      return;
    }
    
    // Add security metadata to form data
    formData.append('_timestamp', formStartTime.toString());
    formData.append('_javascript_enabled', 'true');
    formData.append('_user_interaction', hasUserInteraction.toString());
    formData.append('_mouse_movements', mouseMovements.toString());
    formData.append('_time_elapsed', timeElapsed.toString());
    
    // Proceed with normal form submission
    handleSubmit(e);
  };

  if (state.succeeded) {
    return (
      <div className="section-padding text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          {t('contact.title')}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          {t('contact.success_message')}
        </p>
        <p className="text-gray-600">
          {t('contact.thank_you')}
        </p>
      </div>
    );
  }

  return (
    <div className="section-padding">
      <div className="text-left mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          {t('contact.title')}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {t('contact.description')}
        </p>
      </div>

      <div className="card p-8 max-w-2xl mx-auto">
        <form onSubmit={handleFormSubmit} className="space-y-6" ref={formRef}>
          {/* Honeypot field - hidden from users but visible to bots */}
          <div className="absolute left-[-9999px] top-[-9999px]">
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
          </div>

          <div>
            <label htmlFor="user_name" className="block text-sm font-medium text-gray-700">
              {t('contact.name_label')}
            </label>
            <input
              id="user_name"
              type="text"
              name="user_name"
              required
              autoComplete="name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            />
            <ValidationError prefix="Name" field="user_name" errors={state.errors} className="text-red-500 text-xs mt-1" />
          </div>

          <div>
            <label htmlFor="user_email" className="block text-sm font-medium text-gray-700">
              {t('contact.email_label')}
            </label>
            <input
              id="user_email"
              type="email"
              name="user_email"
              required
              autoComplete="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            />
            <ValidationError prefix="Email" field="user_email" errors={state.errors} className="text-red-500 text-xs mt-1" />
          </div>

          <div>
            <label htmlFor="user_message" className="block text-sm font-medium text-gray-700">
              {t('contact.message_label')}
            </label>
            <textarea
              id="user_message"
              name="user_message"
              rows={5}
              required
              autoComplete="off"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            ></textarea>
            <ValidationError prefix="Message" field="user_message" errors={state.errors} className="text-red-500 text-xs mt-1" />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {state.submitting ? '送信中...' : t('contact.submit_button')}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
