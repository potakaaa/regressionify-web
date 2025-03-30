import React from "react";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  return (
    <Button variant="ghost" className="cursor-pointer hover:bg-neutral-100">
      <ArrowLeft className="size-6" />
    </Button>
  );
};

export default BackButton;
