import React from "react";

const SectionHeadline = ({secTitle,secSubTitle}) => {
  return (
    <>
      <div className="flex flex-wrap w-full mt-6 mb-20 flex-col items-center text-center">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
          {secTitle}
        </h1>
        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
          {secSubTitle}
        </p>
      </div>
    </>
  );
};

export default SectionHeadline;
