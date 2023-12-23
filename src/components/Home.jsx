import React from "react";
import Picture from "../assets/dp.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  const scrollToPortFolio = () => {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      name="home"
      id="home"
      className="flex h-screen w-full bg-gradient-to-b pt-40 from-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-2xl md:text-7xl font-bold text-white">
            Hello, This is Koushik
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I'm a seasoned full-stack developer and a proud graduate with a
            master's degree in Data Science from the University of Texas at
            Arlington (UTA). With a journey spanning three years in the tech
            industry, I've had the privilege of working with diverse
            technologies, mastering both the intricacies of front-end
            development and the robustness of back-end solutions.
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 cursor-pointer" onClick={scrollToPortFolio}>
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div className="pb-16">
          <img
            src={Picture}
            alt="my profile"
            className="rounded-2xl pt-8 mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
