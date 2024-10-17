import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>❤ Made with Love ⓒ {currentYear}</p>
    </footer>
  );
}

export default Footer;
