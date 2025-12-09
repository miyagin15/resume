import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { useTranslation } from 'react-i18next';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';

function Home() {
  const { t } = useTranslation();

  const handleContactClick = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 animate-gradient-xy"></div>
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#444cf7_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600">
                {t('home.title')}
              </span>
              <span className="block text-3xl md:text-4xl mt-4 text-gray-600 dark:text-gray-300 font-medium h-20">
                <Typewriter
                  options={{
                    strings: ['SRE Engineer.', 'Full Stack Developer.', 'Problem Solver.'],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 30,
                  }}
                />
              </span>
            </h1>

            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {t('home.description')}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleContactClick}
                className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 text-lg"
              >
                {t('home.cta')} <FaArrowRight />
              </button>
              <button
                onClick={() => document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-800 font-bold rounded-full shadow-md hover:shadow-lg border border-gray-200 transition-all duration-300"
              >
                View My Work
              </button>
            </div>

            <div className="mt-12 flex items-center gap-6 text-sm text-gray-500 font-medium justify-center flex-wrap">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" /> 7+ Years Exp
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" /> AWS/Azure/GCP Certified
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" /> ¥10,000~/hour
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;
