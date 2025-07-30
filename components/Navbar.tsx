import Image from "next/image";
import Logo from "../app/Logo.png";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-28 py-6 bg-transparent">
      <div>
        <Image src={Logo} alt="Sathyabama Logo" width={350} height={50} />
      </div>
      <div className="space-x-4">
        <Button
          size="lg"
          className="bg-[#831238] hover:bg-[#831238]/90 rounded-xl font-inter"
        >
          Apply Now
        </Button>
        <Button
          size="lg"
          className="bg-[#831238] hover:bg-[#831238]/90 rounded-xl font-inter"
        >
          Virtual Tour
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
