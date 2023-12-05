import React from "react";
import imageCompression from "browser-image-compression";

const AddMenuForm = ({ newMenu, setNewMenu }) => {

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleFileChange = async (e) => {
    const imageFile = e.target.files[0];
  
    // Compress the image using imageCompression library
    const compressedImage = await imageCompression(imageFile, {
      maxSizeMB: 1, // Maximum allowed size in megabytes
      maxWidthOrHeight: 800, // Maximum allowed width or height
    });
  
    // Convert the compressed image to base64
    const base64Image = await convertToBase64(compressedImage);
    // Update the newMenu state with the compressed image
    
    setNewMenu((prevMenu) => ({
      ...prevMenu,
      image: base64Image,
    }));
  };

  return (
    <form>
      <div className="mb-3">
        <label  className="sr-only">
          Choose file
        </label>
        <input
          type="file"
          name="image"
          id="file-input"
          onChange={handleFileChange}
          className=" w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      <div className="mb-3">
        <label
          
          className="mb-2 block text-base font-medium text-[#07074D]"
        >
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

      <div className="mb-3">
        <label
          className="mb-2 block text-base font-medium text-[#07074D]"
        >
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

      <div className="mb-3">
        <label
          className="mb-2 block text-base font-medium text-[#07074D]"
        >
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

export default AddMenuForm;
