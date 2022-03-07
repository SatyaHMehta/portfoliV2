import React from "react";

export default function menuOnClick({option, setMenuOpen}) {
  return (
    <li onClick={() => setMenuOpen(false)}>
      <a href={option}>Home</a>
    </li>
  );
}
