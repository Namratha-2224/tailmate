import "./Locations.css";

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
    <div className="locations-page">
      <h1>Locations 📍</h1>
      <p>Veterinary hospitals and adoption centers near you</p>

      {/* HEADINGS */}
      <div className="location-headings">
        <h2>🏥 Veterinary Hospitals</h2>
        <h2>🐾 Adoption Centers</h2>
      </div>

      <div className="location-divider"></div>

      {/* ROW-WISE CARDS */}
      <div className="locations-grid">
        {hospitals.map((hospital, index) => {
          const center = adoptionCenters[index];

          return (
            <>
              {/* Hospital Card */}
              <div className="location-card" key={`h-${index}`}>
                <h3>{hospital.name}</h3>
                <span className="location-badge">Veterinary Hospital</span>
                <p>{hospital.area}</p>
                <p>📞 {hospital.contact}</p>
              </div>

              {/* Adoption Card */}
              <div className="location-card" key={`a-${index}`}>
                <h3>{center.name}</h3>
                <span className="location-badge">Adoption Center</span>
                <p>{center.area}</p>
                <p>📞 {center.contact}</p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Locations;