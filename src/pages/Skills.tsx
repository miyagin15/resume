import { useTranslation } from 'react-i18next';

import Skill from '../Images/Skills.jpg';

function Skills() {
  const { t } = useTranslation();

  const certificationList = t('skills.certifications', { returnObjects: true }) as string[];
  const favoritesList = t('skills.favorites', { returnObjects: true }) as string[];

  const languageList = [
    {
      "alt": "TypeScript",
      "src": "https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&amp;logo=typescript&amp;logoColor=white"
    },
    {
      "alt": "JavaScript",
      "src": "https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&amp;logo=JavaScript&amp;logoColor=white"
    },
    {
      "alt": "Python",
      "src": "https://img.shields.io/badge/-Python-3776AB?style=flat-square&amp;logo=Python&amp;logoColor=white"
    },
    {
      "alt": "C#",
      "src": "https://img.shields.io/badge/-Csharp-3776e3?style=flat-square&amp;logo=Csharp&amp;logoColor=white"
    }
  ];

  const frameworkList = [
    {
      "alt": "AWS",
      "src": "https://img.shields.io/badge/-AWS-F7DF1E?style=flat-square&amp;logo=Amazon+AWS&amp;logoColor=white"
    },
    {
      "alt": "Azure",
      "src": "https://img.shields.io/badge/-Azure-46a2f1?style=flat-square&amp;logo=Microsoft+Azure&amp;logoColor=white"
    },
    {
      "alt": "Unity",
      "src": "https://img.shields.io/badge/-Unity-007396?style=flat-square&amp;logo=Unity&amp;logoColor=white"
    },
    {
      "alt": "Vue",
      "src": "https://img.shields.io/badge/-Vue.js-4FC08D?style=flat-square&amp;logo=Vue.js&amp;logoColor=white"
    },
    {
      "alt": "React",
      "src": "https://img.shields.io/badge/-React-45b8d8?style=flat-square&amp;logo=react&amp;logoColor=white"
    },
    {
      "alt": "Django",
      "src": "https://img.shields.io/badge/-Django-092E20?style=flat-square&amp;logo=Django&amp;logoColor=white"
    },
    {
      "alt": "Firebase",
      "src": "https://img.shields.io/badge/-Firebase-FFCA28?style=flat-square&amp;logo=Firebase&amp;logoColor=white"
    },
    {
      "alt": "Docker",
      "src": "https://img.shields.io/badge/-Docker-46a2f1?style=flat-square&amp;logo=docker&amp;logoColor=white"
    }
  ];

  return (
    <div id="skills" className="section-padding">
      {/* 好きな技術 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-left">{t('skills.favorite_tech')}</h2>
        <div className="card p-6">
          <ul className="list-disc list-inside space-y-2">
            {favoritesList.map((item, index) => (
              <li key={index} className="text-gray-700 mb-2">{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <hr className="my-8 border-gray-300" />

      {/* 技術スタック */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-left">{t('skills.tech_stack')}</h2>
        <div className="card p-6">
          <div className="text-left mb-6">
            <a
              href="https://github.com/miyagin15"
              rel="noreferrer noopener"
              target="_blank"
              className="btn-primary inline-block"
            >
              {t('skills.github_repo')}
            </a>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{t('skills.languages')}</h3>
            <div className="flex flex-wrap justify-start">
              {languageList.map((language, index) => (
                <img key={index} alt={language.alt} src={`${language.src}`} className="inline-block mr-2 mb-2" />
              ))}
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{t('skills.frameworks_others')}</h3>
            <div className="flex flex-wrap justify-start">
              {frameworkList.map((framework, index) => (
                <img key={index} alt={framework.alt} src={`${framework.src}`} className="inline-block mr-2 mb-2" />
              ))}
            </div>
          </div>
          
          <div className="text-left">
            <img 
              src={Skill} 
              alt="Skills overview" 
              className="max-w-md mx-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* 合格資格 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-left">{t('skills.certifications_title')}</h2>
        <div className="card p-6">
          <ul className="list-disc list-inside space-y-2">
            {certificationList.map((item, index) => (
              <li key={index} className="text-gray-700 mb-2">{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Skills;