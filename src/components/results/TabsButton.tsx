import React from "react";
import GradientBorderContainer from "../GradientBorderContainer";
import { Button } from "../ui/button";

const TabsButton = () => {
  return (
    <section className="flex flex-row gap-4">
      <Button className="rounded-xl bg-gradient-to-tr from-[#EF4444] to-[#FDE68A] text-white font-normal py-6 px-8 shadow-lg relative group">
        <span className="relative z-10">Model and Variables</span>
        <div className="absolute inset-0 bg-slate-200 opacity-0 group-hover:opacity-15 transition-opacity duration-200 rounded-xl" />
      </Button>
      <GradientBorderContainer
        padding="p-[3px]"
        className="pointer-events-auto flex items-center justify-center"
      >
        <Button
          variant={"ghost"}
          className="bg-white flex items-center justify-center rounded-xl py-5 px-10 shadow-lg"
        >
          Model Accuracy
        </Button>
      </GradientBorderContainer>
    </section>
  );
};

export default TabsButton;
