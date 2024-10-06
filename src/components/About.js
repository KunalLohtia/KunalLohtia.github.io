import React from 'react';

function AboutMe() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-* px-6 pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-6 lg:pt-16 lg:w-full">
            <div className="mx-auto max-w-md lg:max-w-full lg:mx-0 lg:flex-auto lg:pt-16 lg:text-left" >
                {/* About */}
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl mb-4">
                About Me
              </h2>
              <p className="mt-6 text-lg text-left leading-8 text-black">
                I’m a recent graduate of UC Davis with a degree in Computer Science and a minor in Technology Management. 
                With over two years of experience, I’ve built products across various industries, combining my programming and product background to deliver practical and impactful solutions. 
                My passion lies in leveraging AI to develop innovative products that not only solve complex challenges but also provide meaningful value to end users.
              </p>
              <p className="mt-6 text-lg text-left leading-8 text-black">
                Currently, I’m working as a Software Engineer at CourseAssist, 
                where I’m dedicated to building an AI-driven educational tool 
                designed to provide high-quality tutoring tailored to specific course materials, 
                empowering both students and educators with customizable, real-time support.
              </p>
              <p className="mt-6 text-lg text-left leading-8 text-black">
                Outside of work, I enjoy watching movies, playing tennis, and experimenting with new recipes in the kitchen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
