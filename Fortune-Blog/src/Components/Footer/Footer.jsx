import React from "react";
import insta from "../../assets/insta.png";
import linked from "../../assets/linked.png";

const Footer = () => {
  return (
    <div className="absolute bottom-5 barder w-[30rem] left-[28rem]">
      <div className="flex justify-between">
        <h2 className="font-thin text-[14px]"> &#169; Designed by onlyeugene</h2>
        <div className="flex gap-3">
            <img src={linked} alt="" className="w-[1.5rem]"/>
            <div>
                <img src={insta} alt="" className="w-[1.5rem]"/>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
