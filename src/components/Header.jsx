import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const [isWord, setIsWord] = useState("");
  return (
    <div>
      <nav className="bg-black fixed z-30 w-[96%] mx-auto">
        <div className="3xl:max-w-screen-3xl 2xl:max-w-screen-2xl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm ssm:max-w-screen-ssm flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center w-full">
            <div className="sssm:basis-1/5 sssm:block sssm:w-1/6 md:hidden lg:block lg:basis-1/5"></div>
            <div className="relative w-full flex-1">
              <input
                type="search"
                id="search-dropdown"
                className="block p-2.5 w-full z-20 text-sm text-white bg-black rounded-l-3xl rounded-r-3xl border-l-gray-600 border-l-2 border border-gray-600 focus:ring-blue-700 focus:border-blue-700"
                placeholder="Tìm kiếm"
                required
                onChange={(e) => {
                  setIsWord(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    navigate(`/result/${isWord}`);
                  }
                }}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 py-2.5 px-4 text-sm font-medium text-white bg-[#222] rounded-r-3xl border-l-0 border border-gray-600 focus:ring-4 focus:outline-none"
                onClick={() => {
                  navigate(`/result/${isWord}`);
                }}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
            <div className="basis-1/5 flex items-center justify-end gap-4 md:pr-3">
              <div className="text-white text-xl font-medium">
                <FontAwesomeIcon icon={faBell} />
              </div>
              <div className=" w-8 h-8 rounded-[50%] bg-[#502da7]">
                <h4 className="text-white leading-8 text-center">Vỹ</h4>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
