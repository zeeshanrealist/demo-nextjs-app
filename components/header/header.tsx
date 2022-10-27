export default function Header() {
  return (
    <header className="flex justify-between items-center sm:pt-5 sm:px-5 md:pt-16 md:px-16">
      <img src='/images/logo.svg' alt="logo" className="h-full sm:w-24 md:w-60" />
      <button className="bg-white border border-primaryButton text-primaryButton md:text-sm sm:text-xs font-sans md:font-normal rounded-full md:px-7 md:py-2 sm:py-1 sm:px-4">Try It Free</button>
    </header>
  );
}
