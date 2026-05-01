export default function Navbar() {
  return (
    <div className="fixed top-0 w-full z-50 flex justify-between bg-black px-8 py-4 text-white">
      <a className="font-bold" href="#top">
        Avenue Mall
      </a>

      <div className="space-x-6 text-sm md:text-base">
        <a className="hover:text-gray-200" href="#retail">
          Leasing
        </a>
        <a className="hover:text-gray-200" href="#entertainment">
          Footfall
        </a>
        <a className="hover:text-gray-200" href="#events">
          Events
        </a>
        <a className="hover:text-gray-200" href="#contact">
          Contact
        </a>
      </div>
    </div>
  );
}