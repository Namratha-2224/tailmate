function Cart({ cartItems }) {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="page">
      <h1>🛒 Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {/* ✅ SAME GRID AS WISHLIST */}
          <div className="shop-grid">
            {cartItems.map((item, index) => (
              <div key={index} className="service-card">
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
                <p>Quantity: {item.qty}</p>
              </div>
            ))}
          </div>

          <h2 style={{ marginTop: "30px" }}>Total: ₹{total}</h2>
        </>
      )}
    </div>
  );
}

export default Cart;
