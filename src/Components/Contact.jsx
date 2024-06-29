const Contact = () => {
  return (
    <div
    name="Contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-500
    p-4 text-white"
    >
      <div
        className="flex flex-col items-center p-4 justify-center 
        max-w-screen-lg mx-auto h-full "
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">submit the form below to get tuched with me</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/paqgrwqa"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="w-[300px]  p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-[300px] my-2 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows={10}
              className="w-[300px] p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="bg-gradient-to-b  px-6 py-3 hover:scale-110 duration-300 from-cyan-500 to-blue-500 rounded-md my-8 mx-auto flex items-center">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
