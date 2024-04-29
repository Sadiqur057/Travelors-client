import { Input, Textarea } from "@material-tailwind/react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section className="w-[90%] md:w-4/5 mx-auto  py-6 dark:bg-gray-100 dark:text-gray-900">
      <div className="grid max-w-6xl grid-cols-1  mx-auto  lg:grid-cols-11 xl:grid-cols-12 items-center mb-8 md:mb-14 gap-1 md:gap-6 ">
        <div className="py-6 lg:col-span-5 xl:col-span-6">
          <h1 className="sm:text-3xl text-2xl font-bold mb-4">Get in touch</h1>
          <p className="pt-2 pb-4">
            {" "}
            Have questions, feedback, or need assistance? Fill in the form to
            start a conversation. We look forward to hearing from you!
          </p>
          <div className="space-y-4">
            <p className="flex items-center gap-6">
              <FaLocationDot className="text-c-primary text-[22px]"></FaLocationDot>
              <span>TA-1/2 address, Bangladesh</span>
            </p>
            <p className="flex items-center gap-6">
              <FaPhone className="text-c-primary text-xl"></FaPhone>
              <span>+8801712453211</span>
            </p>
            <p className="flex items-center gap-6">
              <MdEmail className="text-c-primary text-2xl"></MdEmail>
              <span>Travelors@mail.com</span>
            </p>
          </div>
        </div>
        <div className="space-y-4 lg:col-span-6 xl:col-span-6">
          <div className="grid grid-cols-2 gap-4 col-span-full ">
            <div className="col-span-full sm:col-span-1 ">
              <Input label="Name" color="teal" />
            </div>
            <div className="col-span-full sm:col-span-1">
              <Input label="Email" color="teal" />
            </div>
          </div>
          <div className="col-span-full">
            <div className="relative w-full min-w-[200px]">
              <Textarea color="teal" label="Message"></Textarea>
            </div>
          </div>
          <div className="col-span-full">
            <div className="relative w-full min-w-[200px]">
              <button className="btn bg-c-primary w-full text-white">Submit</button>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Contact;
