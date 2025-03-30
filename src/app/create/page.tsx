import BackButton from "@/components/create/BackButton";
import CreateForm from "@/components/create/CreateForm";
import InfoSection from "@/components/create/InfoSection";
import GradientBorderContainer from "@/components/GradientBorderContainer";
import Image from "next/image";

const page = () => {
  return (
    <div
      id="parent-container"
      className="w-full min-h-screen border border-red-400 p-5 bg-white overflow-hidden shadow-lg flex items-center justify-center"
    >
      <div
        id="child-container"
        className="w-full h-full bg-gradient-to-t from-[#FFEDD5] to-[#DBEAFE] p-16 px-40 flex items-center justify-center self-center overflow-hidden rounded-2xl shadow-sm"
      >
        <GradientBorderContainer
          id="gradient-border"
          className="w-full shadow-lg h-[750px]"
          padding="p-[5px]"
        >
          <div
            id="grid-container"
            className="bg-white rounded-2xl w-full h-full grid grid-cols-2 gap-4"
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
                  width={100}
                  height={100}
                />
                <header className="flex flex-col gap-3">
                  <h1 className="text-5xl font-semibold mt-5">Regressionify</h1>
                  <p className="font- w-72 line-clamp-2">
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
    </div>
  );
};

export default page;
