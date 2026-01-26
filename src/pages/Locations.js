import "./Page.css";

function Locations() {
  const hospitals = [
    {
      name: "Happy Paws Veterinary Hospital",
      area: "Bhimavaram",
      contact: "98765 43210"
    },
    {
      name: "Care & Cure Pet Clinic",
      area: "Palakollu",
      contact: "91234 56789"
    },
    {
      name: "PetLife Veterinary Center",
      area: "Tadepalligudem",
      contact: "99887 66554"
    }
  ];

  const adoptionCenters = [
    {
      name: "Blue Cross of India",
      area: "Andhra Pradesh",
      contact: "04446274999"
    },
    {
      name: "People For Animals (PFA)",
      area: "West Godavari",
      contact: "9820126026"
    },
    {
      name: "Friendicoes SECA",
      area: "South India",
      contact: "01124320707"
    }
  ];

  return (
    <div className="page">
      <h1>Locations📍</h1>
      <p>Veterinary hospitals and adoption centers near you</p>

      <div className="locations-grid">
        {/* LEFT COLUMN - Hospitals */}
        <div className="location-column">
          <h2 className="column-title">🏥 Veterinary Hospitals</h2>

          {hospitals.map((hospital, index) => (
            <div className="service-card" key={index}>
              <h3>{hospital.name}</h3>
              <span className="badge">Veterinary Hospital</span>
              <p>{hospital.area}</p>
              <p>📞 {hospital.contact}</p>
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN - Adoption Centers */}
        <div className="location-column">
          <h2 className="column-title">🐾 Adoption Centers</h2>

          {adoptionCenters.map((center, index) => (
            <div className="service-card" key={index}>
              <h3>{center.name}</h3>
              <span className="badge">Adoption Center</span>
              <p>{center.area}</p>
              <p>📞 {center.contact}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Locations;
