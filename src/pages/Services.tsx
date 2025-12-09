import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { FaCode, FaCloud, FaChalkboardTeacher } from 'react-icons/fa';

const defaultTiltOptions = {
    reverse: false,
    max: 15,
    perspective: 1000,
    scale: 1.02,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
}

const iconMap: { [key: string]: JSX.Element } = {
    code: <FaCode className="w-12 h-12 text-primary-600" />,
    cloud: <FaCloud className="w-12 h-12 text-primary-600" />,
    consulting: <FaChalkboardTeacher className="w-12 h-12 text-primary-600" />,
};

function Services() {
    const { t } = useTranslation();
    const services = t('services.items', { returnObjects: true }) as any[];

    return (
        <div id="services" className="section-padding bg-gray-50 dark:bg-gray-900">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6"
                >
                    {t('services.title')}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
                >
                    {t('services.description')}
                </motion.p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="h-full"
                    >
                        <Tilt options={defaultTiltOptions} className="h-full">
                            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center">
                                <div className="mb-6 p-4 bg-primary-50 dark:bg-primary-900/30 rounded-full">
                                    {iconMap[service.icon]}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    {service.description}
                                </p>
                            </div>
                        </Tilt>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Services;
