import React from "react";
import Background from "../../assets/homepage_images/background.png";
import { Link } from "react-router-dom"
function Hero() {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(180.01deg, #030A2E 0.01%, rgba(5, 12, 47, 0) 141.96%), 
      url(${Background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      class=" rounded-b-[50px] py-[6rem] mt-4"
    >
      <div class="text-white pt-10 px-10">
        <div class="md:text-center text-white pt-10 px-10">
          <h1 class="text-[32px] font-bold">Struggling to sell tickets?</h1>
          <h6 class="text-[16px] font-normal mt-5">
            Create events and sell tickets in minutes-at no cost -with the only
            event platform you need
          </h6>
        </div>
        <Link to="/login">
        <button
          type="submit"
          class="md:text-[20px] md:mt-[3rem] md:px-[150px] flex justify-center items-center py-[18px] px-[95px] mx-auto mt-[1.5rem] font-medium text-base text-[#FFFFFF] bg-[#0052F6] rounded-xl"
        >
          Create an event
        </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
