export default function Navbar() {
    return (
      <div className="fixed top-0 w-full z-50 bg-black text-white flex justify-between px-8 py-4">
        <h1 className="font-bold">Mega Mall</h1>
  
        <div className="space-x-6">
          <a href="#retail">Retail</a>
          <a href="#entertainment">Entertainment</a>
          <a href="#events">Events</a>
        </div>
      </div>
    );
  }