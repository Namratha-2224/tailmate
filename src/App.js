import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Adopt from "./pages/Adopt";
import Shop from "./pages/Shop";
import Services from "./pages/Services";
import Locations from "./pages/Locations";
import Login from "./pages/Login";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";

function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  return (
    <BrowserRouter>
      <Navbar
        user={user}
        setUser={setUser}
        wishlistCount={wishlist.length}
        cartCount={cartItems.length}
      />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/adopt"
          element={<Adopt user={user} />}
        />

        <Route
          path="/shop"
          element={
            <Shop
              user={user}
              cartItems={cartItems}
              setCartItems={setCartItems}
              wishlist={wishlist}
              setWishlist={setWishlist}
            />
          }
        />

        <Route
          path="/wishlist"
          element={<Wishlist wishlist={wishlist} />}
        />

        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} />}
        />

        <Route
          path="/services"
          element={<Services user={user} />}
        />

        <Route path="/locations" element={<Locations />} />

        <Route
          path="/login"
          element={<Login setUser={setUser} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
