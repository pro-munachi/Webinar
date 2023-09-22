import React from "react";

import { BsWhatsapp } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";

export const Footer = () => {
  return (
    <footer
      style={{
        background: "#000080",
        color: "white",
        padding: "25px 0 35px",
        marginTop: "80px",
      }}
    >
      <p>Copyright © 2023</p>

      <div style={{display: 'flex', gap: '10px', justifyContent: 'center'}}>
        <a href="https://wa.link/bpew30" rel="noreferrer" target="_blank" style={{color: 'white'}}>
        <BsWhatsapp />
        </a>
        <a href="https://t.me/+_fVw9QZ3k9g4Yzk0" rel="noreferrer" target="_blank" style={{color: 'white'}}>
        <BiLogoTelegram />
        </a>
      </div>
    </footer>
  );
};
