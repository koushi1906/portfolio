import React from "react";
import findAHome from "../assets/images/find-a-home.png";
import heatherWay from "../assets/images/heatherway.png";
import mean from "../assets/images/mean-crud.png";
import meme from "../assets/images/meme-generator.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: findAHome,
      repo: "https://github.com/koushi1906/Find-A-House",
      demo: "https://find-a-house.onrender.com",
    },
    {
      id: 2,
      src: heatherWay,
      repo: "https://github.com/koushi1906/heather-way",
      demo: "https://heatherway-1594f.web.app/login",
    },
    {
      id: 3,
      src: mean,
      repo: "https://github.com/koushi1906/mean_crud",
    },
    {
      id: 4,
      src: meme,
      repo: "https://github.com/koushi1906/Meme_Generator",
    },
  ];

  const codeButtonClick = (repo) => {
    window.open(repo, "_blank");
  };

  const demoButtonClick = (demo) => {
    window.open(demo, '_blank');
  }

  return (
    <div
      name="portfolio"
      id="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full pt-20 text-white md:min-h-screen "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my projects right here</p>
        </div>

        <div className="grid  sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, repo, demo }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg overflow-hidden"
            >
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                {demo && (
                  <button className="w-1/2 px-6 py-3 bg-gradient-to-r from-blue-500 to-green-400 hover:from-purple-500 hover:to-pink-400 duration-200 transform hover:scale-105 rounded-md"
                    onClick={() => demoButtonClick(demo)}
                  >
                    Demo
                  </button>
                )}
                <button
                  className={`${demo ? 'w-1/2' : 'w-full' } px-6 z-0 py-3 bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-amber-500 hover:to-red-500 duration-200 transform hover:scale-105 rounded-md`}
                  onClick={() => codeButtonClick(repo)}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
