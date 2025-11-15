import React from "react";
import Input from "./input";
import Button from "./Button";
import Footer from "./Footer";

const ContactForm = () => {
  return (
    <>
      <div className="flex flex-col gap-8 items-center justify-center min-h-[90vh] px-4 sm:px-10">

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 max-w-5xl">
          <Input type="text" text="Your Name" required className="flex-1" />
          <Input type="email" text="Your Email" required className="flex-1" />
          <Input type="number" text="Your Phone" required className="flex-1" />
        </div>

        <textarea
          placeholder="Your Message"
          className="outline-none rounded bg-[#f5f5f5] w-full max-w-5xl h-40 sm:h-52 p-3 placeholder:text-[#bfbfbf] resize-none"
        ></textarea>

        {/* Button */}
        <Button text="Send Message" className="w-full max-w-xs sm:max-w-sm" />
      </div>

      <Footer />
    </>
  );
};

export default ContactForm;
