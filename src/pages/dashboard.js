import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Dashboard() {
  const navgate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://swapi.dev/api/films/");
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

  const menuData = [
    { name: "films", color: "#A9FFE0" },
    { name: "Starship", color: "#A9C1FF" },
    { name: "People", color: "#FFA9EC" },
    { name: "Species", color: "#FDFFA9" },
  ];
  const headerData = [
    "",
    "Film Title",
    "Release Date",
    "Director",
    "Producer",
    "Episode Id",
    "Character",
  ];
  return (
    <>
      <div className="flex justify-between">
        {menuData?.map((item) => (
          <div className="w-1/4 m-8 mx-10">
            <div className="bg-white shadow-lg rounded-lg p-3">
              <div className="flex justify-between">
                <h2 className="text-md font-semibold">{item?.name}</h2>
                <div className={`w-6 h-6 bg-[${item?.color}] rounded-lg`}></div>
              </div>

              <h2 className="text-md font-semibold mt-8">200</h2>
              <p className="text-xs text-green-600">
                20 More than than yesterday
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="m-5 overflow-x-auto">
        <table className="border-collapse border border-gray-200 w-full p-5 overflow-x-auto">
          <thead>
            <tr>
              {headerData?.map((item) => (
                <th className="border-b border-gray-200 text-left text-red py-5 text-gray-500 p-3">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.results?.map((item, index) => (
              <tr
                className="cursor-pointer"
                onClick={() => navgate(`/dashboard/film-info/${index + 1}`)}
              >
                <td className="border-b border-gray-200 p-2 py-5">
                  <input type="checkbox" />
                </td>
                <td className="border-b border-gray-200 p-2 py-5">
                  {item?.title}
                </td>
                <td className="border-b border-gray-200 p-2 py-5">
                  {item?.release_date}
                </td>
                <td className="border-b border-gray-200 p-2 py-5">
                  {item?.director}
                </td>
                <td className="border-b border-gray-200 p-2 py-5">
                  {item?.producer}
                </td>
                <td className="border-b border-gray-200 p-2 py-5">
                  {item?.episode_id}
                </td>
                <td className="border-b border-gray-200 p-2 py-5">
                  {item?.url}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Dashboard;
