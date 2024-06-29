import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GrResume } from "react-icons/gr";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/feed/?trk=registration-frontend",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Ismammahdi",
    },
    {
      id: 3,
      child: (
        <>
          Mail <MdEmail size={30} />
        </>
      ),
      href: "https://ismammahdi47@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <GrResume size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden   lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center  w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] bg-gray-500 hover:rounded-md duration-300"
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
