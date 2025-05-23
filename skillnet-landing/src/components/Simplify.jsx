import { useTranslation } from 'react-i18next';
import image from '../assets/simplify.webp';

export function Simplify() {
  const { t } = useTranslation(undefined, { keyPrefix: 'simplify' });

  function App() {
    return window.open('https://platform.skillnet.dev');
  }
  return (
    <section className="bg-white py-8 antialiased  md:py-16">
      <div className="mx-auto grid max-w-screen-xl px-4 pb-8 md:grid-cols-12 lg:gap-12 lg:pb-16 xl:gap-0">
        <div className="content-center justify-self-start md:col-span-7 md:text-start">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-black  md:max-w-2xl md:text-5xl xl:text-6xl">
            {t('unlock')}
            <br />
            SkillNet
          </h1>
          <p className="max-w-2xl text-dark-900 dark:text-gray-400 md:mb-12 md:text-lg mb-3 lg:mb-5 lg:text-xl">
            {t('description')}
          </p>
          <a
            onClick={App}
            className="inline-block rounded-lg cursor-pointer bg-purple-400 px-6 py-3.5 text-center font-medium text-white hover:bg-purple-500 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            {t('reserve-btn')}
          </a>
        </div>
        <div className="hidden md:col-span-5 md:mt-0 lg:flex">
          <img
            className="w-[60rem] rounded-2xl"
            src={image}
            alt="shopping illustration"
          />
        </div>
      </div>
    </section>
  );
}
