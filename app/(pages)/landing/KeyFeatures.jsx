import Image from "next/image";
import placeholder from "@/public/placeholder.png";
import { FiCheckCircle } from "react-icons/fi";

const KeyFeatures = () => {
  return (
    <>
      <section
        id="Features"
        className="w-full flex justify-center pt-32 max-md:pt-16 light-text dark-text"
      >
        <div className="flex gap-10 items-center w-4/5 max-lg:w-full max-lg:flex-col max-lg:gap-16">
          <div className="w-1/2 flex justify-center max-lg:w-4/5">
            <Image
              src={placeholder}
              className="rounded-lg opacity-50 w-full"
              alt=""
              placeholder="blur"
            />
          </div>
          <div className="w-1/2 flex flex-col gap-8 max-lg:w-full">
            <div className="flex flex-col gap-8">
              <div className="flex gap-6 pb-6 max-md:pb-0">
                <h2 className="text-4xl font-bold leading-relaxed">
                  <span className="text-primary">Key </span>features
                </h2>
              </div>
              {/* Feature 1 */}
              <div className="flex gap-4">
                <div>
                  <FiCheckCircle size={30} color="#43b7ff" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="leading-relaxed text-lg font-bold">One</h3>
                  <p className="leading-relaxed text-lg">Description</p>
                </div>
              </div>
              {/* Feature 2 */}
              <div className="flex gap-4">
                <div>
                  <FiCheckCircle size={30} color="#43b7ff" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="leading-relaxed text-lg font-bold">Two</h3>
                  <p className="leading-relaxed text-lg">Description</p>
                </div>
              </div>
              {/* Feature 3 */}
              <div className="flex gap-4">
                <div>
                  <FiCheckCircle size={30} color="#43b7ff" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="leading-relaxed text-lg font-bold">Three</h3>
                  <p className="leading-relaxed text-lg">Description</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="Features"
        className="w-full flex justify-center max-lg:pt-8 bg-white dark:bg-[#1D232A] light-text dark-text"
      >
        <div className="flex gap-10 items-center w-4/5 max-lg:w-full max-lg:flex-col max-lg:gap-16">
          <div className="w-1/2 flex flex-col gap-8 max-lg:w-full">
            {/* Feature 4 */}
            <div className="flex gap-4">
              <div>
                <FiCheckCircle size={30} color="#43b7ff" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="leading-relaxed text-lg font-bold">Four</h3>
                <p className="leading-relaxed text-lg">Description</p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="flex gap-4">
              <div>
                <FiCheckCircle size={30} color="#43b7ff" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="leading-relaxed text-lg font-bold">Five</h3>
                <p className="leading-relaxed text-lg">Description</p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="flex gap-4">
              <div>
                <FiCheckCircle size={30} color="#43b7ff" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="leading-relaxed text-lg font-bold">Six</h3>
                <p className="leading-relaxed text-lg">Description</p>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex justify-center max-lg:w-4/5">
            <Image
              src={placeholder}
              className="rounded-lg opacity-50 w-full"
              alt=""
              placeholder="blur"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default KeyFeatures;
