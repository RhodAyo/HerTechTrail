import React from "react";
import image from "../../assets/homepage_images/user pictures.jpg";

function EventCreators() {
  return (
    <div class="bg-[#FFFFFF] py-10">
      <div class="text-center">
        <h2 class="md:text-[28px] text-[24px] font-bold text-[#1A1919] text-center">
          Empowering event creators everywhere
        </h2>
        <h6 class="md:text-[20px] text-[14px] mt-[1rem] font-bold text-[#000000] text-center">
          More than 1 million people across 5 continents choose Teeket
        </h6>
      </div>
      <img
        src={image}
        class="md:min-w-[50%] mx-auto mt-[2rem]"
        alt="user-pictures"
      />
    </div>
  );
}

export default EventCreators;
