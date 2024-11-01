import Social from "@/components/Social"; // Keep this import
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Image from "next/image";
import photo from "@/public/photo.jpeg"; // Ensure the image path is correct

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Left Side Content */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Website Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent">Syed Bilal</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              {/* Button Component */}
              <button className="uppercase flex items-center gap-2 border-2 border-accent text-accent py-2 px-4 rounded hover:bg-accent hover:text-white transition duration-300">
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </button>

              {/* Social Component */}
              <div className="mb-8 xl:mb-0">
                <Social 
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right Side Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Image src={photo} alt="Syed Bilal" width={500} height={500} />
          </div>
        </div>
      </div>
    </section>
  );
}
