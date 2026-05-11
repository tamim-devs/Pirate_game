"use client";

import { Button } from "@heroui/react";
import { toast } from "react-toastify";

const DownloadButton = ({ title }) => {
  const handleClick = () => {
    toast.success(title + " - 🦄 Download started!", {
      theme: "light",
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <Button onClick={handleClick} color="primary" radius="full">
      Download Now
    </Button>
  );
};

export default DownloadButton;
