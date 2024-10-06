import productbudsLogo from '../assets/productbuds_logo.jpg'
import instateamLogo from '../assets/instateam_logo.jpg'
import aggieWorksLogo from '../assets/aggieworks_logo.jpg'
import courseassistLogo from '../assets/courseassist_logo.webp'

export default function Experiences() {
  return (
    <section id="experience">
    <div className="bg-white">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-* px-6 pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="flex flex-col items-start lg:flex-row lg:gap-6 lg:py-16 lg:w-full">
            <div className="mx-auto max-w-md lg:max-w-full lg:mx-0 lg:flex-auto lg:py-16 lg:text-left">
              
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl mb-8">
                My Experiences
              </h2>

              <div className="flex relative gap-6">
                {/* Vertical Timeline */}
                <div className="w-8 flex flex-col items-center">
                  <div className="h-full border-l-2 border-gray-900"></div> 
                </div>

                {/* Experiences Boxes */}
                <div className="flex flex-col gap-12 w-full"> 

                  {/* CourseAssist Box */}
                  <a href="https://courseassistai.com/" target="_blank">
                  <div className="relative flex items-start space-x-4">
                    <div className="border border-gray-200 p-6 rounded-md bg-gray-50 w-full transform transition-transform duration-200 hover:scale-105">
                      <div className="flex items-end">
                        <img 
                          src={courseassistLogo} 
                          alt="CourseAssist Logo" 
                          className="h-8 w-8 mr-2" 
                        />
                        <h3 className="text-2xl font-bold leading-7 text-gray-900">CourseAssist</h3>
                      </div>
                      <p className="text-lg font-semibold leading-6 text-indigo-600 mt-2">Software Engineer</p>
                      <p className="text-md text-gray-500 mt-2">Jul 2024 - Present</p>
                      <p className="mt-4 text-md leading-6 text-gray-700">
                        Integrated OpenAI's GPT-4o LLM and RAG to sort student questions by semantic similarity, along with REST APIs to connect various services to "CourseAssist AI," an AI-powered course assistant.
                      </p>
                    </div>
                  </div>
                  </a>

                  {/* AggieWorks Box */}
                  <a href="https://aggieworks.org/products/aggieexchange" target="_blank">
                  <div className="relative flex items-start space-x-4">
                    <div className="border border-gray-200 p-6 rounded-md bg-gray-50 w-full transform transition-transform duration-200 hover:scale-105">
                      <div className="flex items-end"> 
                        <img 
                          src={aggieWorksLogo} 
                          alt="AggieWorks Logo" 
                          className="h-8 w-8 mr-2" 
                        />
                        <h3 className="text-2xl font-bold leading-7 text-gray-900">AggieWorks</h3>
                      </div>
                      <p className="text-lg font-semibold leading-6 text-indigo-600 mt-2">Technical Product Manager</p>
                      <p className="text-md text-gray-500 mt-2">Jan 2023 - Jan 2024</p>
                      <p className="mt-4 text-md leading-6 text-gray-700">
                        Defined technical requirements, features, and system design while managing the product roadmap for "AggieExchange," UC Davis's student e-commerce platform.                   
                      </p>
                    </div>
                  </div>
                  </a>

                  {/* Xymob Box */}
                  <a href="https://apps.apple.com/us/app/instateam-sports-team-manager/id969899842" target="_blank">
                  <div className="relative flex items-start space-x-4">
                    <div className="border border-gray-200 p-6 rounded-md bg-gray-50 w-full transform transition-transform duration-200 hover:scale-105">
                      <div className="flex items-end"> 
                        <img 
                          src={instateamLogo} 
                          alt="Xymob Logo" 
                          className="h-8 w-8 mr-2" 
                        />
                        <h3 className="text-2xl font-bold leading-7 text-gray-900">Xymob, Inc.</h3>
                      </div>
                      <p className="text-lg font-semibold leading-6 text-indigo-600 mt-2">Software Engineer Intern</p>
                      <p className="text-md text-gray-500 mt-2">Jan 2022 - Jan 2023</p>
                      <p className="mt-4 text-md leading-6 text-gray-700">
                        Developed the team roster and calendar features, along with various UI components in React Native for "InstaTeam," a mobile app designed for managing sports teams.                     
                      </p>
                    </div>
                  </div>
                  </a>


                  
                  {/* Product Buds Box */}
                  <a href="https://www.linkedin.com/company/productbuds/posts/?feedView=all" target="_blank">
                  <div className="relative flex items-start space-x-4">
                    <div className="border border-gray-200 p-6 rounded-md bg-gray-50 w-full transform transition-transform duration-200 hover:scale-105">
                      <div className="flex items-end"> 
                        <img 
                          src={productbudsLogo} 
                          alt="Product Buds Logo" 
                          className="h-8 w-8 mr-2" 
                        />
                        <h3 className="text-2xl font-bold leading-7 text-gray-900">Product Buds</h3>
                      </div>
                      <p className="text-lg font-semibold leading-6 text-indigo-600 mt-2">Product Manager</p>
                      <p className="text-md text-gray-500 mt-2">Oct 2022 - Dec 2022</p>
                      <p className="mt-4 text-md leading-6 text-gray-700">
                        Led the conceptualization and development of 'Referral Buddy', a referral platform aimed at enhancing job search efficiency.
                      </p>
                    </div>
                  </div>
                  </a>
                  
                </div> 
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
