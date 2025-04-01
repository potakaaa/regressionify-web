import BackButton from "@/components/create/BackButton";
import CreateForm from "@/components/create/CreateForm";
import InfoSection from "@/components/create/InfoSection";
import GradientBorderContainer from "@/components/GradientBorderContainer";
import Image from "next/image";

const page = () => {
  return (
    <>
      <section
        id="left-section"
        className="flex flex-col items-start justify-between relative p-3 px-2 lg:p-5 lg:px-10 gap-5"
      >
        <div>
          <BackButton />
        </div>
        <div id="logo-container" className="ml-3 lg:ml-7">
          <Image
            src="/regressionify-500px.png"
            alt="Logo"
            className="drop-shadow-lg size-[80px] lg:size-[100px]"
            width={100}
            height={100}
          />
          <header className="flex flex-col gap-1 lg:gap-3">
            <h1 className="text-3xl lg:text-5xl font-semibold mt-5">
              Regressionify
            </h1>
            <p className="w-72 line-clamp-2 text-sm lg:text-base">
              A Statistical Tool For Students and Statisticians
            </p>
          </header>
        </div>
        <InfoSection />
      </section>
      <section
        id="right-section"
        className="flex flex-col items-center justify-center w-full py-2 px-5 pb-5 lg:py-5 lg:px-16"
      >
        <CreateForm />
      </section>
    </>
  );
};

export default page;
