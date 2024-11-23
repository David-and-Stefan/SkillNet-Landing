import { useNavigate } from "react-router-dom";

export function Footer() {
  function App() {
    return window.open("https://platform.skillnet.dev");
  }

  return (
    <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800 flex flex-col justify-center items-center">
      <div className="border-t-4 border-gray-200 border-dotted w-3/4 m-5"></div>
      <div className="mx-auto max-w-screen-xl text-center flex flex-col justify-center items-center">
        <a href="#" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            SkillNet
          </span>
        </a>
        <p className="my-3 text-gray-500 dark:text-gray-400">
          support@skillnet.com
        </p>
        <ul className="flex flex-wrap justify-center items-center mb-3 text-gray-900 dark:text-white">
          <li>
            <a className="mr-4 cursor-pointer hover:underline md:mr-6">Home</a>
          </li>
          <li>
            <a
              onClick={App}
              className="mr-4 hover:underline md:mr-6 cursor-pointer"
            >
              Web App
            </a>
          </li>
          <li>
            <a className="mr-4 hover:underline cursor-pointer md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a className="mr-4 hover:underline cursor-pointer md:mr-6">
              Terms of Service
            </a>
          </li>
        </ul>
        <p className="mt-1 text-sm text-gray-400">SkillNet GmbH</p>
        <p className="text-sm text-gray-400">
          Hauptstraße 15, 10115 Berlin, Germany
        </p>
        <p className="text-sm text-gray-400">
          Authorized representative: Max Mustermann
        </p>
        <p className="mb-3 text-sm text-gray-400">
          VAT ID number per § 27a UStG: DE123456789
        </p>
        <span className="text-sm text-gray-400 sm:text-center">
          SkillNet © 2024 All Rights Reserved
        </span>
      </div>
    </footer>
  );
}
