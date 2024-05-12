import { Link } from "react-router-dom";
import LogoImage from "../../../assets/images/sc-black-removebg-cr.png"
import LogoImageLong from "../../../assets/images/2-removebg-preview.png"

type LogoTypes = {
  type: string
}

const Logo = (props: LogoTypes) => {
  return (
    <>
      <section className="w-[150px]">
        <Link to={"/"}>
          {props.type === "long" ? (<img className="w-full" src={LogoImageLong} alt={LogoImageLong} />) : (<img className="w-full" src={LogoImage} alt={LogoImage} />)}
        </Link>
      </section>
    </>
  );
};

export default Logo;
