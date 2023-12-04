import React, { useEffect, useState } from "react";
import { AddMenuModal } from "../components/modals/AddMenuModal";
import { EditMenuModal } from "../components/modals/EditMenuModal";

import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Button,
  useDisclosure,
  CardHeader,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import {
  useGetAllMenusQuery,
  useCreateMenuMutation,
  useDeleteMenuMutation,
  useUpdateMenuMutation,
  useUploadPhotoMutation,
} from "../redux/menuApiSlice";
import { useNavigate } from "react-router-dom";

export default function MenuPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [menuData, setMenuData] = useState(null);
  console.log(menuData)
  const [newMenu, setNewMenu] = useState({
    name: "",
    description: "",
    price: "",
  });
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [createMenu] = useCreateMenuMutation();
  const [deleteMenu] = useDeleteMenuMutation();
  const [updateMenu] = useUpdateMenuMutation();
  const { data: menus, isSuccess, refetch } = useGetAllMenusQuery();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      setMenuData(menus.menus);
    }
  }, [isSuccess, menus]);

  const handleAddMenu = async () => {
    try {
      await createMenu(newMenu);
      // Reset the form fields
      setNewMenu({
        name: "",
        description: "",
        price: "",
      });
      // Close the modal
      onClose();
      refetch();
    } catch (error) {
      console.error("Error adding menu:", error);
    }
  };

  const handleDeleteMenu = (menuId) => {
    deleteMenu(menuId);
    refetch();
  };

  const handleEditMenu = async () => {
    try {
      const menuId = selectedMenu._id;
      const menuData = selectedMenu;

      await updateMenu({ menuId, menuData });
      onClose();
      refetch();
    } catch (error) {
      console.error("Error updating menu:", error);
    }
  };

  const openEditModal = (menu) => {
    setSelectedMenu(menu);
    onOpen();
  };

  if (!isSuccess) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="text-center p-10">
        <h1 className="font-bold text-4xl mb-4">hi , you can create ur own Menu</h1>
        <div className="text-3xl">
          <Button
            onPress={() => {
              setSelectedMenu(null);
              onOpen();
            }}
          >
            Add Menu Item
          </Button>
        </div>
      </div>

      <div className="gap-5 grid grid-cols-2 sm:grid-cols-4 mx-5">
        {menuData &&
          menuData.map((menu, index) => (
            <Card
              shadow="sm"
              key={index}
              isPressable
              onPress={() => navigate(`/menu/${menu._id}`)}
            >
              <CardHeader className="text-small justify-between">
                <h4 className="font-bold text-large">{menu.name}</h4>
                <Dropdown>
                  <DropdownTrigger>
                    <span>...</span>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Static Actions">
                    <DropdownItem onClick={() => openEditModal(menu)}>
                      Edit
                    </DropdownItem>
                    <DropdownItem onClick={() => handleDeleteMenu(menu._id)}>
                      Delete
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </CardHeader>

              <CardBody className="overflow-visible py-2">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={menu.name}
                  className="w-full object-cover h-[140px]"
                  src={menu.image}
                />
              </CardBody>
              <CardFooter className="text-small justify-between">
                <b>{menu.restaurant?.name } </b>
                <p className="text-default-500">{menu.price} DH</p>
                
              </CardFooter>
              <div class="p-6">
            <p class="text-gray-700 leading-tight mb-4">
            {menu.description}
            </p>
            <div class="flex justify-between items-center">
                <div class="flex items-center">
                    <img src={console.log(menu.image)} alt="Avatar" class="w-8 h-8 rounded-full mr-2 object-cover"/>
                    <span class="text-gray-800 font-semibold">John Doe</span>
                </div>
                <span class="text-gray-600 ">2 hours ago</span>
            </div>
        </div>
            </Card>
          ))}

        <AddMenuModal
          isOpen={isOpen && !selectedMenu}
          onClose={onClose}
          handleAddMenu={handleAddMenu}
          newMenu={newMenu}
          setNewMenu={setNewMenu}
        />

        <EditMenuModal
          isOpen={isOpen && selectedMenu}
          menu={menus.menus}
          onClose={onClose}
          handleEditMenu={handleEditMenu}
          selectedMenu={selectedMenu}
          setSelectedMenu={setSelectedMenu}
        />
        
      </div>
    </>
  );
}
