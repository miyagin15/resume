import { useTranslation } from 'react-i18next';

function Works() {
  const { t } = useTranslation();

  const hobbyList = t('works.hobbies', { returnObjects: true }) as string[];
  const studentList = t('works.students', { returnObjects: true }) as string[];
  const employmentList = t('works.employments', { returnObjects: true }) as string[];

  return (
    <div id="works" className="section-padding">
      <div className="text-left mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          {t('works.title')}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          {t('works.description')}
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
        {/* 職務経歴詳細 */}
        <div className="card p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-left">
            {t('works.employment_title')}
          </h2>
          <ul className="list-disc list-inside space-y-2">
            {employmentList.map((item, index) => (
              <li key={index} className="text-gray-700 mb-2">{item}</li>
            ))}
          </ul>
        </div>

        {/* 学生時代の経験 */}
        <div className="card p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-left">
            {t('works.student_title')}
          </h2>
          <ul className="list-disc list-inside space-y-2">
            {studentList.map((item, index) => (
              <li key={index} className="text-gray-700 mb-2">{item}</li>
            ))}
          </ul>
        </div>

        {/* 趣味開発 */}
        <div className="card p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-left">
            {t('works.hobby_title')}
          </h2>
          <ul className="list-disc list-inside space-y-2">
            {hobbyList.map((item, index) => (
              <li key={index} className="text-gray-700 mb-2">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Works;
