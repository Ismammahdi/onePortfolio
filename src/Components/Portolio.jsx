import ReactWeather from "../assets/portfolio/reactWeather.jpg";
import navBar from "../assets/portfolio/navbar.jpg";
import parallax from "../assets/portfolio/reactParallax.jpg";
import smooth from "../assets/portfolio/reactSmooth.jpg";
import node from "../assets/portfolio/installNode.jpg";
import desTruct from "../assets/portfolio/arrayDestruct.jpg";

const Portolio = () => {
  const portfolios = [
    {
      id: 1,
      src: ReactWeather,
    },
    {
      id: 2,
      src: navBar,
    },
    {
      id: 3,
      src: parallax,
    },
    {
      id: 4,
      src: smooth,
    },
    {
      id: 5,
      src: node,
    },
    {
      id: 6,
      src: desTruct,
    },
  ];
  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-black to-gray-800 text-white "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8
           px-12 sm:px-0"
        >
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="ismam"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portolio;
