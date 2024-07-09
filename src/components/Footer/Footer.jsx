import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <section className="py-4 bg-blue-200 border-t-2 border-black">
      <div className="relative w-full px-4 mx-auto lg:px-8 max-w-screen-xl">
        <div className="flex flex-wrap -m-4">
          <div className="w-full p-4 md:w-1/2 lg:w-5/12">
            <div className="flex flex-col justify-between h-full">
              <div className="inline-flex items-center mb-4">
                <Logo width="100px" />
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  &copy; 2024 Blog Ripples. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-4 md:w-1/2 lg:w-2/12">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
              FrontEnd
            </h3>
            <ul>
              <li className="mb-2">
                <Link
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                  to="https://vitejs.dev/guide/"
                >
                  Vite React App
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                  to="https://reactrouter.com/en/main"
                >
                  React Router Dom
                </Link>
              </li>

              <li>
                <Link
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                  to="https://redux-toolkit.js.org/"
                >
                  Redux-Toolkit
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full p-4 md:w-1/2 lg:w-2/12">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
              BackEnd
            </h3>
            <ul>
              <li className="mb-2">
                <Link
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                  to="https://appwrite.io/docs"
                >
                  Appwrite
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                  to="https://appwrite.io/docs/products/auth"
                >
                  Authentication
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                  to="https://appwrite.io/docs/products/databases"
                >
                  Databases
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full p-4 md:w-1/2 lg:w-3/12">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
              Connect with me
            </h3>
            <ul>
              <li className="mb-2">
                <Link
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                  to="https://github.com/ayush-129"
                >
                  Github
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                  to="https://www.linkedin.com/in/ayush-kumar-4174641b3/"
                >
                  Linkedin
                </Link>
              </li>
              <li>
                <Link
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                  to="https://www.instagram.com/bhagat_ayush._/"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
