import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen pt-16 bg-yellow-100 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row justify-between items-center gap-12">
        {/* Intro Section */}
        <div className="intro text-center lg:text-left max-w-md">
          <p className="text-lg sm:text-xl leading-relaxed text-gray-700">
            Perfume is a liquid that gives people, things, and rooms a good smell. It is made of oils which give off scent to the surrounding air. The odoriferous compounds that make up a perfume can be manufactured synthetically or extracted from plant or animal sources.
          </p>
          <Link href="/product">
            <button className="mt-6 px-6 py-2 bg-blue-600 text-white text-lg rounded-md hover:bg-blue-700 transition duration-200 ease-in-out">
              Shop Now
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="profilePic flex-shrink-0">
          <img
            src="/image10.png"
            alt="profile"
            className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
