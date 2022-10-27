export default function Banner() {
  return (
    <div className="md:mt-64 md:mb-0 sm:my-32 text-center sm:px-9">
      <h1 className="font-poppins text-heading md:text-5xl sm:text-2xl">Build The Community Your Fans Will Love</h1>
      <p className="md:mt-8  sm:mt-8 md:mx-96 text-heading font-sans md:text-xl sm:text-sm">Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion</p>
      <button className="bg-primaryButton text-white md:mt-8 sm:mt-12 mb-24 md:text-xl sm:text-xs font-sans md:font-normal sm:font-semibold rounded-full md:px-24 md:py-6 sm:py-3 sm:px-10">Get Started For Free</button>
      <img src="/images/screen-mockups.svg"  alt="screen-mocks" className="h-full my-0 mx-auto" />
    </div>
  );
}
