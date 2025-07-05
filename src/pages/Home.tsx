import { useTranslation } from 'react-i18next';
import TripleJump from '../Images/TripleJump.jpg';
import UnivResearch from '../Images/UnivResearch.jpg';
import Terraform from '../Images/Terraform.png';
import MasterReserach from '../Images/MasterReserach.jpg';

const experienceImages = [
  Terraform,
  MasterReserach,
  UnivResearch,
  TripleJump
];

function Home() {
  const { t } = useTranslation();
  const experiences = t('home.experiences', { returnObjects: true }) as any[];

  return (
    <div className="section-padding">
      <div className="text-left mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          {t('home.title')}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          {t('home.description')}
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        {experiences.map((experience, index) => (
          <div 
            key={experience.content} 
            className="card p-6 hover:scale-105 transition-transform duration-300"
          >
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <span className="text-primary-600 text-xl font-semibold">
                  {experience.period}
                </span>
                <h3 className="text-2xl font-bold text-gray-800 mt-1">
                  {experience.where}
                </h3>
              </div>
              
              <p className="text-gray-600 text-lg mb-6 flex-grow">
                {experience.content}
              </p>
              
              <div className="mt-auto">
                <img 
                  src={experienceImages[index]} 
                  alt={experience.where}
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home;
