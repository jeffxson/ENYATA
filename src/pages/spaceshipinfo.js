import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaLessThan } from "react-icons/fa";

import logo from "../images/species.png";
import { useNavigate, useParams } from "react-router-dom";
function SpaceShipInfo() {
  let { id } = useParams();
  const navgate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`https://swapi.dev/api/starships/2/`);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  console.log(data);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <button
        onClick={() => navgate(-1)}
        className="bg-transparent border-none text-gray-500 hover:text-blue-600 flex m-5  "
      >
        <FaLessThan size="14px" /> <p className="-mt-1 ml-1">Back</p>
      </button>

      <div className="flex">
        <div className="m-8">
          <img src={logo} alt="Image" />
        </div>
        <div>
          <h2 className="text-2xl mt-20 font-semibold">{data?.name}</h2>
          <p>Model: {data?.model}</p>
          <p>Passangers: {data?.passengers}</p>
          <p>
            Pilots:{" "}
            {data?.pilots?.map((item) => (
              <>{item}</>
            ))}
          </p>
        </div>
      </div>
    </>
  );
}

export default SpaceShipInfo;
