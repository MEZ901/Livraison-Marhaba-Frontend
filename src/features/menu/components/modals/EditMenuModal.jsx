import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import EditMenuForm from "../forms/EditMenuForm";

export function EditMenuModal({ isOpen, onClose, handleEditMenu, selectedMenu, setSelectedMenu }) {
  return (
    <Modal isOpen={isOpen && selectedMenu} onClose={onClose} isDismissable={false}>
      <ModalContent>
        <EditMenuForm
          selectedMenu={selectedMenu}
          setSelectedMenu={setSelectedMenu}
          onClose={onClose}
          handleEditMenu={handleEditMenu}
        />
      </ModalContent>
    </Modal>
  );
}