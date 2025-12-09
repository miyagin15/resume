import { useForm, ValidationError } from '@formspree/react';
import { useTranslation } from 'react-i18next';
import { useState, useEffect, useRef } from 'react';
import Confetti from 'react-confetti';

// Custom hook for window size
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

function Contact() {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm("meokweok");
  const [formStartTime] = useState<number>(Date.now());
  const [isJavaScriptEnabled, setIsJavaScriptEnabled] = useState<boolean>(false);
  const [hasUserInteraction, setHasUserInteraction] = useState<boolean>(false);
  const [mouseMovements, setMouseMovements] = useState<number>(0);
  const formRef = useRef<HTMLFormElement>(null);
  const { width, height } = useWindowSize();

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
      <div className="section-padding text-center flex flex-col items-center justify-center min-h-[60vh] relative overflow-hidden">
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={500}
        />
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8 animate-bounce z-10">
          <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 z-10">
          {t('contact.title')}
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed z-10">
          {t('contact.success_message')}
        </p>
        <div className="p-6 bg-blue-50 rounded-xl border border-blue-100 max-w-lg z-10">
          <p className="text-blue-800 font-medium">
            {t('contact.thank_you')}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div id="contact" className="section-padding">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          {t('contact.title')}
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {t('contact.description')}
        </p>
      </div>

      <div className="card p-10 max-w-3xl mx-auto shadow-2xl border-t-4 border-primary-500">
        <form onSubmit={handleFormSubmit} className="space-y-8" ref={formRef}>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label htmlFor="user_name" className="block text-sm font-semibold text-gray-700 mb-2">
                {t('contact.name_label')}
              </label>
              <input
                id="user_name"
                type="text"
                name="user_name"
                required
                autoComplete="name"
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                placeholder="John Doe"
              />
              <ValidationError prefix="Name" field="user_name" errors={state.errors} className="text-red-500 text-xs mt-1" />
            </div>

            <div>
              <label htmlFor="user_email" className="block text-sm font-semibold text-gray-700 mb-2">
                {t('contact.email_label')}
              </label>
              <input
                id="user_email"
                type="email"
                name="user_email"
                required
                autoComplete="email"
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                placeholder="john@example.com"
              />
              <ValidationError prefix="Email" field="user_email" errors={state.errors} className="text-red-500 text-xs mt-1" />
            </div>
          </div>

          <div>
            <label htmlFor="user_message" className="block text-sm font-semibold text-gray-700 mb-2">
              {t('contact.message_label')}
            </label>
            <textarea
              id="user_message"
              name="user_message"
              rows={6}
              required
              autoComplete="off"
              className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-y"
              placeholder="How can I help you?"
            ></textarea>
            <ValidationError prefix="Message" field="user_message" errors={state.errors} className="text-red-500 text-xs mt-1" />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className={`w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-lg shadow-lg text-lg font-bold text-white transition-all duration-300 ${state.submitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-primary-600 to-indigo-600 hover:shadow-xl hover:-translate-y-1'
              }`}
          >
            {state.submitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              t('contact.submit_button')
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
