import BackButton from "@/components/create/BackButton";
import GradientBorderContainer from "@/components/GradientBorderContainer";
import TabsButton from "@/components/results/TabsButton";
import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import IndependentVariables from "@/components/results/IndependentVariables";

const page = () => {
  return (
    <div className="size-full bg-white rounded-xl">
      <div className="flex flex-col 2xl:px-10 2xl:py-5 gap-5 w-full">
        <section className="flex items-start">
          <BackButton path={"/create"} />
        </section>
        <section className="flex flex-row justify-between items-center my-5 px-4 w-full">
          <h1 className="text-4xl font-semibold">Results</h1>
          <TabsButton />
        </section>
        <section className="flex flex-col gap-5">
          <GradientBorderContainer padding="p-[3px]">
            <div className="bg-white flex flex-row p-5 gap-5 items-center rounded-xl shadow-md">
              <Image
                src={"/regressionify-500px.png"}
                alt="Regressionify"
                width={100}
                height={100}
                className="size-16 drop-shadow-md"
              />
              <div
                id="model-formula"
                className="flex flex-col gap-2 justify-center"
              >
                <p className="font-semibold text-sm">Resulting Model Formula</p>
                <p className="text-xl font-medium italic">
                  Y = 0.001x + 0.001 + 0.001 + 0.001 + 0.001
                </p>
              </div>
            </div>
          </GradientBorderContainer>
          <div id="grid-container" className="grid grid-cols-2 gap-5">
            <GradientBorderContainer className="h-full">
              <div className="bg-white flex flex-col gap-4 rounded-xl p-5 px-7">
                <p className="font-semibold text-base">Independent Variables</p>
                <div className="flex flex-col gap-3">
                  {/* Sample variables */}
                  <IndependentVariables />
                </div>
              </div>
            </GradientBorderContainer>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
