import React, { useState, useEffect } from "react";
import FlipWords from "@/components/ui/flip-words";
import Image from "next/image";

const HeroSection = () => {
  const limited = ["Limited"];
  const collection = ["Collection"];
  
  // State to control the visibility of the scroll prompt text
  const [showScrollText, setShowScrollText] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollText(false); // Hide the scroll text once scrolling starts
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative flex justify-center items-center h-[700px] md:h-[700px] lg:h-[300px] bg-black w-full">
      <div className="absolute sandana italiana left-[50%] translate-x-[-50%] top-[80px] lg:top-[100px] lg:left-[50%] lg:translate-x-[-50%] text-xl lg:text-3xl">
        <FlipWords
          words={limited}
          duration={3000}
          className="inline-block text-white"
        />
        <FlipWords
          words={collection}
          delay={3000}
          duration={3000}
          className="inline-block text-white"
        />
      </div>
      {/* Scroll Text */}
      {showScrollText && (
        <div className="absolute bottom-[-100px] text-6xl lg:bottom-[-300px] w-full flex justify-center">
          <div className="text-gray-500 mb-4 text-center text-sm">
            Scroll down
          </div>
        </div>
      )}
      {/* Uncomment the Image component if needed */}
      {/* <Image
        src={"/assets/images/close.png"}
        alt="close"
        width={400}
        height={400}
        className="w-[500px] md:w-[750px]"
      /> */}
    </div>
  );
};

export default HeroSection;
