import React from "react";
import { ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";

const EditMenuForm = ({ selectedMenu, setSelectedMenu, onClose, handleEditMenu }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedMenu((prevMenu) => ({
      ...prevMenu,
      [name]: value,
    }));
  };

  return (
    <>
      <ModalHeader className="flex flex-col gap-1">Edit Menu Item</ModalHeader>
      <ModalBody>
        <div className="mb-3">
          <label htmlFor="name" className="mb-2 block text-base font-medium text-[#07074D]">
            Title:
          </label>
          <input
            type="text"
            placeholder="Name"
            value={selectedMenu?.name || ""}
            onChange={handleInputChange}
            name="name"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="mb-2 block text-base font-medium text-[#07074D]">
            Description:
          </label>
          <input
            type="text"
            placeholder="Description"
            value={selectedMenu?.description || ""}
            onChange={handleInputChange}
            name="description"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="mb-2 block text-base font-medium text-[#07074D]">
            Price:
          </label>
          <input
            type="text"
            placeholder="Price"
            value={selectedMenu?.price || ""}
            onChange={handleInputChange}
            name="price"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="danger" variant="light" onPress={onClose}>
          Close
        </Button>
        <Button color="primary" onPress={handleEditMenu}>
          Save
        </Button>
      </ModalFooter>
    </>
  );
};

export default EditMenuForm;