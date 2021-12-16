import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <Link to="/">Home</Link>
        <Link to="shop">Shop</Link>
        <Link to="about">About</Link>
      </ul>
    </nav>
  );
};

export default Nav;
