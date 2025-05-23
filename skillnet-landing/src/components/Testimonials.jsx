import { useTranslation } from 'react-i18next';

export function Testimonials() {
  const { t } = useTranslation();

  function App() {
    return window.open('https://platform.skillnet.dev');
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md flex flex-col justify-center items-center text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              {t('testimonials.title')}
            </h2>
            <p className="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              {t('testimonials.subtitle')}
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <a
                onClick={App}
                className="inline-block cursor-pointer rounded-lg bg-purple-400 px-6 py-3.5 text-center font-medium text-white hover:bg-purple-500 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                {t('testimonials.cta')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quote 1 */}
      <figure className="max-w-screen-md mx-auto text-center">
        <svg
          className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 14">
          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
        </svg>
        <blockquote>
          <p className="text-2xl italic font-medium text-gray-900 dark:text-white">
            "{t('testimonials.quote1')}"
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
          <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
            <cite className="pe-3 font-medium text-gray-900 dark:text-white">
              {t('testimonials.quote1Author')}
            </cite>
            <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">
              {t('testimonials.quote1Role')}
            </cite>
          </div>
        </figcaption>
      </figure>

      {/* Quote 2 */}
      <figure className="max-w-screen-md mx-auto text-center mb-10">
        <svg
          className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 14">
          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
        </svg>
        <blockquote>
          <p className="text-2xl italic font-medium text-gray-900 dark:text-white">
            "{t('testimonials.quote2')}"
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
          <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
            <cite className="pe-3 font-medium text-gray-900 dark:text-white">
              {t('testimonials.quote2Author')}
            </cite>
            <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">
              {t('testimonials.quote2Role')}
            </cite>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}
