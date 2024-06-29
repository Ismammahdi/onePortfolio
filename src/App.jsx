import "./App.css";
import { BrowserRouter } from "react-router-dom";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import SocialLinks from "./Components/SocialLinks";
import Home from "./Components/Home";
import Portolio from "./Components/Portolio";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>

        <Home></Home>
        <SocialLinks></SocialLinks>
        <About></About>
        <Portolio></Portolio>
        <Experience></Experience>
        <Contact></Contact>
      </BrowserRouter>
    </>
  );
}

export default App;
