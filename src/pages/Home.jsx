import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import CardComponent from "../components/CardComponent";
import Footer from "../components/Footer";

function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "#0f2027" }}>
      <Navbar />
      <HeroSection />

      <div className="container-fluid px-5 pb-5">
        <div className="row text-center text-white mb-4">
          <h2 className="fw-bold">Featured Mods</h2>
          <p className="text-muted">Tap to explore premium versions</p>
        </div>

        <div className="row">
          <CardComponent 
            title="CapCut Pro (Free Mod)"
            text="Unlocked premium effects, no watermark, all features enabled."
          />
          <CardComponent 
            title="Adobe After Effects Pro"
            text="Professional motion graphics and VFX tools unlocked."
          />
          <CardComponent 
            title="Adobe Lightroom Pro"
            text="Premium photo editing with all presets unlocked."
          />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home;
