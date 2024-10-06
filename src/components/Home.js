import Kunal_Pic from '../assets/Kunal_Pic.JPG';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa';

export default function Home() {
    return (
        <div className="bg-white">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative isolate overflow-hidden bg-* px-6 pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
              {/* Intro */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:items-center lg:gap-6 lg:py-16">
                <div className="mx-auto max-w-md lg:mx-0 lg:flex-auto lg:py-16 lg:text-left">
                  <h2 className="text-3xl tet-left font-bold tracking-tight text-black sm:text-4xl mb-4">
                    Hello, I'm Kunal 👋
                  </h2>
                  <div>
                    <div className="mt-6 flex items-left justify-start gap-x-2">
                      <a className="flex items-center border border-black rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white whitespace-nowrap">
                        <FaMapMarkerAlt className="w-4 h-4 mr-2"/>
                        San Francisco
                      </a>
                      <a href="https://courseassistai.com/" target="_blank" className="flex items-center border border-black rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white whitespace-nowrap">
                        <FaBriefcase className="w-4 h-4 mr-2"/>
                        CourseAssist
                      </a>
                      <a href="https://www.linkedin.com/in/klohtia/" target="_blank" className="flex items-center border border-black rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white whitespace-nowrap">
                        <FaLinkedin className="w-5 h-5" />
                      </a>
                      <a href="https://github.com/KunalLohtia" target="_blank" className="flex items-center border border-black rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white whitespace-nowrap">
                        <FaGithub className="w-5 h-5" />
                    </a>
                    </div>
                 </div>
                  <p className="mt-6 text-lg text-left leading-8 text-black">
                  I'm a software engineer & product manager,
                  blending technical expertise with product leadership to build innovative solutions.
                  </p>
                </div>
    
                {/* Image Section */ }
                <div className="relative mt-16 h-80 lg:mt-0 "> 
                  <img
                    alt="Kunal Picture"
                    src={Kunal_Pic}
                    className="lg:w-96 w-80 h-auto mx-auto shadow-lg rounded-lg border border-gray-200 transform hover:translate-y-1 hover:scale-105 transition duration-300 rounded-md bg-white/5 ring-1 ring-white/10 lg:h-auto lg:ml-40"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }