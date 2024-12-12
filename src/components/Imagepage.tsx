import Image from "next/image";

export default function ImagePage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col md:flex-row w-full md:w-4/5 h-3/5 overflow-hidden rounded-3xl relative">
        <div className="relative flex-1 md:flex-1 transition-all duration-500 ease-in-out hover:md:flex-[4] group">
          <Image
            src="/gym-1.jpg"
            alt="Image 1"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
          />
          <div className="absolute top-4 left-4 text-white text-lg font-bold bg-opacity-60 px-3 py-1 rounded">
            STRENGTH
          </div>
        </div>
        <div className="relative flex-[2.5] md:flex-[2.5] transition-all duration-500 ease-in-out hover:md:flex-[3] group">
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
        <div className="relative flex-1 md:flex-1 transition-all duration-500 ease-in-out hover:md:flex-[4] group">
          <Image
            src="/gym-2.png"
            alt="Image 3"
            layout="fill"
            objectFit="cover"
            className="rounded-b-lg md:rounded-r-lg md:rounded-bl-none"
          />
          <div className="absolute top-4 left-4 text-white text-lg font-bold bg-opacity-60 px-3 py-1 rounded">
            DRILLS
          </div>
        </div>
      </div>
    </div>
  );
}
