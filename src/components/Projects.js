import React from 'react';
import bctp from '../assets/bctp.png';
import mm from '../assets/melodyminer.png';
import indev from '../assets/in-development.png';
import Tag from './Tag'


export default function Projects() {
  return (
    <section id="projects">
      <div className="bg-white">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-* px-6 pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:px-24 lg:pt-0">
            <div className="flex flex-col items-start lg:flex-row lg:items-start lg:gap-6 lg:pt-16 lg:w-full">
              <div className="mx-auto max-w-md lg:max-w-full lg:mx-0 lg:flex-auto lg:pt-16 lg:text-left">
                <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl mb-8">
                  My Projects
                </h2>

                <div className="flex gap-6 lg:flex-row flex-col">

                  {/* Semantic Search Project */}
                  <a href="https://github.com/KunalLohtia" target="_blank">
                    <div className="flex-1 border border-gray-200 p-6 rounded-md bg-gray-50 transition-transform duration-200 hover:scale-105 min-h-full">
                      <div className="flex items-end">
                        <h3 className="text-2xl font-bold leading-7 text-gray-900">Semantic Search Web App (in development)</h3>
                      </div>
                      <div className="mt-4 flex flex-wrap">
                        <Tag text="Flask" />
                        <Tag text="React.js" />
                        <Tag text="MySQL" />
                        <Tag text="PineCone" />
                        <Tag text="OpenAI API" />
                      </div>
                      <p className="mt-4 text-md leading-6 text-gray-700">
                        A web app with an AI chatbot that allows businesses to upload and analyze their e-commerce sales data.
                      </p>
                      <div className="mt-4 w-full max-w-xs mx-auto sm:max-w-sm lg:max-w-md h-48">
                        <img 
                          src={indev} 
                          alt="In development project" 
                          className="object-contain w-full h-full" 
                        />
                      </div>
                    </div>
                  </a>

                  {/* Breast Cancer Tumor Predictor */}
                  <a href="https://github.com/KunalLohtia/Breast-Cancer-Tumor-Predictor" target="_blank">
                    <div className="flex-1 border border-gray-200 p-6 rounded-md bg-gray-50 transition-transform duration-200 hover:scale-105 min-h-full">
                      <div className="flex items-end">
                        <h3 className="text-2xl font-bold leading-7 text-gray-900">Breast Cancer Tumor Predictor</h3>
                      </div>
                      <div className="mt-4 flex flex-wrap">
                        <Tag text="Flask" />
                        <Tag text="HTML/CSS" />
                        <Tag text="Pandas" />
                        <Tag text="NumPy" />
                        <Tag text="Scikit-learn" />
                      </div>
                      <p className="mt-4 text-md leading-6 text-gray-700">
                        Logistic Regression and Artificial Neural Network models that predict breast cancer tumor diagnoses.
                      </p>
                      <div className="mt-4 w-full max-w-xs mx-auto sm:max-w-sm lg:max-w-md h-48">
                        <img 
                          src={bctp} 
                          alt="Breast Cancer Tumor Predictor" 
                          className="object-contain w-full h-full" 
                        />
                      </div>
                    </div>
                  </a>

                  {/* Melody Miner */}
                  <a href="https://github.com/KunalLohtia/MelodyMiner" target="_blank">
                    <div className="flex-1 border border-gray-200 p-6 rounded-md bg-gray-50 transition-transform duration-200 hover:scale-105 min-h-full">
                      <div className="flex items-end">
                        <h3 className="text-2xl font-bold leading-7 text-gray-900">Melody Miner</h3>
                      </div>
                      <div className="mt-4 flex flex-wrap">
                        <Tag text="React Native" />
                        <Tag text="Redux" />
                        <Tag text="Firebase" />
                        <Tag text="Oauth 2.0" />
                        <Tag text="Spotify API" />
                      </div>
                      <p className="mt-4 text-md leading-6 text-gray-700">
                        A music discovery app to generate personalized song recommendations based on the user's listening history.
                      </p>
                      <div className="mt-4 w-full max-w-xs mx-auto sm:max-w-sm lg:max-w-md h-48">
                        <img 
                          src={mm} 
                          alt="Melody Miner" 
                          className="object-contain w-full h-full" 
                        />
                      </div>
                    </div>
                  </a>

                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
