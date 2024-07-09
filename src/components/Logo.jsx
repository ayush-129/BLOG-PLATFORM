import React from "react";
import logoImage from "./../assets/logo7.png";

function Logo() {
  return (
    <div className="flex items-center justify-center">
      <img src={logoImage} alt="Logo" className="w-[100px] h-[50px]" />
    </div>
  );
}

export default Logo;
