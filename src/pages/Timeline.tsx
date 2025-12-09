import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

function Timeline() {
    const { t } = useTranslation();
    const experiences = t('home.experiences', { returnObjects: true }) as any[];

    return (
        <div id="timeline" className="section-padding bg-gray-50 dark:bg-gray-900">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6"
                >
                    Career Timeline
                </motion.h2>
            </div>

            <div className="max-w-4xl mx-auto relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-indigo-500 rounded-full hidden md:block"></div>

                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    >
                        {/* Content */}
                        <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                                <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold mb-3">
                                    {exp.period}
                                </span>
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                                    {exp.where}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">
                                    {exp.content}
                                </p>
                            </div>
                        </div>

                        {/* Timeline dot */}
                        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-gray-900 shadow-md"></div>

                        {/* Spacer for alternating layout */}
                        <div className="hidden md:block w-5/12"></div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Timeline;
