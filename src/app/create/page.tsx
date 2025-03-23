import CreateForm from "@/components/create/CreateForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://regressionify.vercel.app"),
  title: "Regressionify - Build Regressions in a Click",
  description:
    "Regressionify is a powerful regression builder app designed for statisticians and mathematicians. Quickly analyze your data and generate regression models with ease.",
  openGraph: {
    title: "Regressionify - Build Regressions in a Click",
    description:
      "A regression analysis tool tailored for statisticians and mathematicians. Upload your data and get instant regression insights.",
    url: "https://regressionify.vercel.app",
    siteName: "Regressionify",
    images: [
      {
        url: "/R-500px.png",
        width: 500,
        height: 500,
        alt: "Regressionify - Build Regressions in a Click",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Regressionify - Build Regressions in a Click",
    description:
      "A regression analysis tool for statisticians and mathematicians. Upload data, generate regressions, and get insights instantly.",
    images: ["/R-500px.png"],
  },
};

const page = () => {
  return (
    <div
      id="create-container"
      className="w-full flex flex-col justify-center items-center space-y-5"
    >
      <div
        id="title-container"
        className="flex flex-col justify-center items-center mb-10"
      >
        <h1 className="font-extrabold text-4xl text-primary">REGRESSIONIFY</h1>
        <p className="font-medium w-72 px-2 text-sm text-center">
          A Statistical Tool for Mathematicians and Statisticians.
        </p>
      </div>
      <CreateForm />
    </div>
  );
};

export default page;
