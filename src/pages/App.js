import "../assets/css/styles.css";
import logos from "../assets/img/logo.png";
import Calender from "./Calender";
import Client from "./Client";
import Community from "./Community";
import Customer from "./Customer";
import Demo from "./Demo";
import Footer from "./Footer";
import Helping from "./Helping";
import Hero from "./Hero";
import Marketing from "./Marketing";
import Unlock from "./Unlock";

function App() {
  return (
    <>
      <div className="bg-silver">
        <div className="navbar container">
          <div className="left">
            <img className="logo" src={logos} alt="logo" />
          </div>
          <div className="center">
            <p className="menu active">Home</p>
            <p className="menu">Service</p>
            <p className="menu">Feature</p>
            <p className="menu">Product</p>
            <p className="menu">Testimonial</p>
            <p className="menu">FAQ</p>
          </div>
          <div className="right">
            <button className="btn-login">Login</button>
            <button className="btn-regis">Sign Up</button>
          </div>
        </div>
      </div>
      <Hero />
      <Client />
      <Community />
      <Unlock />
      <Helping />
      <Calender />
      <Customer />
      <Marketing />
      <Demo />
      <Footer />
    </>
  );
}

export default App;
