import productbudsLogo from '../assets/productbuds_logo.jpg';
import instateamLogo from '../assets/instateam_logo.jpg';
import aggieWorksLogo from '../assets/aggieworks_logo.jpg';
import courseassistLogo from '../assets/courseassist_logo.webp';
import florapulseLogo from '../assets/florapulse_logo.png';

export default function Experiences() {
  return (
    <section id="experience" className="scroll-mt-24 min-h-[50vh] py-8">
      <div className="bg-white">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-* px-6 pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <div className="flex flex-col items-start lg:flex-row lg:gap-6 lg:pt-16 lg:w-full">
              <div className="mx-auto max-w-md lg:max-w-full lg:mx-0 lg:flex-auto lg:pt-16 lg:text-left">
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
                    {/* FloraPulse Box */}
                    <a href="https://florapulse.com/" target="_blank" rel="noreferrer">
                      <div className="relative flex items-start space-x-4 h-full">
                        <div className="border border-gray-200 p-6 rounded-md bg-gray-50 w-full min-h-full transform transition-transform duration-200 hover:scale-105 flex-1">
                          <div className="flex items-end">
                            <img
                              src={florapulseLogo}
                              alt="FloraPulse Logo"
                              className="h-8 w-8 mr-2"
                            />
                            <h3 className="text-2xl font-bold leading-7 text-gray-900">FloraPulse</h3>
                          </div>
                          <p className="text-lg font-semibold leading-6 text-blue-800 mt-2">Software Engineer</p>
                          <p className="text-md text-gray-500 mt-2">Jan 2025 – Present</p>
                          <p className="mt-4 text-md leading-6 text-gray-700">
                          - Built a cross-platform mobile dashboard using React Native and Firebase to visualize live data from IoT irrigation sensors.
                          </p>
                          <p className="mt-2 text-md leading-6 text-gray-700">
                          - Developed an AI support chatbot using OpenAI API and Pinecone to assist growers via the FloraPulse website, significantly reducing manual troubleshooting.
                          </p>
                        </div>
                      </div>
                    </a>


                    {/* CourseAssist Box */}
                    <a href="https://courseassistai.com/" target="_blank">
                      <div className="relative flex items-start space-x-4 h-full">
                        <div className="border border-gray-200 p-6 rounded-md bg-gray-50 w-full min-h-full transform transition-transform duration-200 hover:scale-105 flex-1">
                          <div className="flex items-end">
                            <img
                              src={courseassistLogo}
                              alt="CourseAssist Logo"
                              className="h-8 w-8 mr-2"
                            />
                            <h3 className="text-2xl font-bold leading-7 text-gray-900">CourseAssist</h3>
                          </div>
                          <p className="text-lg font-semibold leading-6 text-blue-800 mt-2">Software Engineer (AI)</p>
                          <p className="text-md text-gray-500 mt-2">Jul 2024 - Jan 2025</p>
                          <p className="mt-4 text-md leading-6 text-gray-700">
                          - Developed a semantic chunking and search system using OpenAI’s GPT-4 and RAG pipelines to help students query course materials. 
                          </p>
                          <p className="mt-4 text-md leading-6 text-gray-700">
                          - Integrated Weaviate Vector DB, OpenAI API, LangChain, and Stripe for scalable AI features and billing.
                          </p>
                        </div>
                      </div>
                    </a>

                    {/* AggieWorks Box */}
                    <a href="https://aggieworks.org/products/aggieexchange" target="_blank">
                      <div className="relative flex items-start space-x-4 h-full">
                        <div className="border border-gray-200 p-6 rounded-md bg-gray-50 w-full min-h-full transform transition-transform duration-200 hover:scale-105 flex-1">
                          <div className="flex items-end">
                            <img
                              src={aggieWorksLogo}
                              alt="AggieWorks Logo"
                              className="h-8 w-8 mr-2"
                            />
                            <h3 className="text-2xl font-bold leading-7 text-gray-900">AggieWorks</h3>
                          </div>
                          <p className="text-lg font-semibold leading-6 text-blue-800 mt-2">Technical Product Manager</p>
                          <p className="text-md text-gray-500 mt-2">Jan 2023 - Jan 2024</p>
                          <p className="mt-4 text-md leading-6 text-gray-700">
                          - Spearheaded product strategy and feature design for AggieExchange, a UC Davis student-focused e-commerce platform. 
                          </p>
                          <p className="mt-4 text-md leading-6 text-gray-700">
                          - Translated user needs into technical specs and managed engineering sprints using Jira.
                          </p>
                        </div>
                      </div>
                    </a>

                    {/* Xymob Box */}
                    <a href="https://apps.apple.com/us/app/instateam-sports-team-manager/id969899842" target="_blank">
                      <div className="relative flex items-start space-x-4 h-full">
                        <div className="border border-gray-200 p-6 rounded-md bg-gray-50 w-full min-h-full transform transition-transform duration-200 hover:scale-105 flex-1">
                          <div className="flex items-end">
                            <img
                              src={instateamLogo}
                              alt="Xymob Logo"
                              className="h-8 w-8 mr-2"
                            />
                            <h3 className="text-2xl font-bold leading-7 text-gray-900">Xymob, Inc.</h3>
                          </div>
                          <p className="text-lg font-semibold leading-6 text-blue-800 mt-2">Software Engineer Intern</p>
                          <p className="text-md text-gray-500 mt-2">Jan 2022 - Jan 2023</p>
                          <p className="mt-4 text-md leading-6 text-gray-700">
                          - Implemented core calendar and roster features for InstaTeam iOS/Android app in React Native. 
                          </p>
                          <p className="mt-4 text-md leading-6 text-gray-700">
                          - Enhanced UI responsiveness and streamlined team management for over 10,000 active users.                          
                          </p>
                        </div>
                      </div>
                    </a>

                    {/* Product Buds Box */}
                    <a href="https://www.linkedin.com/company/productbuds/posts/?feedView=all" target="_blank">
                      <div className="relative flex items-start space-x-4 h-full">
                        <div className="border border-gray-200 p-6 rounded-md bg-gray-50 w-full min-h-full transform transition-transform duration-200 hover:scale-105 flex-1">
                          <div className="flex items-end">
                            <img
                              src={productbudsLogo}
                              alt="Product Buds Logo"
                              className="h-8 w-8 mr-2"
                            />
                            <h3 className="text-2xl font-bold leading-7 text-gray-900">Product Buds</h3>
                          </div>
                          <p className="text-lg font-semibold leading-6 text-blue-800 mt-2">Product Manager</p>
                          <p className="text-md text-gray-500 mt-2">Oct 2022 - Dec 2022</p>
                          <p className="mt-4 text-md leading-6 text-gray-700">
                          - Led ideation and early design sprints for Referral Buddy, a tool connecting job seekers with employee referrers. 
                          </p>
                          <p className="mt-4 text-md leading-6 text-gray-700">
                          - Collaborated cross-functionally on user flows, wireframes, and MVP specs.                          
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
