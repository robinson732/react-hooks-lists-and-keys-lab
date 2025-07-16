import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <>
      {links.map((link) => (
        <a key={link} href={`#${link}`}>
          {link}
        </a>
      ))}
    </>
  );
}

export default NavBar;
