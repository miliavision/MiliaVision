import React from "react";
import Section from "./Section";
import { socials } from "../costants";
import { instagram } from "../assets";

const Footer = () => {
  return (
    <Section>
      <div className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
        <p className="caption text-n-4 lg:block text-center">
          © {new Date().getFullYear()}. All rights reserved.{" "}
         
        </p>
      </div>

      <div className="flex justify-center items-center pt-12"> 
      <a href="https://instagram.com/miliavision" target="_blank"> <img src={instagram} width={50} height={50}  alt={instagram} /> </a>
      </div>


    </Section>
  );
};

export default Footer;
