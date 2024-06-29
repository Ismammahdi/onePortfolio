import html from "../assets/tech/html.png";
import css from "../assets/tech/css.png";
import javascript from "../assets/tech/javascript.png";
import react from "../assets/tech/react.png";
import tailwind from "../assets/tech/tailwind.png";

const Experience = () => {
  const tech = [
    {
      id: 1,
      title: "Html",
      src: html,
      style: "shadow-orange-500",
    },
    {
      id: 2,
      title: "CSS",
      src: css,
      style: "shadow-blue-500",
    },
    {
      id: 3,
      title: "JavaScript",
      src: javascript,
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      title: "React js",
      src: react,
      style: "shadow-black",
    },
    {
      id: 5,
      title: "Tailwind",
      src: tailwind,
      style: "shadow-indigo-500",
    },
  ];
  return (
    <div
      name="Experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">This are the technology I have worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 ">
          {tech.map(({ id, title, src, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="ismam" className="w-20 mx-auto " />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
