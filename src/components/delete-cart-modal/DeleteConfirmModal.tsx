import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import styles from "./DeleteConfirmModal.module.scss";
import { MdDelete } from "react-icons/md";

interface DeleteConfirmModalProps {
  onDeleteAll: () => void; // void - ничего не возвращает функцияя
}

const DeleteConfirmModal = ({ onDeleteAll }: DeleteConfirmModalProps) => {
  const [isDeleteModalMenuOpen, setIsDeleteModalMenuOpen] = useState(false);
  const onClose = () => {
    setIsDeleteModalMenuOpen(false);
  };
  return (
    <Dialog.Root
      open={isDeleteModalMenuOpen}
      onOpenChange={setIsDeleteModalMenuOpen}
    >
      <Dialog.Trigger asChild>
        <button
          className={styles.deleteAll}
          onClick={() => {
            setIsDeleteModalMenuOpen(true);
          }}
          title="Удалить все товары"
        >
          <MdDelete />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.deleteConfrimModalMenuOverlay} />
        <Dialog.Content className={styles.deleteConfrimModalMenuContent}>
          <div>Вы точно хотите удалить все товары?</div>
          <button
            onClick={() => {
              onClose();
              onDeleteAll();
            }}
          >
            Да
          </button>
          <button onClick={onClose}>Нет</button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DeleteConfirmModal;
