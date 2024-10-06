export default function Skills() {
    return (
    <section id="skills">
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
                        JavaScript, Python, Java, Swift, Kotlin, HTML/CSS, C++, C, SQL, R, MATLAB
                      </dd>
                    </div>
                    <div className="pr-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-lg font-medium leading-6 text-gray-900">Frameworks</dt>
                      <dd className="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        React/React Native, Svelte, Redux, Node.js, Express.js, Flask
                      </dd>
                    </div>
                    <div className="pr-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-lg font-medium leading-6 text-gray-900">Databases</dt>
                      <dd className="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        MongoDB, Google Firebase, MySQL, SQLite, Prisma ORM, Pinecone, Weaviate
                      </dd>
                    </div>
                    <div className="pr-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-lg font-medium leading-6 text-gray-900">Developer Tools</dt>
                      <dd className="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        Jira (scrum), Git (CI/CD), Axios, Postman, Expo, Selenium
                      </dd>
                    </div>
                    <div className="pr-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-lg font-medium leading-6 text-gray-900">Other</dt>
                      <dd className="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        Pandas, NumPy, Scikit-learn, Langchain, Amplitude Analytics, Unix, Figma
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
  