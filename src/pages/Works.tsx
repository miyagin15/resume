import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { FaServer, FaRocket, FaChartLine } from 'react-icons/fa';

const defaultTiltOptions = {
  reverse: false,
  max: 10,
  perspective: 1000,
  scale: 1.01,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
}

function Works() {
  const { t } = useTranslation();
  const works = t('works.items', { returnObjects: true }) as any[];

  return (
    <div id="works" className="section-padding bg-white dark:bg-gray-900">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6"
        >
          {t('works.title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          {t('works.description')}
        </motion.p>
      </div>

      <div className="grid gap-10 max-w-6xl mx-auto">
        {works.map((work, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Tilt options={defaultTiltOptions}>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-1">
                    <div className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold mb-4">
                      {work.category}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                      {work.title}
                    </h3>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 text-red-500"><FaServer /></div>
                        <div>
                          <span className="font-bold text-gray-700 dark:text-gray-200 block mb-1">Challenge:</span>
                          <p className="text-gray-600 dark:text-gray-400">{work.challenge}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="mt-1 text-blue-500"><FaRocket /></div>
                        <div>
                          <span className="font-bold text-gray-700 dark:text-gray-200 block mb-1">Solution:</span>
                          <p className="text-gray-600 dark:text-gray-400">{work.solution}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="mt-1 text-green-500"><FaChartLine /></div>
                        <div>
                          <span className="font-bold text-gray-700 dark:text-gray-200 block mb-1">Result:</span>
                          <p className="text-gray-600 dark:text-gray-400">{work.result}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Works;
