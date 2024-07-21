"use client";

import { IoCloseOutline } from "react-icons/io5";
import Button from "../buttons/Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  onClick?: () => void;
  btnLabel: string;
  title: string;
  bodyElement?: React.ReactElement;
  footerElement?: React.ReactElement;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  btnLabel,
  title,
  bodyElement,
  footerElement,
}) => {
  const closeFunc = () => {
    onClose();
  };

  const submitFunc = () => {
    onSubmit();

 
  };

  if(!isOpen){
    return null
  }

  return (
    <div className="bg-black-alpha fixed flex items-center justify-center w-full h-full z-30">
      <div className=" bg-gray-100 opacity-100 w-1/3 h-auto rounded-md shadow-md shadow-gray-600 p-5">
        <div className="flex items-center justify-between pb-3 mb-3 border-b">
          <div className="text-3xl">{title}</div>
          <div onClick={closeFunc}>
            <IoCloseOutline size={25} className="cursor-pointer" />
          </div>
        </div>
        <div className=" my-4">{bodyElement}</div>
        <div className="flex justify-center flex-col items-center w-full">
          <Button onSubmit={submitFunc} btnLabel={btnLabel} />
         
        </div>
        <div>{footerElement}</div>
      </div>
    </div>
  );
};

export default Modal;
