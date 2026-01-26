import "./DogCard.css";

function DogCard({ image, name, age, breed, onAdopt }) {
  return (
    <div className="dog-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{breed}</p>
      <span>{age} years old</span>
      <button onClick={onAdopt}>Adopt Me</button>
    </div>
  );
}

export default DogCard;
