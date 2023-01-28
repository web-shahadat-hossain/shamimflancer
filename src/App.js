import "./App.css";
import Blog from "./Component/Blog/Blog";
import Contact from "./Component/Contact/Contact";
import Features from "./Component/Features/Features";
import Footer from "./Component/Footer";
import Header from "./Component/Head/Header";
import Home from "./Component/Hero/Home";
import Portfolio from "./Component/Portfolio/Portfolio";
import Resume from "./Component/Resume/Resume";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Features />
      <Portfolio />
      <Resume />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
