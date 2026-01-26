import "./Page.css";

function Wishlist({ wishlist }) {
  return (
    <div className="page">
      <h1>Wishlist ❤️</h1>

      {wishlist.length === 0 ? (
        <p>No items in wishlist</p>
      ) : (
        <div className="shop-grid">
          {wishlist.map((item, index) => (
            <div className="service-card" key={index}>
              <div style={{ fontSize: "40px" }}>{item.icon}</div>
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
