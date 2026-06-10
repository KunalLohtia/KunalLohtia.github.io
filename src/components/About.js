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
                I'm a software engineer with a B.S. in Computer Science and a minor in Technology Management from UC Davis. 
                I've spent the last few years building web and mobile apps across agriculture, education, and e-commerce, usually owning both the engineering and the product side.
              </p>
              <p className="mt-6 text-lg text-left leading-8 text-black">
                Right now I'm at FloraPulse, where I build the FloraPulse web app that turns telemetry from IoT field sensors into irrigation insights growers can act on.
                Before that, I was an AI engineer on an AI course assistant platform and the technical product lead on a UC Davis student marketplace platform.
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
