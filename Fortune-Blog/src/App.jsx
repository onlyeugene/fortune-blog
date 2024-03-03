import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About/About";
import GetInTouch from "./Pages/GetInTouch/GetInTouch";
import Posts from "./Pages/Posts/Posts";
import Stories from "./Pages/Stories/Stories";
import Travels from "./Pages/Travels/Travels";
import HomeIndex from "./Pages/Home/HomeIndex";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route index element = {<HomeIndex/>} />

          {/* <Route path="about" element= {<About />} /> */}
          <Route path="about" element= {<About />} />
          <Route path="getintouch" element= {<GetInTouch />} />
          <Route path="posts" element= {<Posts />} />
          <Route path="stories" element= {<Stories />} />
          <Route path="travels" element= {<Travels/>} />
        </Routes>
        {/* <Footer/> */}
      </Router>
    </>
  );
}

export default App;
