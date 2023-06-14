import React from "react";
import "../../App.css";
import { attendanceArray } from "../../AttendeesData";
import { useState } from "react";
import { remainEvents } from "../../AttendeesData";
import sponsor_one from "../../assets/attendees_image/sponsor1.png";
import sponsor_two from "../../assets/attendees_image/sponsor2.png";
import sponsor_three from "../../assets/attendees_image/sponsor3.png";
import sponsor_four from "../../assets/attendees_image/sponsor4.png";
import sponsor_five from "../../assets/attendees_image/sponsor5.png";
import sponsor_six from "../../assets/attendees_image/sponsor6.png";

function Attendees() {
  //Button functionality
  // eslint-disable-next-line no-unused-vars
  const [displayedObjects, setDisplayedObjects] = useState([]);
  const [showHiddenObjects, setShowHiddenObjects] = useState(false);
  const handleButtonClick = () => {
    setShowHiddenObjects(true);
    setDisplayedObjects(remainEvents);
  };

  // Search functionality
  const [searchQuery, setSearchQuery] = useState("");
  const [newSerch, setSearchResults] = useState(attendanceArray);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredResults = attendanceArray.filter((object) =>
      object.title.toLowerCase().includes(query)
    );
    setSearchResults(filteredResults);
  };

  return (
    <>
      <div className="overflow-hidden md:flex md:flex-col md:justify-center md:items-center">
        <main className="pl-[1rem]  overflow-hidden">
          <h1 className="mt-[1.5rem] mb-[1rem] font-bold overflow-hidden text-4xl">
            Book your Events with{" "}
            <span style={{ color: "#0765f8" }}>Teeket</span>
          </h1>
          <div className="flex mb-[1rem]">
            <p className="font-light text-xl">
              Your one stop platform to create, manage and promote your events
              at your convenience.
            </p>
          </div>

          <h2 className="text-[24px] font-bold mt-[1.5rem] md:flex md:flex-col md:justify-center md:items-center">
            Trending Event
          </h2>

          {newSerch.map(function (item) {
            return (
              <div
                className="w-[330px] h-[180px] ml-[1rem] flex justify-between pl-[0.2rem] pt-[1rem] 
                border-2 mt-[1.5rem]  border-[#4d4d4d10]  pr-[1rem] shadow-sm pb-[1rem] 
                rounded-[.5rem] md:flex md:flex-row md:justify-center md:items-center md:ml-[15rem]"
                key={item.id}
              >
                <div className="w-[45%]">
                  <div className="flex">
                    <span className="text-[12px] font-medium w-[58px] text-[#989898] text-center ">
                      {item.date}
                    </span>
                    <span
                      className="text-[#FF0303] bg-[#ff09092e] w-[59px] text-[12px] font-semibold  
                     text-center "
                    >
                      {item.price}
                    </span>
                  </div>

                  <h3 className="-w[120%] text-[16px] text-[black] font-bold">
                    {item.title}
                  </h3>

                  <div className="flex w-[90%] mt-[1rem]">
                    <img src={item.icon} alt="eventcreator" />
                    <p className="text-[12px] w-[20rem]  ml-[.4rem] mt-[1rem]">
                      {item.name}
                    </p>
                  </div>

                  <div className="flex mt-[0.6rem]">
                    <img src={item.mapline} alt="mapline" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <div className="w-[55%]  mt-[.7rem] pl-[4rem]">
                  <img src={item.image} alt="eventimage" />
                </div>
              </div>
            );
          })}

          <div className=" ml-[1rem]">
            <button
              type="button"
              onClick={handleButtonClick}
              className="w-[300px] bg-[#0052f6] text-[#FFFFFF] rounded-[18px]font-bold rounded-full border border-grey-500  text-center h-[60px] mt-[1rem] text-xl md:flex  md:justify-center md:items-center md:ml-[15rem]"
            >
              Discover more
            </button>
          </div>
          <p className="mt-[0.8rem] font-medium text-xl text-center">
            More than 1000+ leading event companies choose Teeket
          </p>

          <div className="flex mb-[0.5rem] md:flex md:flex-row md:justify-center md:items-center ml-[1.5rem]">
            <img className="w-20" src={sponsor_one} alt="testimonial" />
            <img className="w-20" src={sponsor_two} alt="testimonial" />
            <img className=" w-20" src={sponsor_three} alt="testimonial" />
          </div>
          <div className="flex mr-[10px] md:flex md:flex-row md:justify-center md:items-center">
            <img className=" w-20" src={sponsor_four} alt="testimonial" />
            <img className="w-20" src={sponsor_five} alt="testimonial" />
            <img className="w-20" src={sponsor_six} alt="testimonial" />
          </div>

          {showHiddenObjects
            ? remainEvents.map((item) => (
                <div>
                  <h2 className="text-[24px] font-bold mt-[1.5rem]">
                    {item.heading}
                  </h2>
                  <div
                    className="w-[330px] ml-[1rem] h-[172px] flex justify-between pl-[1rem] pt-[1rem] 
                border-2 mt-[1.5rem] border-[#4d4d4d10]  pr-[1rem] shadow-sm pb-[1rem] 
                rounded-[.5rem]"
                    key={item.id}
                  >
                    <div className="w-[45%]">
                      <div className="flex">
                        <span className="text-[12px] font-medium w-[58px] text-[#989898] text-center ">
                          {item.date}
                        </span>
                        <span
                          className="text-[#FF0303] bg-[#ff09092e] w-[59px] text-[12px] font-semibold  
                     text-center "
                        >
                          {item.price}
                        </span>
                      </div>

                      <h3 className="-w[120%] text-[16px] text-[black] font-bold">
                        {item.title}
                      </h3>

                      <div className="flex w-[90%] mt-[1rem]">
                        <img src={item.icon} alt="eventcreator" />
                        <p className="text-[12px] w-[20rem]  ml-[.4rem] ">
                          {item.name}
                        </p>
                      </div>

                      <div className="flex mt-[1rem]">
                        <img src={item.mapline} alt="mapline" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    <div className="w-[55%]  mt-[.7rem] pl-[4rem]">
                      <img src={item.image} alt="eventimage" />
                    </div>
                  </div>
                </div>
              ))
            : null}
        </main>
      </div>
    </>
  );
}

export default Attendees;
