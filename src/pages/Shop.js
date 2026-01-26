import { useNavigate, useLocation } from "react-router-dom";
import "./Page.css";

function Shop({ user, cartItems, setCartItems, wishlist, setWishlist }) {
  const navigate = useNavigate();
  const location = useLocation();

  const products = [
    { name: "Dog Food Pack", price: 799, icon: "🥣" },
    { name: "Chew Toy", price: 99, icon: "🦴" },
    { name: "Dog Collar", price: 299, icon: "🎀" },
    { name: "Pet Shampoo", price: 349, icon: "🧴" },
    { name: "Dog Perfume", price: 399, icon: "🧴✨" },
    { name: "Leash Rope", price: 259, icon: "🪢" },
    { name: "Feeding Bowl", price: 199, icon: "🍽️" },
    { name: "Dog Bed", price: 999, icon: "🛏️" },
    { name: "Puppy Treats", price: 249, icon: "🍪" },
    { name: "Dog Jacket", price: 899, icon: "🧥" },
    { name: "Tick Spray", price: 299, icon: "💊" },
    { name: "Dog Harness", price: 499, icon: "🦺" },
    { name: "Pet Comb", price: 149, icon: "🪮" },
    { name: "Dog Socks", price: 99, icon: "🧦" },
    { name: "Training Clicker", price: 149, icon: "🔔" },
    { name: "Dog Toothbrush", price: 129, icon: "🪥" },
    { name: "Pet Wipes", price: 229, icon: "🧻" },
    { name: "Travel Water Bottle", price: 199, icon: "🚰" },
    { name: "Dog Raincoat", price: 999, icon: "🌧️" },
    { name: "Paw Balm", price: 279, icon: "🧴🐾" },
    { name: "Shopping Bag", price: 199, icon: "🛍️" }
  ];

  function requireLogin() {
    if (!user) {
      navigate("/login", { state: { from: location.pathname } });
      return false;
    }
    return true;
  }

  function addToCart(product) {
    if (!requireLogin()) return;

    const existing = cartItems.find(i => i.name === product.name);

    if (existing) {
      setCartItems(
        cartItems.map(i =>
          i.name === product.name ? { ...i, qty: i.qty + 1 } : i
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  }

  function increaseQty(name) {
    setCartItems(
      cartItems.map(i =>
        i.name === name ? { ...i, qty: i.qty + 1 } : i
      )
    );
  }

  function decreaseQty(name) {
    setCartItems(
      cartItems
        .map(i =>
          i.name === name ? { ...i, qty: i.qty - 1 } : i
        )
        .filter(i => i.qty > 0)
    );
  }

  function toggleWishlist(product) {
    if (!requireLogin()) return;

    if (wishlist.some(i => i.name === product.name)) {
      setWishlist(wishlist.filter(i => i.name !== product.name));
    } else {
      setWishlist([...wishlist, product]);
    }
  }

  return (
    <div className="page">
      <h1>Shop 🛍️</h1>
      <p>Everything your dog needs for a happy life</p>

      <div className="shop-grid">
        {products.map((p, i) => {
          const cartItem = cartItems.find(i => i.name === p.name);
          const wished = wishlist.some(i => i.name === p.name);

          return (
            <div className="service-card" key={i}>
              <div
                className="wishlist"
                onClick={() => toggleWishlist(p)}
              >
                {wished ? "❤️" : "🤍"}
              </div>

              <div style={{ fontSize: "40px" }}>{p.icon}</div>
              <h3>{p.name}</h3>
              <p>₹{p.price}</p>

              {!cartItem ? (
                <button onClick={() => addToCart(p)}>
                  Add to Cart
                </button>
              ) : (
                <div className="qty-box">
                  <button onClick={() => decreaseQty(p.name)}>−</button>
                  <span>{cartItem.qty}</span>
                  <button onClick={() => increaseQty(p.name)}>+</button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Shop;
