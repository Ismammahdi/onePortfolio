import heroimg from "../assets/portfolio/proffetional_ismam.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {
  return (
    <div
      name="Home"
      className="flex h-screen w-full bg-gradient-to-b from-black to-gray-800 via-black"
    >
      <div className="max-w-screen-lg mx-auto px-4 flex flex-col items-center h-full justify-center md:flex-row">
        <div className=" flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I am a Junior Frontend Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 8 months of experience in front-end development, working on
            web applications using React.js, Tailwind CSS, and JavaScript. I am
            passionate about creating dynamic and responsive user interfaces.
          </p>
          <div>
            <button className="group text-white flex gap-2 w-fit px-6 py-3 my-2 rounded-md items-center bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <FaArrowRightLong size={25} />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={heroimg}
            alt="Ismams profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full  object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
