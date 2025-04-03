import BackButton from "@/components/create/BackButton";
import CreateForm from "@/components/create/CreateForm";
import InfoSection from "@/components/create/InfoSection";
import GradientBorderContainer from "@/components/GradientBorderContainer";
import Image from "next/image";

const page = () => {
  return (
    <div
      id="grid-container"
      className="bg-white rounded-2xl w-full h-full flex flex-col lg:grid lg:grid-cols-2 gap-4"
    >
      <section
        id="left-section"
        className="flex flex-col items-start justify-between relative p-3 px-2 md:px-6 md:py-5 lg:p-5 lg:px-2 xl:px-5 2xl:px-10 gap-5"
      >
        <div>
          <BackButton path="/" />
        </div>
        <div
          id="logo-container"
          className="ml-3 sm:ml-5 md:ml-6 lg:ml-6 xl:ml-7"
        >
          <Image
            src="/regressionify-500px.png"
            alt="Logo"
            className="drop-shadow-lg size-[80px] sm:size-[85px] md:size-[90px] lg:size-[100px]"
            width={100}
            height={100}
          />
          <header className="flex flex-col gap-1 lg:gap-3">
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-semibold mt-5">
              Regressionify
            </h1>
            <p className="w-72 line-clamp-2 text-sm xl:text-base">
              A Statistical Tool For Students and Statisticians
            </p>
          </header>
        </div>
        <InfoSection />
      </section>
      <section
        id="right-section"
        className="flex flex-col items-center justify-center w-full py-2 px-5 pb-5 md:py-5 md:px-10 lg:px-5 xl:px-10 2xl:py-5 2xl:px-16"
      >
        <CreateForm />
      </section>
    </div>
  );
};

export default page;
