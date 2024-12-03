import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface SectionProps {
  imageSrc: string;
  textColor: string;
  buttonColor: string;
  hoverColor: string;
  reverse?: boolean; // Prop to reverse the order of text and image
}

const Section: React.FC<SectionProps> = ({
  imageSrc,
  textColor,
  buttonColor,
  hoverColor,
  reverse = false,
}) => (
  <section className="bg-[#0D0D12] rounded-xl min-h-5xl space-x-10 flex items-center justify-center p-8">
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } gap-60 md:max-w-5xl items-center`}
    >
      {/* Text Content */}
      <div className="flex flex-col text-left space-y-4 md:w-1/2">
        <p className={`text-sm ${textColor}`}>
          Experience Innovation with Ultratec 3D
        </p>
        <h1 className="text-7xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
          FORMULA 1 CAR 
          <br />
          Powered by 3D Printing
        </h1>
        <p className="text-gray-400">
          Explore the cutting-edge world of 3D printing with Ultratec 3D. From
          prototype development to high-performance engineering solutions, our
          services redefine the possibilities of manufacturing in Dubai.
        </p>
        <Link href={'https://www.ultratec3d.ae/projects/'}
          className={`mt-4 p-3 rounded-lg ${buttonColor} hover:${hoverColor} text-black w-32`}
        >
          Learn More
        </Link>
      </div>

      {/* Image Content */}
      <div className="w-full relative group overflow-hidden md:w-1/2">
        <Image
          src={imageSrc}
          alt="F1 3D Printing Project by Ultratec"
          width={500}
          height={300}
          className="rounded-md object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
      </div>
    </div>
  </section>
);

export const Content: React.FC = () => {
  return (
    <>
      <Section
        imageSrc="https://res.cloudinary.com/dg2pzsxp0/image/upload/v1730797683/2024-02-24T18_39_30.988Z-F1_edited_car_cph5ky.jpg"
        textColor="text-pink-500"
        buttonColor="bg-pink-600"
        hoverColor="bg-pink-500"
      />
    </>
  );
};
