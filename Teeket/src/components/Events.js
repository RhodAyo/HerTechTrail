import React from "react";
import "../App.css";
import filterImage from "../assets/discoverpage_images/filter.png";
import music from "../assets/discoverpage_images/music_note.png";
import { eventArray } from "../Eventdata";
import { useState } from "react";
import { remainEvents } from "../Eventdata";

function Events() {
  //Button functionality
  const [displayedObjects, setDisplayedObjects] = useState([]);
  const [showHiddenObjects, setShowHiddenObjects] = useState(false);
  const handleButtonClick = () => {
    setShowHiddenObjects(true);
    setDisplayedObjects(remainEvents);
  };

  // Search functionality
  const [searchQuery, setSearchQuery] = useState("");
  const [newSerch, setSearchResults] = useState(eventArray);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredResults = eventArray.filter((object) =>
      object.title.toLowerCase().includes(query)
    );
    setSearchResults(filteredResults);
  };

  return (
    <div class="md:flex md:justify-center md:items-center">
      <main class="pl-[2rem] pr-[2rem] w-full">
        <h1 class="mt-[3rem] mb-[1rem] text-[24px] font-medium">
          Discover events near you
        </h1>
        <div class="flex mb-[1rem] text-center ">
          <form>
            <input
              class="bg-[#827f7f30] border-none w-[279px] h-[48px] rounded-[.6rem]
              "
              type="text"
              placeholder="Search all events"
              className="search-bar"
              value={searchQuery}
              onChange={handleSearch}
            />
          </form>
          <div class="w-[35%] pl-[2rem]">
            {<img src={filterImage} alt="icon" />}
          </div>
        </div>

        <div class="flex gap-x-[2rem] pb-[1rem]">
          <div class="w-[164px] h-[84px] bg-[#FBBF0A] rounded-[0.6rem] pl-[1rem] pt-[1rem]">
            <img src={music} alt="music-icon" />
            <p>Music</p>
          </div>
          <div class="h-[84px] w-[164px]  bg-[#EEEEEE] rounded-[0.6rem] pl-[1rem] pt-[1rem]">
            <img src={music} alt="music-icon" />
            <p>Tech</p>
          </div>
        </div>

        <div class="flex gap-x-[2rem]">
          <div class="w-[164px] h-[84px] bg-[#B0E298] rounded-[0.6rem] pl-[1rem] pt-[1rem]">
            <img src={music} alt="music-icon" />
            <p>Arts and Culture </p>
          </div>
          <div class="h-[84px] w-[164px]  bg-[#FFC971] rounded-[0.6rem] pl-[1rem] pt-[1rem]">
            <img src={music} alt="music-icon" />
            <p>Business</p>
          </div>
        </div>

        <h2 class="text-[24px] font-bold mt-[1.5rem]">Upcoming Event</h2>

        {newSerch.map(function (item) {
          return (
            <div
              class="w-[349px] h-[172px] ml-[1rem] flex justify-between pl-[1rem] pt-[1rem] 
                border-2 mt-[1.5rem]  border-[#4d4d4d10]  pr-[1rem] shadow-sm pb-[1rem] 
                rounded-[.5rem]"
              key={item.id}
            >
              <div class="w-[45%]">
                <div class="flex">
                  <span class="text-[12px] font-medium w-[58px] text-[#989898] text-center ">
                    {item.date}
                  </span>
                  <span
                    class="text-[#FF0303] bg-[#ff09092e] w-[59px] text-[12px] font-semibold  
                     text-center "
                  >
                    {item.price}
                  </span>
                </div>

                <h3 class="-w[120%] text-[16px] text-[black] font-bold">
                  {item.title}
                </h3>

                <div class="flex w-[90%] mt-[1rem]">
                  <img src={item.icon} alt="image" />
                  <p class="text-[12px] w-[20rem]  ml-[.4rem] ">{item.name}</p>
                </div>

                <div class="flex mt-[1rem]">
                  <img src={item.mapline} alt="mapline" />
                  <span>{item.location}</span>
                </div>
              </div>

              <div class="w-[55%]  mt-[.7rem] pl-[4rem]">
                <img src={item.image} alt="image" />
              </div>
            </div>
          );
        })}

        <div class=" ml-[1rem]">
          <button
            type="button"
            onClick={handleButtonClick}
            class=" w-[343px] bg-[#E1E4EB] text-center rounded-xl h-[60px] mt-[1rem]"
          >
            Discover more
          </button>
        </div>

        {showHiddenObjects
          ? remainEvents.map((item) => (
              <div>
                <h2 class="text-[24px] font-bold mt-[1.5rem]">
                  {item.heading}
                </h2>
                <div
                  class="w-[349px] ml-[1rem] h-[172px] flex justify-between pl-[1rem] pt-[1rem] 
                border-2 mt-[1.5rem] border-[#4d4d4d10]  pr-[1rem] shadow-sm pb-[1rem] 
                rounded-[.5rem]"
                  key={item.id}
                >
                  <div class="w-[45%]">
                    <div class="flex">
                      <span class="text-[12px] font-medium w-[58px] text-[#989898] text-center ">
                        {item.date}
                      </span>
                      <span
                        class="text-[#FF0303] bg-[#ff09092e] w-[59px] text-[12px] font-semibold  
                     text-center "
                      >
                        {item.price}
                      </span>
                    </div>

                    <h3 class="-w[120%] text-[16px] text-[black] font-bold">
                      {item.title}
                    </h3>

                    <div class="flex w-[90%] mt-[1rem]">
                      <img src={item.icon} alt="image" />
                      <p class="text-[12px] w-[20rem]  ml-[.4rem] ">
                        {item.name}
                      </p>
                    </div>

                    <div class="flex mt-[1rem]">
                      <img src={item.mapline} alt="mapline" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <div class="w-[55%]  mt-[.7rem] pl-[4rem]">
                    <img src={item.image} alt="image" />
                  </div>
                </div>
              </div>
            ))
          : null}
      </main>
    </div>
  );
}

export default Events;
