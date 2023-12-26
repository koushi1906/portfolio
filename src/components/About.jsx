// import React from 'react'

// const About = () => {
//   return (
//     <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
//         <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
//             <div className="pb-8">
//                 <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
//             </div>
//             <p className='text-xl pt-20'>
//                 hi
//             </p>
//             <br/>
//             <p className='text-xl'>
//                 hello
//             </p>
//         </div>
//     </div>
//   )
// }

// export default About

// About.js
import React from "react";

const About = () => {
  return (
    <div
      className="w-full min-h-screen bg-gradient-to-b pt-20 from-gray-800 to-black text-white"
      id="about"
      name="about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl py-6">
          As an enthusiastic full-stack developer
          proficient in both front-end and back-end technologies. With almost
          four years of experience in the software development lifecycle and a
          thriving professional career, I am actively seeking new opportunities
          that align with my technical expertise and skills.
        </p>

        <br />

        <p className="text-xl">
          "In my journey as a full-stack developer, I've had
          the privilege of contributing to diverse projects that have honed my
          skills in creating seamless and user-friendly applications. My
          proficiency spans a range of technologies, including but not limited
          to{" "}
          <span className="font-semibold">
            JAVA, React, NodeJS, Python, Spring Framework
          </span>
          . My commitment to delivering high-quality solutions is evident in my
          hands-on experience with the complete software development lifecycle.
          I am passionate about staying abreast of the latest industry trends
          and leveraging emerging technologies to bring innovative solutions to
          the table. As I embark on the next chapter of my career, I am eager to
          bring my expertise to dynamic teams and contribute to projects that
          push the boundaries of technology."
        </p>
      </div>
    </div>
  );
};

export default About;
