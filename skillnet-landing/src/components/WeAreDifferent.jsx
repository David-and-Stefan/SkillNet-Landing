import { Trans, useTranslation } from 'react-i18next';
import image from '../assets/different.webp';

export function WeAreDifferent() {
  const { t } = useTranslation();

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:flex lg:flex-row-reverse lg:py-16 lg:px-6">
        <div className="lg:w-1/2 font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            {t('whySkillNet.heading')}
          </h2>
          <p className="mb-4">
            <span className="font-semibold text-xl">
              {t('whySkillNet.subheading')}
            </span>
          </p>
          <p>
            <Trans
              i18nKey="whySkillNet.paragraph1"
              components={{
                highlight1: <span className="font-semibold text-purple-400" />,
                highlight2: <span className="font-semibold text-purple-400" />,
              }}
            />
          </p>
        </div>
        <div className="gap-4 lg:w-1/2 mt-8">
          <img
            className="w-[60rem] rounded-2xl"
            src={image}
            alt="SkillNet content"
          />
        </div>
      </div>
    </section>
  );
}
