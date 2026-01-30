import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar({ user, setUser, wishlistCount, cartCount }) {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();

  // Detect screen resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🔥 NAV + CLOSE MENU
  const handleNavigate = (path) => {
    setShowMenu(false);
    navigate(path);
  };

  function handleLogout() {
    setShowMenu(false);
    setUser(null);
    localStorage.removeItem("user");
    navigate("/");
  }

  return (
    <div className="navbar">
      {/* LOGO */}
      <Link to="/" className="logo">
        TailMate🐾
      </Link>

      {/* ================= MOBILE ================= */}
      {isMobile ? (
        <div className="mobile-actions">
          {!user ? (
            <Link to="/login" className="login-btn">
              Login
            </Link>
          ) : (
            <>
              <span
                className="nav-icon"
                onClick={() => handleNavigate("/wishlist")}
              >
                ❤️
                {wishlistCount > 0 && (
                  <span className="count">{wishlistCount}</span>
                )}
              </span>

              <span
                className="nav-icon"
                onClick={() => handleNavigate("/cart")}
              >
                🛒
                {cartCount > 0 && (
                  <span className="count">{cartCount}</span>
                )}
              </span>

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
                    <p onClick={() => handleNavigate("/")}>Home</p>
                    <p onClick={() => handleNavigate("/adopt")}>Adopt</p>
                    <p onClick={() => handleNavigate("/shop")}>Shop</p>
                    <p onClick={() => handleNavigate("/wishlist")}>Wishlist</p>
                    <p onClick={() => handleNavigate("/cart")}>Cart</p>
                    <p onClick={() => handleNavigate("/services")}>Services</p>
                    <p onClick={() => handleNavigate("/locations")}>Locations</p>
                    <button onClick={handleLogout}>Logout</button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      ) : (
        /* ================= DESKTOP ================= */
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/adopt">Adopt</Link>
          <Link to="/shop">Shop</Link>

          <Link to="/wishlist" className="nav-icon">
            ❤️
            {wishlistCount > 0 && (
              <span className="count">{wishlistCount}</span>
            )}
          </Link>

          <Link to="/cart" className="nav-icon">
            🛒
            {cartCount > 0 && (
              <span className="count">{cartCount}</span>
            )}
          </Link>

          <Link to="/services">Services</Link>
          <Link to="/locations">Locations</Link>

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
      )}
    </div>
  );
}

export default Navbar;