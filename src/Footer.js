import React, { useState } from "react";

const Footer = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <footer  className={`w-full text-center p-4 mt-10${
      darkMode ? "bg-black text-white" : "bg-gray-100 text-gray-900"
    }`}>
      <p>&copy; {new Date().getFullYear()} <a href="https://mohannadnasreldin.vercel.app" className="" target="_blank" rel="noopener noreferrer">Mohannad Nasreldin</a>. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
