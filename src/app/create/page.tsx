import CreateForm from "@/components/create/CreateForm";

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
