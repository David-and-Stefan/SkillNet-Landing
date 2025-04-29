import { Trans, useTranslation } from 'react-i18next';
import image from '../assets/discover.webp';
import image2 from '../assets/timetable.webp';
export function Discover() {
  const { t } = useTranslation(undefined, { keyPrefix: 'discover' });

  function App() {
    return window.open('https://platform.skillnet.dev');
  }

  return (
    <div className="flex justify-center items-center flex-col">
      <section className="bg-white dark:bg-gray-900 flex justify-center items-center flex-col">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              {t('title', { projectTitle: 'SkillNet' })}:
            </h2>
            <ul className="list-disc ml-10">
              <li className="p-2">
                <Trans
                  i18nKey="discover.list.item1"
                  components={{
                    bold: <span className="font-semibold text-purple-400" />,
                  }}
                />
              </li>
              <li className="p-2">
                <Trans
                  i18nKey="discover.list.item2"
                  components={{
                    bold: <span className="font-semibold text-purple-400" />,
                  }}
                />
              </li>
              <li className="p-2">
                <Trans
                  i18nKey="discover.list.item3"
                  components={{
                    bold: <span className="font-semibold text-purple-400" />,
                  }}
                />
              </li>
              <li className="p-2">
                <Trans i18nKey="discover.list.item4" />
              </li>
              <li className="p-2">
                <Trans
                  i18nKey="discover.list.item5"
                  components={{
                    bold: <span className="font-semibold text-purple-400" />,
                  }}
                />
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
        <a
          onClick={App}
          className="inline-block cursor-pointer rounded-lg bg-purple-400 px-6 py-3.5 text-center font-medium text-white hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
          {t('join-btn', { projectTitle: 'SkillNet' })}
        </a>
      </section>
      <div className="max-w-screen-md px-4 lg:px-0 flex justify-center items-center flex-col mb-2 lg:mb-2 mt-8 lg:mt-16">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold">
          {t('intro.heading')}
        </h2>
        <p className="text-lg">{t('intro.paragraph')}</p>
      </div>

      <div className="static md:relative max-w-screen-md px-4 lg:px-0 flex justify-center items-center flex-col mb-8 lg:mb-8 mt-8 lg:mt-8">
        <img
          src={image2}
          alt="office content 1"
          className="hidden md:block w-full h-auto rounded-2xl object-cover"
        />
        <div className="static md:absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-6 rounded-2xl">
          <p className="text-lg mt-5">{t('overlay.paragraph1')}</p>
          <p className="text-lg mt-5">{t('overlay.paragraph2')}</p>
        </div>
      </div>

      <div className="max-w-screen-md px-4 lg:px-0 flex justify-center items-center flex-col">
        <p className="text-lg mt-5">
          <Trans
            i18nKey="discover.cta.text"
            components={{
              customLink: (
                <a
                  className="font-semibold text-purple-400 underline"
                  href="https://platform.skillnet.dev"
                  target="_blank"
                  rel="noopener"
                  noreferrer
                />
              ),
            }}
          />
        </p>
      </div>
    </div>
  );
}
