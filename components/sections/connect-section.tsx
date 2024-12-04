import { Button } from "@/components/ui/button";
import Link from "next/link";
// Importing graphic design-related icons from react-lucide
import { PenTool, Camera, Image, Edit } from "lucide-react";

export function ConnectSection() {
  return (
    <section className="relative">
      <div className="bg-[#0D0D12] rounded-2xl p-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">
            Unleash Your Engineering Potential
          </h2>
          <p className="text-xl text-gray-300 mb-6">
            Connect with industry pioneers, discover groundbreaking innovations,
            and collaborate with top professionals in the field.
          </p>
          <Link
            className="bg-pink-500 text-black hover:bg-pink-400 p-3 rounded-lg"
            href="/contact"
          >
            Join Now
          </Link>
        </div>
        {/* <div className="absolute bottom-4 right-4 flex -space-x-4">
          <div className="w-12 h-12 rounded-full bg-gray-800 border-2 border-black flex items-center justify-center">
            <PenTool size={24} className="text-pink-600" />
          </div>
          <div className="w-12 h-12 rounded-full bg-gray-800 border-2 border-black flex items-center justify-center">
            <Camera size={24} className="text-pink-600" />
          </div>
          <div className="w-12 h-12 rounded-full bg-gray-800 border-2 border-black flex items-center justify-center">
            <Image size={24} className="text-pink-600" />
          </div>
          <div className="w-12 h-12 rounded-full bg-gray-800 border-2 border-black flex items-center justify-center">
            <Edit size={24} className="text-pink-600" />
          </div>
          <div className="w-12 h-12 rounded-full bg-pink-600 border-2 border-black flex items-center justify-center">
            <span className="text-sm font-bold">17k+</span>
          </div>
        </div> */}
      </div>
    </section>
  );
}
