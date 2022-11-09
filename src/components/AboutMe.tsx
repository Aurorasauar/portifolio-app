import React from "react";

const AboutMe = () => {
  return (
    <div id="about" className="w-full h-screen bg-[#22333b] text-white">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-gray-700">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-3xl ">
            <p>My name is Aurora and I am a 24 year old woman from Oslo studying Cybernetics and robotics and Industrial economy and technology management. </p>
          </div>
          <div>
            <p>I am currently in my 5th year at Cyrbernetics and robotics at NTNU writing my master thesis about Visualization of explainable AI. In addition, I am in my 4th year in Industrial economics and technology management.
              During my studies in Trondheim I have been involved in several internships and part time jobs, such as Jenteprosjektet Ada, Ent3r, Junior Consulting, Cisco, Nordic Semiconductor and Firda.
              Besides work I enjoy volunteering and have had engagements in 'Samfundets konsept og prosjekteringsgruppe', UKA-17, UKA-19 and UKA-21 working as an executive chef, deputy chairman, event manager and as a singer.
              I thrive on a full calendar and I am passionate about innovation, technology and leadership.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
