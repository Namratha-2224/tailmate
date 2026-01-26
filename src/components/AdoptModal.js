import "./AdoptModal.css";
import { useState } from "react";

function AdoptModal({ dog, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reason: ""
  });

  if (!dog) return null;

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
  e.preventDefault();

  const newRequest = {
    dogName: dog.name,
    breed: dog.breed,
    age: dog.age,
    ...formData,
    date: new Date().toLocaleString()
  };

  const existingRequests =
    JSON.parse(localStorage.getItem("adoptionRequests")) || [];

  const updatedRequests = [...existingRequests, newRequest];

  localStorage.setItem(
    "adoptionRequests",
    JSON.stringify(updatedRequests)
  );

  alert(`Adoption request saved for ${dog.name} 🐶`);
  onClose();
}


  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Adopt {dog.name} 🐾</h2>
        <p><strong>Breed:</strong> {dog.breed}</p>
        <p><strong>Age:</strong> {dog.age} years</p>

        <form onSubmit={handleSubmit} className="adopt-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <textarea
            name="reason"
            placeholder="Why do you want to adopt?"
            value={formData.reason}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit Request</button>
        </form>

        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default AdoptModal;
