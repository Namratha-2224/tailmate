import { useNavigate } from "react-router-dom";

function Card({ icon, title, desc, path }) {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(path)}>
      <h3>{icon} {title}</h3>
      <p>{desc}</p>
    </div>
  );
}

export default Card;
