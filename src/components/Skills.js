export default function Skills() {
    return (
    <section id="skills" className="scroll-mt-24 min-h-[50vh] py-8">
      <div className="bg-white">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-* px-6 pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <div className="flex flex-col lg:flex-row lg:items-start lg:gap-6 lg:pt-16 lg:w-full">
              <div className="mx-auto max-w-md lg:max-w-full lg:mx-0 lg:flex-auto lg:pt-16 lg:text-left">
                {/* Skills List */}
                <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl mb-4">
                  My Skills
                </h2>
                <div className="mt-6 border-t border-gray-800">
                  <dl className="divide-y divide-gray-800">
                    <div className="pr-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-lg font-medium leading-6 text-gray-900">Languages</dt>
                      <dd className="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        TypeScript, JavaScript, Python, Java, C++, C, SQL, HTML/CSS
                      </dd>
                    </div>
                    <div className="pr-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-lg font-medium leading-6 text-gray-900">Frameworks/Libraries</dt>
                      <dd className="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        React, React Native, Node.js, Next.js, Express.js, Svelte, Redux, Flask, Tailwind CSS
                      </dd>
                    </div>
                    <div className="pr-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-lg font-medium leading-6 text-gray-900">AI/ML</dt>
                      <dd className="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        LangChain, OpenAI API, Pandas, NumPy, Scikit-learn
                      </dd>
                    </div>
                    <div className="pr-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-lg font-medium leading-6 text-gray-900">Cloud & Databases</dt>
                      <dd className="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        AWS, GCP, Docker, PostgreSQL, MySQL, MongoDB, Firebase, Supabase, Pinecone, Weaviate
                      </dd>
                    </div>
                    <div className="pr-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-lg font-medium leading-6 text-gray-900">Developer Tools</dt>
                      <dd className="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        Git, GitHub Actions, Jira, Postman, Linux/Bash
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    );
  }
  