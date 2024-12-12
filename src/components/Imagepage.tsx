import Image from "next/image";

export default function ImagePage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex w-full md:w-4/5 h-3/5 overflow-hidden rounded-3xl relative flex-col md:flex-row">
        
        {/* Left Image */}
        <div className="relative flex-1 transition-all duration-500 ease-in-out group md:hover:flex-[4] flex-[2] md:flex-1 group-hover:flex-[4]">
          <Image
            src="/gym-1.jpg"
            alt="Image 1"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg md:rounded-l-lg"
          />
          <div className="absolute top-4 left-4 text-white text-lg font-bold bg-opacity-60 px-3 py-1 rounded">
            STRENGTH
          </div>
        </div>

        {/* Center Image */}
        <div className="relative transition-all duration-500 ease-in-out group md:flex-[2.5] md:hover:flex-[3] flex-[2] group-hover:flex-[2.5]">
          <Image
            src="/gym-3.jpg"
            alt="Image 2"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute top-4 left-4 text-white text-lg font-bold bg-opacity-60 px-3 py-1 rounded">
            MOBILITY
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex-1 transition-all duration-500 ease-in-out group md:hover:flex-[4] flex-[2] md:flex-1 group-hover:flex-[4]">
          <Image
            src="/gym-2.png"
            alt="Image 3"
            layout="fill"
            objectFit="cover"
            className="rounded-b-lg md:rounded-r-lg"
          />
          <div className="absolute top-4 left-4 text-white text-lg font-bold bg-opacity-60 px-3 py-1 rounded">
            DRILLS
          </div>
        </div>
      </div>
    </div>
  );
}
