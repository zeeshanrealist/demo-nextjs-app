export default function LandingPageStats({ imgPath, statText, quantityText } : {imgPath: string, statText: string, quantityText: string}) {
  return (
    <div className="sm:mb-28 md:mb-0">
      <img src={imgPath} alt="" />
      <div className="sm:text-6xl sm:my-4 md:text-8xl font-bold md:mb-6 md:mt-4">{quantityText}</div>
      <div className="text-greyText md:text-2xl text-center">{statText}</div>
    </div>
  );
}
