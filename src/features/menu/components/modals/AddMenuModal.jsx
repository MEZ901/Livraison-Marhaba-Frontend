import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

import AddMenuForm from "../forms/AddMenuForm";


export function AddMenuModal({ isOpen, onClose, handleAddMenu, newMenu, setNewMenu }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isDismissable={false}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">
          Add Menu Item
        </ModalHeader>
        <ModalBody>
        <AddMenuForm
            newMenu={newMenu}
            setNewMenu={setNewMenu}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="light" onPress={onClose}>
            Close
          </Button>
          <Button color="primary"  onPress={handleAddMenu}>
            Add
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}