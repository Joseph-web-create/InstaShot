import Logo from "../../assets/Logo.svg";
import { Link } from "react-router";

function Register() {
  return (
    <div className="w-[90vw] md:w-[500px] border rounded-md border-[#A1A1A1] py-[40px] px-[28px]">
      <div className="flex justify-center">
        <Link to="/">
          <img src={Logo} alt="InstaShot logo" />
        </Link>
      </div>
      <form>
        
      </form>
    </div>
  );
}

export default Register;
