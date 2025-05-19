import Kunal_Pic from '../assets/Kunal_Pic.JPG';
import { FaLinkedin, FaGithub, FaMapMarkerAlt, FaBriefcase, FaFileAlt } from 'react-icons/fa';

export default function Home() {
  return (
    <section id='home' className="scroll-mt-24 min-h-[50vh] py-8">
      <div className="bg-white">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden px-6 pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            {/* Intro */}
            <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:py-16">
              <div className="mx-auto max-w-md lg:mx-0 lg:flex-auto lg:text-left">
              <h2 className="text-3xl text-left font-bold tracking-tight text-black sm:text-4xl mb-4">
                Hello, I'm Kunal{' '}
                <span
                  style={{
                    display: 'inline-block',
                    transformOrigin: '70% 70%',
                    animation: 'wave 2s infinite',
                  }}
                >
                  👋
                </span>
              </h2>
              <style jsx>{`
                @keyframes wave {
                  0% { transform: rotate(0deg); }
                  15% { transform: rotate(15deg); }
                  30% { transform: rotate(-10deg); }
                  45% { transform: rotate(15deg); }
                  60% { transform: rotate(-10deg); }
                  75% { transform: rotate(15deg); }
                  100% { transform: rotate(0deg); }
                }
              `}</style>
                <div className="mt-6 flex flex-wrap justify-start gap-2">
                  <a className="flex items-center border border-black rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 whitespace-nowrap">
                    <FaMapMarkerAlt className="w-4 h-4 mr-2" />
                    San Francisco, CA
                  </a>
                {/* Resume button */}
                  <a
                    href="Kunal_Lohtia_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center border border-black rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 whitespace-nowrap"
                  >
                    <FaFileAlt className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/klohtia/" target="_blank" rel="noopener noreferrer" className="flex items-center border border-black rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 whitespace-nowrap">
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a href="https://github.com/KunalLohtia" target="_blank" rel="noopener noreferrer" className="flex items-center border border-black rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 whitespace-nowrap">
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>

                <p className="mt-6 text-lg text-left leading-8 text-black">
                  I'm a software engineer & product manager,
                  blending technical expertise with product leadership to build innovative solutions.
                </p>
              </div>

              {/* Profile Image */}
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto mt-10 lg:mt-0">
                <img
                  alt="Kunal Picture"
                  src={Kunal_Pic}
                  className="w-full h-auto shadow-lg rounded-lg border border-gray-200 transform hover:translate-y-1 hover:scale-105 transition duration-300"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
