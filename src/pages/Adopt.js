import "./Page.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DogCard from "../components/DogCard";
import AdoptModal from "../components/AdoptModal";

function Adopt({ user }) {
  const [selectedDog, setSelectedDog] = useState(null);
  const navigate = useNavigate();

  const dogs = [
    {
      name: "Sweety",
      age: 3,
      breed: "German Shepherd",
      image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=500&auto=format&fit=crop&q=60"
    },
    {
      name: "Tony",
      age: 4,
      breed: "Labrador",
      image: "https://images.unsplash.com/photo-1611254965886-e7caa829b627?w=500&auto=format&fit=crop&q=60"
    },
    {
      name: "Khalu",
      age: 1,
      breed: "Indie Dog",
      image: "https://images.unsplash.com/photo-1601216586144-1b2c8540851c?q=80&w=687&auto=format&fit=crop"
    },
    {
      name: "Bella",
      age: 2,
      breed: "Beagle",
      image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1074&auto=format&fit=crop"
    },
    {
      name: "Zara",
      age: 2,
      breed: "Golden Retriever",
      image: "https://images.unsplash.com/photo-1626736637845-53045bb9695b?w=500&auto=format&fit=crop&q=60"
    },
    {
      name: "Asher",
      age: 1,
      breed: "Bulldog",
      image: "https://images.unsplash.com/photo-1568315056770-f4a63027dcd3?w=500&auto=format&fit=crop&q=60"
    },
    {
      name: "Leo",
      age: 1,
      breed: "Shihtzu",
      image: "https://images.unsplash.com/photo-1589210043112-d4835d91b37a?q=80&w=1074&auto=format&fit=crop"
    },
    {
      name: "Shimba",
      age: 1,
      breed: "Doberman",
      image: "https://images.unsplash.com/photo-1623226725351-29a2b7c31431?w=500&auto=format&fit=crop&q=60"
    }
  ];

  function handleAdoptClick(dog) {
    if (!user) {
      navigate("/login", { state: { from: "/adopt" } });

      return;
    }
    setSelectedDog(dog);
  }

  return (
    <div className="page">
      <h1>Adopt🐶</h1>
      <p>Find loving dogs waiting for a home</p>

      <div
        style={{
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "40px"
        }}
      >
        {dogs.map((dog, index) => (
          <DogCard
            key={index}
            {...dog}
            onAdopt={() => handleAdoptClick(dog)}
          />
        ))}
      </div>

      <AdoptModal
        dog={selectedDog}
        onClose={() => setSelectedDog(null)}
      />
    </div>
  );
}

export default Adopt;
