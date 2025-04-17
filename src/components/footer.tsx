export function Footer() {
  return (
    <div className="relative flex flex-row items-center justify-between border-t max-sm:px-5 text-white w-full h-[30px]">
      <p className="text-[10px] max-sm:text-[9px]">
        © {new Date().getFullYear()} Gravta LLC. All Rights Reserved.
      </p>
    </div>
  );
}
