import { Button } from "@heroui/react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-[url('https://b.stablecog.com/7e10390f-803b-4f05-9854-7151aaff23a0.jpeg')] h-[80vh] w-full bg-cover bg-no-repeat bg-center flex items-center justify-center rounded-lg shadow-2xl">
      {/* Overlay */}
      <div className="w-full h-full rounded-lg bg-black/30 flex items-center ">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 max-w-2xl">
           STRIKE ATTACK PC GAMES 
          </h1>
          <p className="text-lg text-center md:text-xl mb-6 max-w-xl text-gray-200">
           battle your way through intense combat scenarios, utilizing a wide array of weapons and tactics to outsmart and overpower your opponents in this action-packed gaming experience.
          </p>
            <div className="flex justify-center">
                <Link href={"/products"}>
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-6 px-4 rounded-full">
                        View All Games
                    </Button>
                </Link>
            </div>  
        </div>
      </div>
    </div>
  );
};

export default Hero