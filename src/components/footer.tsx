import {
  FaFacebookF,
  FaDiscord,
  FaTwitter,
  FaGithub,
  FaDribbble,
} from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="relative  bottom-0 w-full bg-white dark:bg-gray-900 z-40">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <img
              src="/img/my-custom.png"
              className="h-8 me-3"
              alt="FlowBite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              bgdar
            </span>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://react.dev/" className="hover:underline">
                    React{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/bgdar"
                    className="hover:underline "
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025 <span>{"\u{1D4E7}"}</span>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="#"
              aria-label="Facebook page"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <FaFacebookF className="w-4 h-4" />
              <span className="sr-only">Facebook page</span>
            </a>

            <a
              href="#"
              aria-label="Discord community"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ml-5 transition-colors"
            >
              <FaDiscord className="w-4 h-4" />
              <span className="sr-only">Discord community</span>
            </a>

            <a
              href="#"
              aria-label="github page"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ml-5 transition-colors"
            >
              <FaGithub className="w-4 h-4" />
              <span className="sr-only">Github page</span>
            </a>
            <a
              href="#"
              aria-label="Twitter page"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ml-5 transition-colors"
            >
              <FaTwitter className="w-4 h-4" />
              <span className="sr-only">Twitter page</span>
            </a>

            <a
              href="#"
              aria-label="Dribbble account"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ml-5 transition-colors"
            >
              <FaDribbble className="w-4 h-4" />
              <span className="sr-only">Dribbble account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
