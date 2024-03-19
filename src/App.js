import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from "./container";
// import {
//   AboutUs,
//   Chef,
//   FindUs,
//   Footer,
//   Gallery,
//   Header,
//   Intro,
//   Laurels,
//   SpecialMenu,
// } from "./container";
// import { Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </>
  );
}

export default App;
