import BackButton from "@/components/create/BackButton";
import CreateForm from "@/components/create/CreateForm";
import InfoSection from "@/components/create/InfoSection";
import GradientBorderContainer from "@/components/GradientBorderContainer";
import Image from "next/image";

const page = () => {
  return (
    <div
      id="parent-container"
      className="w-full min-h-screen bg-gradient-to-t from-[#FFEDD5] to-[#DBEAFE] p-16 px-32 items-center justify-center self-center overflow-hidden"
    >
      <GradientBorderContainer
        id="gradient-border"
        className="w-full h-full shadow-lg"
        padding="p-[5px]"
      >
        <div
          id="grid-container"
          className="bg-white rounded-2xl w-full h-[750px] grid grid-cols-2 gap-4"
        >
          <section
            id="left-section"
            className="flex flex-col items-start justify-between relative p-5 px-10 gap-5"
          >
            <div>
              <BackButton />
            </div>
            <div id="logo-container" className="ml-7">
              <Image
                src="/regressionify-500px.png"
                alt="Logo"
                className="drop-shadow-lg"
                width={140}
                height={140}
              />
              <header className="flex flex-col gap-4">
                <h1 className="text-6xl font-medium mt-5">Regressionify</h1>
                <p className="font-medium">
                  A Statistical Tool For Students and Statisticians
                </p>
              </header>
            </div>
            <InfoSection />
          </section>
          <section
            id="right-section"
            className="flex flex-col items-center justify-center w-full py-5 px-16"
          >
            <CreateForm />
          </section>
        </div>
      </GradientBorderContainer>
    </div>
  );
};

export default page;
