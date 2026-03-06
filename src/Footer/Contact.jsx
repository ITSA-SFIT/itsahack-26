import React from "react";
import Heading from "./Heading";

const Contact = () => {
  return (
    <div className="">
      <Heading>Call:</Heading>
      <div className="grid grid-rows-3 grid-cols-2">
        <p>Sumeet Prajapati:</p>
        <a href="tel:+911234567890" className="underline">
          +91 83694 33001
        </a>
        <p>Abhishekh Yadav</p>
        <a href="tel:+911234567890" className="underline">
          +91 96191 15121
        </a>
        {/* <p>Chris Shukla:</p>
        <a href="tel:+911234567890" className="underline">
          +91 88505 79882
        </a> */}
      </div>
      <Heading>
        Email:{" "}
        <a href="mailto:itsa@sfit.ac.in" className="underline">
          itsa@sfit.ac.in
        </a>
      </Heading>
    </div>
  );
};

export default Contact;
