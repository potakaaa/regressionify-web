import React from "react";
import { Input } from "../ui/input";
const IndependentVariables = () => {
  return (
    <>
      <section
        id="independent-variable-1"
        className="flex flex-row gap-2 justify-center items-center"
      >
        <span className="bg-gradient-to-tr from-[#EF4444] to-[#FDE68A] text-white size-10 p-2 flex items-center justify-center rounded-lg shadow-md">
          <p>
            X<sub>1</sub>
          </p>
        </span>

        <div className="flex flex-row justify-between items-center gap-5 border-primary border-2 rounded-xl px-3 py-1 shadow-md w-full z-10">
          <div className="flex flex-row justify-start items-center gap-2 relative whitespace-nowrap px-2 pr-7">
            <p className="text-base font-medium">Variable 1</p>
            <span className="absolute w-[4px] h-[48px] z-0 right-0 bg-primary" />
          </div>
          <Input className="selection:text-white border-none w-full" />
        </div>
      </section>
      <section
        id="independent-variable-1"
        className="flex flex-row gap-2 justify-center items-center"
      >
        <span className="bg-gradient-to-tr from-[#EF4444] to-[#FDE68A] text-white size-10 p-2 flex items-center justify-center rounded-lg shadow-md">
          <p>
            X<sub>2</sub>
          </p>
        </span>

        <div className="flex flex-row justify-between items-center gap-5 border-primary border-2 rounded-xl px-3 py-1 shadow-md w-full z-10">
          <div className="flex flex-row justify-start items-center gap-2 relative whitespace-nowrap px-2 pr-7">
            <p className="text-base font-medium">Variable 2</p>
            <span className="absolute w-[4px] h-[48px] z-0 right-0 bg-primary" />
          </div>
          <Input className="selection:text-white border-none w-full" />
        </div>
      </section>
      <section
        id="independent-variable-1"
        className="flex flex-row gap-2 justify-center items-center"
      >
        <span className="bg-gradient-to-tr from-[#EF4444] to-[#FDE68A] text-white size-10 p-2 flex items-center justify-center rounded-lg shadow-md">
          <p>
            X<sub>3</sub>
          </p>
        </span>

        <div className="flex flex-row justify-between items-center gap-5 border-primary border-2 rounded-xl px-3 py-1 shadow-md w-full z-10">
          <div className="flex flex-row justify-start items-center gap-2 relative whitespace-nowrap px-2 pr-7">
            <p className="text-base font-medium">Variable 3</p>
            <span className="absolute w-[4px] h-[48px] z-0 right-0 bg-primary" />
          </div>
          <Input className="selection:text-white border-none w-full" />
        </div>
      </section>
      <section
        id="independent-variable-1"
        className="flex flex-row gap-2 justify-center items-center"
      >
        <span className="bg-gradient-to-tr from-[#EF4444] to-[#FDE68A] text-white size-10 p-2 flex items-center justify-center rounded-lg shadow-md">
          <p>
            X<sub>4</sub>
          </p>
        </span>

        <div className="flex flex-row justify-between items-center gap-5 border-primary border-2 rounded-xl px-3 py-1 shadow-md w-full z-10">
          <div className="flex flex-row justify-start items-center gap-2 relative whitespace-nowrap px-2 pr-7">
            <p className="text-base font-medium">Variable 4</p>
            <span className="absolute w-[4px] h-[48px] z-0 right-0 bg-primary" />
          </div>
          <Input className="selection:text-white border-none w-full" />
        </div>
      </section>
      <section
        id="independent-variable-1"
        className="flex flex-row gap-2 justify-center items-center"
      >
        <span className="bg-gradient-to-tr from-[#EF4444] to-[#FDE68A] text-white size-10 p-2 flex items-center justify-center rounded-lg shadow-md">
          <p>
            X<sub>5</sub>
          </p>
        </span>

        <div className="flex flex-row justify-between items-center gap-5 border-primary border-2 rounded-xl px-3 py-1 shadow-md w-full z-10">
          <div className="flex flex-row justify-start items-center gap-2 relative whitespace-nowrap px-2 pr-7">
            <p className="text-base font-medium">Variable 5</p>
            <span className="absolute w-[4px] h-[48px] z-0 right-0 bg-primary" />
          </div>
          <Input className="selection:text-white border-none w-full" />
        </div>
      </section>
    </>
  );
};

export default IndependentVariables;
