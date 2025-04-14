export const Navbar = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-[40px] 
    flex items-center justify-between z-50 
    text-white text-xl bg-transparent
    max-sm:px-0 lg:px-10 xl:px-20 px-10
    
    "
    >
      <img src="/Gravta.png" alt="" className="w-20" />
      <button className="border border-white px-4 py-1 text-[12px]">
        Contact
      </button>
    </div>
  );
};
