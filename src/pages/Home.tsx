import LeftMenu from '@/components/leftMenu';

const Avatar = ({ src }) => (
  <div className="h-9 w-9">
    <img className="object-cover w-full h-full rounded-full" src={src} />
  </div>
);

const TaskCard = ({ title, deadline, hours, project }) => (
  <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
    <div className="flex justify-between">
      <div className="text-gray-400 text-xs">{project}</div>
      <div className="text-gray-400 text-xs">{hours}h</div>
    </div>
    <a href="javascript:void(0)" className="font-bold hover:text-yellow-800 hover:underline">
      {title}
    </a>
    {deadline && (
      <div className="text-sm text-gray-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="currentColor"
          className="text-gray-800 inline align-middle mr-1"
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
        </svg>
        {deadline}
      </div>
    )}
  </div>
);

const StatCard = ({ value, description }) => (
  <div className="p-4 bg-yellow-100 rounded-xl text-gray-800">
    <div className="font-bold text-2xl leading-none">{value}</div>
    <div className="mt-2">{description}</div>
  </div>
);

const Home = () => (
  <div className="relative bg-yellow-50 overflow-hidden h-screen w-screen">
    <LeftMenu />
    <main className="ml-60 pt-16 max-h-screen overflow-auto">
      <div className="px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 mb-5">
            <h1 className="text-3xl font-bold mb-10">Home</h1>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="text-gray-400 text-xs">
                  Members
                  <br />
                  connected
                </div>
                <div className="h-100 border-l mx-4"></div>
                <div className="flex -space-x-3">
                  <Avatar src="https://ui-avatars.com/api/?background=random" />
                  <Avatar src="https://ui-avatars.com/api/?background=random" />
                </div>
              </div>
              <div className="flex items-center gap-x-2">
                <button className="inline-flex items-center justify-center h-9 px-3 rounded-xl border hover:border-gray-400 text-gray-800 hover:text-gray-900 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    className="bi bi-chat-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
                  </svg>
                </button>
                <button className="inline-flex items-center justify-center h-9 px-5 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition">
                  Open
                </button>
              </div>
            </div>
            <hr className="my-10" />
            <div className="grid grid-cols-2 gap-x-20">
              <div>
                <h2 className="text-2xl font-bold mb-4">Stats</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 p-4 bg-green-100 rounded-xl">
                    <div className="font-bold text-xl text-gray-800 leading-none">
                      Good day,
                      <br />
                      Kristin
                    </div>
                    <div className="mt-5">
                      <button className="inline-flex items-center justify-center py-2 px-3 rounded-xl bg-white text-gray-800 hover:text-green-500 text-sm font-semibold transition">
                        Start tracking
                      </button>
                    </div>
                  </div>
                  <StatCard value="20" description="Tasks finished" />
                  <StatCard value="5,5" description="Tracked hours" />
                  <div className="col-span-2 p-4 bg-purple-100 rounded-xl text-gray-800">
                    <div className="font-bold text-xl leading-none">
                      Your daily plan
                    </div>
                    <div className="mt-2">5 of 8 completed</div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Your tasks today</h2>
                <div className="space-y-4">
                  <TaskCard
                    title="Blog and social posts"
                    deadline="Deadline is today"
                    hours="4"
                    project="Number 10"
                  />
                  <TaskCard
                    title="New campaign review"
                    deadline="New feedback"
                    hours="7d"
                    project="Grace Aroma"
                  />
                  <TaskCard
                    title="Cross-platform and browser QA"
                    hours="2h"
                    project="Petz App"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default Home;
