import "./App.css";
import { Header } from "./components/Header";
import { IWillShare } from "./components/IWillShare";
import { Actions } from "./components/Actions";
import { Navbar } from "./components/Navbar";
import { FAQ } from "./components/FAQ";
import { Testimonial } from "./components/Testimonials";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <Header />
        <IWillShare />
        <Actions />
        <FAQ />
        <Testimonial />
      </div>
      <Footer />
    </div>
  );
}

export default App;
