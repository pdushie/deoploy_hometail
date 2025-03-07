import Image from "next/image";
import Navbar from "@/app/(pages)/_components/Navbar";
import placeholder from "@/public/pet.jpg";

const Hero = () => {
  return (
    <section id="Home" className="relative w-full h-screen">
     
      {/* Background Image */}
      <div className="w-full">
        <Image
          src={placeholder}
          alt=""
          fill
          priority
          placeholder="blur"
          className="object-cover opacity-50"
        />
      </div>
      {/* Text Overlay */}
      <div className="relative z-10 flex flex-col w-full px-6 pt-[20vh] gap-8 max-md:gap-16 max-md:pt-[15vh] items-center text-center justify-between">
        <h1 className="text-5xl max-md:text-4xl leading-tight font-bold text-white drop-shadow-lg">
        Find Your New Best Friend Today!
        </h1>
        <p className="text-xl light-text dark-text drop-shadow-lg font-semibold">
        Your new best friend is just a click away
          <br />
          Browse and adopt today!
        </p>
      </div>
    </section>
  );
};

export default Hero;
