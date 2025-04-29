import { useTranslation } from 'react-i18next';
import image from '../assets/benefits.webp';

export function BenefitsOfUsing() {
  const { t } = useTranslation(undefined, { keyPrefix: 'benefits' });

  return (
    <section className="bg-white dark:bg-gray-900 flex justify-center items-center flex-col">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:flex lg:flex-row-reverse lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black">
            {t('title', { projectTitle: 'SkillNet' })}
          </h2>
          <ul className="list-disc ml-10">
            <li className="p-2">
              <span className="font-semibold text-purple-400">
                {t('recommendations.title')}:
              </span>{' '}
              {t('recommendations.description')}
            </li>
            <li className="p-2">
              {/* How SkillNet Simplifies Personalized Recommendations: Get tailored suggestions based on your unique needs and preferences. */}
              {/* •	Tools for Efficient Planning and Organization: Discover how SkillNet helps you save time by organizing resources and activities seamlessly. */}
              {/* •	Ways to Enhance Your Experience with Visual Aids: Explore features that make learning and collaboration more engaging through visually rich content. */}
              <span className="font-semibold text-purple-400">
                {t('efficient-planning.title')}:
              </span>{' '}
              {t('efficient-planning.description')}
            </li>
            <li className="p-2">
              <span className="font-semibold text-purple-400">
                {t('visuals.title')}:
              </span>{' '}
              {t('visuals.description')}
            </li>
          </ul>
        </div>
        <div className="gap-4 mt-8">
          <img
            className="w-[60rem] rounded-2xl"
            src={image}
            alt="office content 1"
          />
        </div>
      </div>
    </section>
  );
}
