import image from "../assets/discover.webp"
import image2 from "../assets/timetable.webp";

export function Discover() {
    function App() {
      return window.open("https://app.mealmasterbot.com");
    }
    return (
      <div className="flex justify-center items-center flex-col">
        <section className="bg-white dark:bg-gray-900 flex justify-center items-center flex-col">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Here’s What You’ll Discover with SkillNet:
              </h2>
              <ul className="list-disc ml-10">
                <li className="p-2">
                    How SkillNet Simplifies{" "}
                  <span className="font-semibold text-purple-400">
                    Organizing Lessons, Trainings, and Group Activities.
                  </span>
                </li>
                <li className="p-2">
                    Tools for Seamless Collaboration Between{" "}
                  <span className="font-semibold text-purple-400">
                    Organizers, Students, and Group Members.
                  </span>
                </li>
                <li className="p-2">
                    Ways to Use the Platform to{" "}
                  <span className="font-semibold text-purple-400">
                  Save Time, Stay Organized,
                  </span>{" "}
                  and Enhance Learning Experiences.
                </li>
                <li className="p-2">
                    Easy Steps to Get Started and Set Up Your Account with Secure Auth0 Authentication.
                </li>
                <li className="p-2">
                Exciting Features for{" "}
                  <span className="font-semibold text-purple-400">
                  Joining Groups, Exploring Interests, and Unlocking New Opportunities.
                  </span>{" "}
                </li>
              </ul>
            </div>
            <div className="gap-4 mt-8">
              <img
                className="w-[60rem] rounded-2xl"
                src={image}
                alt="office content 1"
              />
            </div>
          </div>
          <a
            onClick={App}
            className="inline-block cursor-pointer rounded-lg bg-purple-400 px-6 py-3.5 text-center font-medium text-white hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Join SkillNet for Free
          </a>
        </section>
        <div className="max-w-screen-md px-4 lg:px-0 flex justify-center items-center flex-col mb-2 lg:mb-2 mt-8 lg:mt-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold">
                Tired of the hassle of managing lessons and trainings?     
            </h2>
          <p className="text-lg">
            Whether you're organizing events or joining groups, SkillNet is here to streamline your schedule and enhance your learning experience.
          </p>
        </div>
        <div className="static md:relative max-w-screen-md px-4 lg:px-0 flex justify-center items-center flex-col mb-8 lg:mb-8 mt-8 lg:mt-8">
          <img
            src={image2}
            alt="office content 1"
            className="hidden md:block w-full h-auto rounded-2xl object-cover"
          />
          <div className="static md:absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-6 rounded-2xl">
            <p className="text-lg mt-5">
                In Europe,{" "}
                tens of millions of students and organizers
              face the challenge of managing lessons, trainings, and group activities. From diverse learning styles to busy schedules, staying organized can feel overwhelming.
            </p>
            <p className="text-lg mt-5">
                SkillNet is designed to{" "}
                designed to cater to all these needs
              simplify these challenges. It enables organizers to manage events effortlessly while empowering students and members to join groups, explore interests, and stay connected. With SkillNet, you’ll save time, boost collaboration, and unlock endless opportunities for growth—all in one digital platform.
              {" "}
            </p>
          </div>
        </div>
        <div className="max-w-screen-md px-4 lg:px-0 flex justify-center items-center flex-col">
          <p className="text-lg mt-5">
          Transform how you manage lessons, trainings, and group activities.  and make organizing and participating a seamless, interactive, and enjoyable experience for everyone.{" "}
            <a
              className="font-semibold text-purple-400 underline"
              href="https://app.mealmasterbot.com"
            >
                Join SkillNet            
            </a>{" "}
            and make organizing and participating a seamless, interactive, and enjoyable experience for everyone.
          </p>
        </div>
      </div>
    );
  }