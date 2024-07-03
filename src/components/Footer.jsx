import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="flex justify-center mt-20 mb-10">
      <p>
        Designed with ❤️ by
        <a href="https://github.com/Prashant-2024">Prashant</a>
      </p>
    </div>
  );
}

export default Footer;
