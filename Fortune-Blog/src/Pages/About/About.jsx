import React from "react";
import { useParams } from "react-router-dom";
import image1 from "../../assets/fortune1.jpg";
import insta from "../../assets/insta.png";
import linked from "../../assets/linked.png";

const About = () => {
  // const {AboutPage} = useParams();

  return (
    <div className="fadeIn xl:absolute absolute xl:left-[22rem] top-[3rem] xl:w-[60rem] xl:top-[8rem]">
      <div>
        <header className="xl:mb-5 xl:text-center xl:text-[14px] text-[14px] xl:px-0 px-2 xl:pb-0 pb-3 font-extralight text-gray-400 xl:text-gray-500">Fortune Okogun, Writer, Editor, Vlogger</header>
      </div>
      <div className="xl:flex  xl:absolute gap-5">
        <img src={image1} alt="Picture of Fortune" className="xl:w-20rem] xl:h-[20rem] w-[28rem]"/>
        <h1 className="text-sm font-light xl:text-center xl:mr-[12rem] p-3">
          I often struggle to find words to describe myself, but I've been told
          many times how important it is. Describing oneself, the essence of
          one's being, is cliché yet crucial. Words, no matter how vague, never
          seem enough to capture who I am. If you're still reading, that was a
          minuscule script to distract you—lol. Hi, my name is Fortune, and I am
          a writer. Writing is beyond therapy for me; it is my core. When people
          discuss talents or gifts, I know writing is the one thing that has
          never left me. I started small, writing storybooks and drawing cute
          little pictures, just for my friends and brothers to read. It has been
          a journey, but I'm here, and I'm glad. Having my little space on the
          internet, I knew the things I wanted to write about. I wanted to delve
          into all aspects of being human, expressing my feelings and the
          thoughts in my head, hoping someone else would understand, you know? I
          hope you enjoy reading. My thoughts, ideas, and creativity are
          embedded just for YOU. Never forget, we will always have thoughts,
          heart, and words. Thank you for visiting and reading{" "}
          <a className="text-blue-200" href="https://www.thefortevan.com">
            thefortevan.com
          </a> I hope you stay.
        </h1>
      </div>
      <footer className="border-gray-900 border-t-[1px] xl:absolute absolute w-[24.2rem] xl:pb-0 pb-2  xl:top-[35rem] bottom-[-3rem] xl:w-[48rem]">
      <div className="flex justify-between">
        <h2 className="font-thin text-[14px]"> &#169; Designed by onlyeugene</h2>
        <div className="flex gap-3">
            <img src={linked} alt="" className="w-[1.5rem]"/>
            <div>
                <img src={insta} alt="" className="w-[1.5rem]"/>
            </div>
        </div>
      </div>
      </footer>
    </div>
  );
};

export default About;
