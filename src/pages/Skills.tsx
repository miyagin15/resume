import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaChevronDown, FaAws } from 'react-icons/fa';
import { SiMicrosoftazure, SiGooglecloud, SiKubernetes } from 'react-icons/si';

interface CertCategory {
  name: string;
  icon: JSX.Element;
  color: string;
  certs: string[];
}

function Skills() {
  const { t } = useTranslation();
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const favoritesList = t('skills.favorites', { returnObjects: true }) as string[];

  // Categorize certifications
  const certCategories: CertCategory[] = [
    {
      name: 'AWS',
      icon: <FaAws className="w-8 h-8" />,
      color: 'from-orange-400 to-orange-600',
      certs: [
        'AWS Certified Solutions Architect – Professional',
        'AWS Certified DevOps Engineer – Professional',
        'AWS Certified Solutions Architect – Associate',
        'AWS Certified Developer – Associate',
        'AWS Certified SysOps Administrator – Associate',
        'AWS Certified Cloud Practitioner',
        'AWS Certified Advanced Networking – Specialty',
        'AWS Certified Security – Specialty',
        'AWS Certified Machine Learning – Specialty',
        'AWS Certified Data Analytics – Specialty',
        'AWS Certified Database – Specialty',
        'AWS Certified SAP on AWS – Specialty',
      ]
    },
    {
      name: 'Google Cloud',
      icon: <SiGooglecloud className="w-8 h-8" />,
      color: 'from-blue-400 to-green-500',
      certs: [
        'Google Cloud Professional Cloud Architect',
        'Google Cloud Professional Cloud Developer',
        'Google Cloud Professional Cloud DevOps Engineer',
        'Google Cloud Professional Cloud Security Engineer',
        'Google Cloud Professional Data Engineer',
        'Google Cloud Professional Machine Learning Engineer',
        'Google Cloud Professional Cloud Database Engineer',
        'Google Cloud Associate Cloud Engineer',
      ]
    },
    {
      name: 'Microsoft Azure',
      icon: <SiMicrosoftazure className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-700',
      certs: [
        'Microsoft Certified: Solutions Architect Expert',
        'Microsoft Certified: DevOps Engineer Expert',
        'Microsoft Certified: AI Engineer Associate',
        'Microsoft Certified: Azure Administrator Associate',
        'Microsoft Certified: Azure Developer Associate',
        'Microsoft Certified: Azure Cosmos DB Developer Specialty',
        'Microsoft Certified: Azure Virtual Desktop Specialty',
        'Microsoft Certified: Azure Fundamentals',
        'Microsoft Certified: Azure AI Fundamentals',
        'Microsoft Certified: Azure Data Fundamentals',
      ]
    },
    {
      name: 'Kubernetes',
      icon: <SiKubernetes className="w-8 h-8" />,
      color: 'from-blue-400 to-blue-600',
      certs: [
        'CKA: Certified Kubernetes Administrator',
        'CKAD: Certified Kubernetes Application Developer',
      ]
    },
  ];

  const otherCerts = [
    'TOEIC L&R: 905 / Speaking: 130 / Writing: 170',
    t('language.ja') === 'JP' ? '基本情報技術者' : 'Fundamental Information Technology Engineer',
    t('language.ja') === 'JP' ? '応用情報技術者' : 'Applied Information Technology Engineer',
    t('language.ja') === 'JP' ? '情報処理安全確保支援士' : 'Registered Information Security Specialist',
    t('language.ja') === 'JP' ? 'データベーススペシャリスト' : 'Database Specialist',
  ];

  const toggleCategory = (name: string) => {
    setOpenCategory(openCategory === name ? null : name);
  };

  return (
    <div id="skills" className="section-padding bg-white dark:bg-gray-900">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6"
        >
          {t('skills.certifications_title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
        >
          Cloud & DevOps Certifications
        </motion.p>
      </div>

      {/* Certification Categories */}
      <div className="max-w-4xl mx-auto space-y-4 mb-16">
        {certCategories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <button
              onClick={() => toggleCategory(category.name)}
              className={`w-full flex items-center justify-between p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 bg-gradient-to-r ${category.color} text-white hover:shadow-xl transition-all duration-300`}
            >
              <div className="flex items-center gap-4">
                {category.icon}
                <span className="text-xl font-bold">{category.name}</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                  {category.certs.length} certifications
                </span>
              </div>
              <FaChevronDown className={`w-5 h-5 transition-transform duration-300 ${openCategory === category.name ? 'rotate-180' : ''}`} />
            </button>

            {/* Expandable content */}
            <motion.div
              initial={false}
              animate={{
                height: openCategory === category.name ? 'auto' : 0,
                opacity: openCategory === category.name ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-b-xl border-x border-b border-gray-100 dark:border-gray-700">
                <ul className="grid md:grid-cols-2 gap-3">
                  {category.certs.map((cert, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                      {cert.replace('AWS Certified ', '').replace('Google Cloud ', '').replace('Microsoft Certified: ', '')}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Other Certifications */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">Other Certifications</h3>
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
          <ul className="grid md:grid-cols-2 gap-3">
            {otherCerts.map((cert, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Awards & Achievements */}
      <div className="max-w-4xl mx-auto mt-16">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">🏆 Awards & Achievements</h3>
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-800 p-6 rounded-xl border border-yellow-200 dark:border-gray-700">
          <ul className="grid md:grid-cols-2 gap-3">
            {(t('skills.awards', { returnObjects: true }) as string[]).map((award, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                {award}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="max-w-4xl mx-auto mt-16">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">{t('skills.favorite_tech')}</h3>
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
          <ul className="space-y-3">
            {favoritesList.map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;