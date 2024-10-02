import Header from "./components/header"
import Footer from "./components/footer"
import "./globals.css"

export default function Home() {
  return (
    <div>
      <Header/>
      <div className="pageContainer">
        <div className="parentContainer">
        Hello Everyone!
        <br />
        My Name Is <span className="pinkColor">Areeba</span>
        <br />I am Student of GIAIC <span className="pinkColor">Second Quater</span>
      </div>

      <div className="imageContainer">
        <img src="profile.jpg" alt="profilepicture" />
      </div>
      <Footer/>
    </div>
    </div>
  );
  }
