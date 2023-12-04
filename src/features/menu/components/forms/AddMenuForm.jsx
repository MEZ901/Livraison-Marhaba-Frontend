import React from "react";

const AddMenuForm = ({ newMenu, setNewMenu }) => {

  return (
    <form >

<div class="mb-3">
        <label for="name" class="mb-2 block text-base font-medium text-[#07074D]">
          Title: 
        </label>
     <input
            type="text"
            placeholder="Name"
            value={newMenu.name}
            className=" w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            onChange={(e) =>
              setNewMenu((prevMenu) => ({
                ...prevMenu,
                name: e.target.value,
              }))
            }
          />
  </div>

  <div class="mb-3">
        <label for="name" class="mb-2 block text-base font-medium text-[#07074D]">
             Description:  
        </label>
          <input
            type="text"
            placeholder="Description"
            value={newMenu.description}
            className=" w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            onChange={(e) =>
              setNewMenu((prevMenu) => ({
                ...prevMenu,
                description: e.target.value,
              }))
            }
          />
          </div>

<div class="mb-3">
        <label for="name" class="mb-2 block text-base font-medium text-[#07074D]">
          Price:
        </label>        
          <input
            type="text"
            placeholder="Price"
            className=" w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            value={newMenu.price}
            onChange={(e) =>
              setNewMenu((prevMenu) => ({
                ...prevMenu,
                price: e.target.value,
              }))
            }
          />
</div>
    </form>
  );
};

export default AddMenuForm ;





