import React from "react";

const FooterPart = () => {
  return (
      <footer className="bg-white dark:bg-black">
        <div className="mx-auto w-full max-w-screen p-4 py-6 lg:py-8">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-green-800 lg:my-8" />
          <div className="md:flex md:justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 w-full text-sm justify-items-start md:justify-items-end md:ml-32 ml-4">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="/"
                      className="hover:underline "
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="hover:underline"
                    >
                      X
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
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Food Delivery Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-green-800 lg:my-8" />
          <div className="mx-auto w-full max-w-screen p-4 py-6 lg:py-8">
            <div className="sm:flex sm:flex-col sm:items-start md:items-center sm:justify-between">
              <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2024{" "}
                <a href="https://www.hiremotekitchen.com/" className="hover:underline">
                  Remote Kitchen™
                </a>
                . All Rights Reserved.
              </span>
              <div className="flex sm:justify-center mt-4">
                <a
                  href="https://www.hiremotekitchen.com/"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 8 19"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Facebook page</span>
                </a>
                <a
                  href="https://x.com/RemoteKitchenCA"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-twitter-x"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                  </svg>
                  <span className="sr-only">Twitter page</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default FooterPart;
