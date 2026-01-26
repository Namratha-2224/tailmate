import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar({ user, setUser, wishlistCount, cartCount }) {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  function handleLogout() {
    setShowMenu(false);

    // 🔥 clear React state (MOST IMPORTANT)
    setUser(null);

    // optional: clear storage
    localStorage.removeItem("user");

    // go to home
    navigate("/");
  }

  return (
    <div className="navbar">
      {/* LOGO */}
      <Link to="/" className="logo">
        TailMate 🐾
      </Link>

      {/* RIGHT SIDE */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/adopt">Adopt</Link>
        <Link to="/shop">Shop</Link>

        {/* ❤️ Wishlist */}
        <Link to="/wishlist" className="nav-icon">
          ❤️
          {wishlistCount > 0 && (
            <span className="count">{wishlistCount}</span>
          )}
        </Link>

        {/* 🛒 Cart */}
        <Link to="/cart" className="nav-icon">
          🛒
          {cartCount > 0 && (
            <span className="count">{cartCount}</span>
          )}
        </Link>

        <Link to="/services">Services</Link>
        <Link to="/locations">Locations</Link>

        {/* LOGIN / USER */}
        {!user ? (
          <Link to="/login" className="login-btn">
            Login
          </Link>
        ) : (
          <div className="menu-wrapper">
            <span
              className="dots"
              onClick={() => setShowMenu(!showMenu)}
            >
              ⋮
            </span>

            {showMenu && (
              <div className="menu">
                <p>Hi {user.name} 👋</p>
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
