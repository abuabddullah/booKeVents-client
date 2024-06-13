import React from "react";
import SectionHeadline from "../shared/SectionHeadline";
import Breadcrumbs from "./Breadcrumbs";

const BookNow = () => {
  return (
    <>
      <Breadcrumbs pageName={"Book Now"} />
      <SectionHeadline secTitle="Book Now" secSubTitle="Book your ticket now" />
    </>
  );
};

export default BookNow;
