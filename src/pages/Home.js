import Card from "../components/Card";
import "./Home.css";


function Home() {
  return (
    <div className="home">
      <h1>Welcome to TailMate</h1>
      <p className="subtitle">
        Everything your dog needs — adoption, care, and unconditional love 🐾
      </p>

      <div className="card-grid">
        <Card
          icon="🐶"
          title="Adopt"
          desc="Find loving dogs waiting for a home"
          path="/adopt"
        />

        <Card
          icon="🛍️"
          title="Shop"
          desc="Food, toys & essentials for your buddy"
          path="/shop"
        />

        <Card
  icon="🦴"
  title="Services"
  desc="Grooming, training, daycare & dog walking"
  path="/services"
/>


        <Card
          icon="📍"
          title="Locations"
          desc="Near by veterinary hospitals, Adoption centers around you"
          path="/locations"
        />
      </div>
    </div>
  );
}

export default Home;
