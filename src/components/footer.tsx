export function Footer() {
  return (
    <div className="flex flex-row items-center justify-between h-8 border-t text-white px-4">
      <p className="text-[10px] max-sm:text-[9px]">
        © {new Date().getFullYear()} Gravta LLC. All Rights Reserved.
      </p>
      <a
        href="https://www.linkedin.com/company/gravtacreative"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[10px] max-sm:text-[9px]"
      >
        Follow Us
      </a>
    </div>
  );
}
