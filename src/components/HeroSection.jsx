function HeroSection() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "60vh" }}>
      <div 
        className="text-center text-white p-5"
        style={{
          width: "70%",
          maxWidth: "800px",
          borderRadius: "20px",
          background: "linear-gradient(135deg, #203a43, #2c5364)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
        }}
      >
        <h1 className="fw-bold mb-3">Welcome to the Free Club</h1>
        <p className="mb-4">Premium apps & tools — all in one place</p>
        <button className="btn btn-warning btn-lg">
          Join Now
        </button>
      </div>
    </div>
  )
}

export default HeroSection;
