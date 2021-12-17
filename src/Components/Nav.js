import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="shop">Shop</Link>
        </li>
        <li>
          <Link to="about">About</Link>

        </li>
        <li>
          <Link to="shop/checkout">Checkout</Link>
          
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
