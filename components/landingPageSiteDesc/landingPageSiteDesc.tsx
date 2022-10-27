export default function LandingPageSiteDesc({ descTitle, descContent, descBgImgPathDesktop, descBgImgPathMob, descImgPath } :
  { descTitle: string, descContent: string, descBgImgPathDesktop: string, descBgImgPathMob: string, descImgPath: string }) {
  return (
    <div className={`md:bg-[url('/images/bg-section-top-desktop-1.svg')] sm:bg-[url('/images/bg-section-top-mobile-1.svg')] bg-no-repeat`}>
      <div>
        <div>{descTitle}</div>
        <div>{descContent}</div>
      </div>
      <img src={descImgPath} alt="" />
    </div>
  );
}