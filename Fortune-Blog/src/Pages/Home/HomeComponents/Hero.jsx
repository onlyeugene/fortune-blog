import React, { useState } from "react";
import image from "../../../assets/fortune.jpg";
import "./Hero.css";
import insta from "../../../assets/insta.png";
import linked from "../../../assets/linked.png";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Disable scrolling on the body
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = ""; // Enable scrolling on the body
  };
    
  return (
    <div className="xl:fadeIn fadeUp xl:absolute relative xl:top-0 top-[5rem] xl:left-[28rem] z-0">
      <div>
        <img
          src={image}
          alt="Picture of Fortune"
          title="Picture of Fortune"
          className="xl:w-[30rem] w-full "
        />
      </div>
      <h1 className="xl:text-[25px] text-[20px] xl:pt-0 pt-[1rem] cursor-default">
        Fortune Okogun, Writer, Editor, Vlogger
      </h1>

      <footer className=" border-gray-900 border-t-[1px] xl:absolute fixed xl:bottom-[-5rem] bottom-[-5rem] pb-4 cursor-default xl:w-[30rem] w-[24.3rem]">
        <div className="flex justify-between">
          <h2 className="font-thin xl:text-[14px] text-[12px]">
            {" "}
            &#169; Designed by onlyeugene
          </h2>
          <div className="flex gap-3">
            <img src={linked} alt="" className="xl:w-[1.5rem] w-[1rem]" />
            <div>
              <img src={insta} alt="" className="xl:w-[1.5rem] w-[1rem]" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Hero;
