import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetMenuByIdQuery } from "../redux/menuApiSlice";

const MenuDetails = () => {
  const [menuData, setMenuData] = useState(null);
  const { id } = useParams();
  const { data: menu, isSuccess } = useGetMenuByIdQuery(id);

  useEffect(() => {
    if (isSuccess && menu) {
      setMenuData(menu.menu);
    }
  }, [isSuccess, menu]);

  if (!isSuccess) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {menuData && (
        <>
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                {menuData.name}
              </h1>
              <p className="mb-8 leading-relaxed">{menuData.description}</p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Button
                </button>
                <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
                  Button
                </button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="https://dummyimage.com/720x600/edf2f7/a5afbd"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MenuDetails;
