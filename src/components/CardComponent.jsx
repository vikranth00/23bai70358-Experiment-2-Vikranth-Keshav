function CardComponent({ title, text }) {
  return (
    <div className="col-md-4 mb-4">
      <div 
        className="text-white p-4 h-100"
        style={{
          borderRadius: "18px",
          background: "linear-gradient(135deg, #1f3c4c, #2c5364)",
          boxShadow: "0 10px 25px rgba(0,0,0,0.4)"
        }}
      >
        <h4 className="mb-3">{title}</h4>
        <p className="mb-4">{text}</p>
        <button className="btn btn-outline-warning w-100">
          Click to Open
        </button>
      </div>
    </div>
  )
}

export default CardComponent;
