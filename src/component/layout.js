import InputWithFloatingLabel from "./input";
import acc from "../images/account.png";
import logo from "../images/logos.png";
import "../index";
import { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { SiStarship } from "react-icons/si";
import { IoPeopleSharp } from "react-icons/io5";
import { GiAnimalHide } from "react-icons/gi";
import { SlOptions } from "react-icons/sl";

import { IoIosNotificationsOutline } from "react-icons/io";

import { Outlet, useNavigate } from "react-router-dom";

function Layout() {
  const navgate = useNavigate();
  const menuData = [
    {
      name: "Starships",
      link: "/dashboard/spaceship",
      icon: <SiStarship size="23px" />,
    },
    {
      name: "People",
      link: "/dashboard/people",
      icon: <IoPeopleSharp size="23px" />,
    },
    {
      name: "Species",
      link: "/dashboard/species",
      icon: <GiAnimalHide size="23px" />,
    },
  ];
  return (
    <div className="flex h-screen">
      <div className="bg-gray-800 text-white w-64 flex-shrink-0">
        <div className="mt-5 flex justify-center">
          <img src={logo} width="150px" alt="logo" />
        </div>
        <div className="m-auto w-10/12 mt-5">
          <p
            onClick={() => navgate("/dashboard")}
            className={
              window.location.pathname === "/dashboard"
                ? "py-3 mb-10 px-4 hover:bg-blue-500 bg-blue-500 rounded block cursor-pointer"
                : "py-3  mb-10 px-4 hover:bg-blue-500  rounded block cursor-pointer"
            }
          >
            <p className="flex">
              <MdDashboard size="23px" />
              <p className="ml-2 ">Overview</p>
            </p>
          </p>
          {menuData?.map((item) => (
            <p
              onClick={() => navgate(`${item?.link}`)}
              className={
                window.location.pathname.includes(`${item?.link}`)
                  ? "py-3 mb-2 px-4 hover:bg-blue-500 bg-blue-500 rounded block cursor-pointer"
                  : "py-3  mb-2 px-4 hover:bg-blue-500  rounded block cursor-pointer"
              }
            >
              <p className="flex mb-1">
                {item?.icon}
                <p className="ml-2 ">{item?.name}</p>
              </p>
            </p>
          ))}
        </div>
      </div>

      <div className="flex-1 bg-gray-100  overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-300 flex justify-end p-4">
          <IoIosNotificationsOutline size="25px" />
          <div className="px-5 ml-10 flex items-center ">
            <img src={acc} alt="acc" className="mr-2" />
            <p className="mr-4">John Doe</p>
            <p className="ml-10 mr-5">
              <SlOptions size="25px" color="gray" />
            </p>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
