import { FaLaptopMedical } from "react-icons/fa";
import { LiaNotesMedicalSolid } from "react-icons/lia";
import { PiPill } from "react-icons/pi";

const HowItWorks = () => {
  return (
    <section
      id="About"
      className="w-full flex justify-center pt-32 max-md:pt-16"
    >
      <div className="flex flex-col w-full max-lg:w-4/5">
        <div className="items-center flex flex-col gap-10">
          <h2 className="text-4xl font-bold dark-text light-text">
            <span className="text-blue-400">How </span> it works
          </h2>
          <p className="flex justify-center text-center w-3/5 max-lg:w-full text-lg dark-text light-text leading-relaxed">
            APP_NAME description
          </p>
        </div>
        <div className="w-full flex text-center light-text dark-text gap-16 pt-14 max-sm:flex-col max-sm:items-center">
          <div className="flex flex-col gap-5 items-center w-1/3 max-md:w-full">
            <LiaNotesMedicalSolid size={50} className="text-[#D2B48C]" />
            <h2 className="text-lg font-bold">Subheading 1</h2>
            <p className="text-lg">Description 1</p>
          </div>
          <div className="flex flex-col gap-5 items-center w-1/3 max-md:w-full">
            <FaLaptopMedical size={50} className="text-[#B7AFA3]" />
            <h2 className="text-lg font-bold">Subheading 2</h2>
            <p className="text-lg">Description 2</p>
          </div>
          <div className="flex flex-col gap-5 items-center w-1/3 max-md:w-full">
            <PiPill size={50} className="text-[#FFB07C]" />
            <h2 className="text-lg font-bold">Subheading 3</h2>
            <p className="text-lg">Description 3</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
