import { Outlet } from "react-router";
import home from "../assets/home.png";

function AuthLayout() {
  return (
    <section className="container mx-auto grid grid-cols-12 items-center justify-center min-h-screen">
      <div className="hidden lg:block col-span-6 mx-auto">
        <img src={home} alt="AuthImage" />
      </div>
      <div className="col-span-12 lg:col-span-6 mx-auto">
        <Outlet />
      </div>
    </section>
  );
}

export default AuthLayout;
