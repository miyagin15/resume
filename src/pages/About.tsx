import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <div className="section-padding">
      <div className="text-left mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          {t('about.title')}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {t('about.description')}
        </p>
      </div>

      <div className="card p-8 text-left">
        <p className="text-gray-600 text-lg">
          {t('about.more_details')}
        </p>
      </div>
    </div>
  );
}

export default About;
