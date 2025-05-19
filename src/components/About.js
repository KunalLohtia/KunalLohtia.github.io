import React from 'react';

function AboutMe() {
  return (
    <section id="about" className="scroll-mt-24 min-h-[50vh] py-8">
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
              I’m a recent UC Davis graduate with a B.S. in Computer Science and a minor in Technology Management.
              Over the past few years, I’ve gained hands-on experience building impactful products across diverse industries, 
              including agriculture, education, and e-commerce. 
              I thrive at the intersection of coding and product strategy, designing solutions that deliver measurable value to users.
              </p>
              <p className="mt-6 text-lg text-left leading-8 text-black">
              Currently, I’m a Software Engineer at FloraPulse, 
              developing real-time IoT dashboards that provide growers with 
              actionable irrigation insights from sensor data across multiple regions.
              </p>
              <p className="mt-6 text-lg text-left leading-8 text-black">
                Outside of work, I enjoy watching movies, playing tennis, and cooking new recipes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default AboutMe;
