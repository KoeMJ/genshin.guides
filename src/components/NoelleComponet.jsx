import NoelleImg from "../assets/NoelleBanner.png";
import NoelleThumbnail from "../assets/NoelleThumb.png";

export const NoelleThumbOne = () => {
  return (
    <img className="hidden lg:block  absolute left-[55vw] bottom-[-55em] animate-move-slow" src={NoelleImg} alt="NoelleBanner" />
  );
};

export const NoelleThumbTwo = () => {
  return (
    <div className="block sm:hidden">
      <img
        className="rounded-xl"
        src={NoelleThumbnail}
        alt="NoelleBanner"
      />
    </div>
  );
};
