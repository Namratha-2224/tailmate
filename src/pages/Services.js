import "./Page.css";
import { useNavigate } from "react-router-dom";

function Services({ user }) {
  const navigate = useNavigate();

  function handleBook(serviceName) {
    if (!user) {
      navigate("/login", { state: { from: "/services" } });

      return;
    }
    alert(`Booking request for ${serviceName}`);
  }

  const services = [
    {
      title: "Grooming",
      icon: "✂️",
      desc: "Professional dog grooming services",
      duration: "45 mins",
      price: "₹499"
    },
    {
      title: "Training",
      icon: "🎓",
      desc: "Obedience & behavior training",
      duration: "1 hour",
      price: "₹799"
    },
    {
      title: "Daycare",
      icon: "🏠",
      desc: "Safe and fun daycare for dogs",
      duration: "Full Day",
      price: "₹999"
    },
    {
      title: "Dog Walking",
      icon: "🚶‍♂️",
      desc: "Daily walks with trusted handlers",
      duration: "30 mins",
      price: "₹299"
    }
  ];

  return (
    <div className="page">
      <h1>Services 🐾</h1>
      <p>Care, comfort, and services your dog deserves</p>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h2>{service.icon} {service.title}</h2>
            <p>{service.desc}</p>

            <div className="service-meta">
              <span>⏱ {service.duration}</span>
              <span> 💰{service.price}</span>
            </div>

            <button onClick={() => handleBook(service.title)}>
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
