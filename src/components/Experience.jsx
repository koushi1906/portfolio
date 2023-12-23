import React from "react";
import html from "../assets/skills/HTML.png";
import css from "../assets/skills/css.png";
import js from "../assets/skills/js.png";
import angular from "../assets/skills/angular.png";
import react from "../assets/skills/react.png";
import aws from "../assets/skills/aws.png";
import docker from "../assets/skills/docker.png";
import java from "../assets/skills/java.png";
import kubernetes from "../assets/skills/kubernetes.png";
import nodejs from "../assets/skills/nodejs.png";
import mongodb from "../assets/skills/mongodb.png";
import numpy from "../assets/skills/numpy.png";
import postgres from "../assets/skills/postgres.png";
import spring from "../assets/skills/spring.png";
import pandas from "../assets/skills/pandas.png";
import sql from "../assets/skills/sql.png";


const Experience = () => {
  const techs = [
    { id: 1, src: html, title: "HTML", style: "shadow-orange-500" },
    { id: 2, src: css, title: "CSS", style: "shadow-blue-300" },
    { id: 3, src: js, title: "JavaScript", style: "shadow-yellow-500" },
    { id: 4, src: react, title: "React", style: "shadow-blue-600" },
    { id: 5, src: angular, title: "Angular", style: "shadow-red-500" },
    { id: 6, src: aws, title: "AWS", style: "shadow-white" },
    { id: 7, src: java, title: "Java", style: "shadow-orange-100" },
    { id: 8, src: docker, title: "Docker", style: "shadow-blue-900" },
    { id: 9, src: kubernetes, title: "Kubernetes", style: "shadow-blue-500" },
    { id: 10, src: nodejs, title: "Node.js", style: "shadow-green-500" },
    { id: 11, src: mongodb, title: "MongoDB", style: "shadow-green-700" },
    { id: 12, src: numpy, title: "Numpy", style: "shadow-sky-700" },
    { id: 13, src: spring, title: "Spring", style: "shadow-green-900" },
    { id: 14, src: postgres, title: "Postgres", style: "shadow-sky-400" },
    { id: 15, src: pandas, title: "Pandas", style: "shadow-sky-900" },
    { id: 16, src: sql, title: "SQL", style: "shadow-sky-400" },
    
  ];

  return (
    <div className="bg-gradient-to-b from-gray-800 to-black pt-20 w-full md:min-h-screen" name="experience" id="experience">
    <div className="mx-auto max-w-screen-lg p-4 flex flex-col justify-center h-full w-full text-white">
      <div className="pb-4">
        <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
          Experience
        </p>
        <p className="py-6">These are the technologies I've worked with</p>
      </div>

      <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-4 px-8 sm:px-0">
        {techs.map(({ id, src, title, style }) => (
          <div className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} flex flex-col`} key={id}>
            <div className="w-20 h-20 mx-auto mb-2" style={{ backgroundImage: `url(${src})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '200px' }} />
            <p className="text-lg font-bold">{title}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
};

export default Experience;



