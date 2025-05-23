import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';
import { Locale } from '../locales/locale';
export function Header() {
  const { t } = useTranslation();

  function App() {
    return window.open('https://platform.skillnet.dev');
  }

  return (
    <header className="flex flex-col justify-center items-center mt-10">
      <nav className="bg-white w-full border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-start mx-auto max-w-screen-xl">
          <a className="flex cursor-pointer items-center">
            <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
          </a>
          <div className="flex">
            <ChangeLangButton />
            <div className="flex items-center lg:order-2 cursor-pointer">
              <a
                onClick={App}
                className="text-white bg-purple-400 hover:bg-purple-500 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-orange-400 focus:outline-none dark:focus:ring-primary-800">
                {t('header.get-started')}
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

function ChangeLangButton() {
  const { t, i18n } = useTranslation();

  return (
    <div className="flex items-center lg:order-2 cursor-pointer">
      <button
        onClick={() => {
          i18n.language === Locale.EN
            ? i18n.changeLanguage(Locale.BG)
            : i18n.changeLanguage(Locale.EN);
        }}
        className="text-white bg-purple-400 hover:bg-purple-500 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-orange-400 focus:outline-none dark:focus:ring-primary-800">
        {i18n.language === Locale.EN
          ? t('header.language.bg')
          : t('header.language.en')}
      </button>
    </div>
  );
}
