/*
This file generates the Student Panel template site(Header, Navbar, Footer). 
*/
import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useContext } from "react";
import SharingContext from "../../context/SharingContext";
import classNames from "classnames";
import ThemeSelector from "../../components/ThemeSelector";
import {
  IoHomeOutline,
  IoBanOutline,
  IoLockClosedOutline,
  IoClipboardOutline,
  IoLogOutOutline,
} from "react-icons/io5";

export default function StudentTemplate() {
  const { show, dark, themeNo } = useContext(SharingContext);

  // import("./theme-css/color-".concat(themeNo.toString()).concat(".css"));
  // console.log("./theme-css/color-".concat(themeNo.toString()).concat(".css"));

  // Adjust the className for navbar collapse toggle
  const mainClass = classNames("main", {
    active: !show,
  });

  // Adjust the className to toggle Dark mode
  const bodyClass = classNames("divbody", {
    dark: dark,
  });

  // Explanation of the objects can be found in the Navbar component
  const links = [
    {
      title: "Home",
      to: "home",
      icon: <IoHomeOutline />,
    },
    {
      title: "Apply for Outpass",
      to: "outpass",
      icon: <IoClipboardOutline />,
    },
    {
      title: "Appeal Ban",
      to: "appeal",
      icon: <IoBanOutline />,
    },
    {
      title: "Change Password",
      to: "changePassword",
      icon: <IoLockClosedOutline />,
    },
    {
      title: "Sign Out",
      to: "login",
      icon: <IoLogOutOutline />,
    },
  ];

  return (
    <div className={bodyClass}>
      <div className="container">
        <NavBar links={links} />
        <div className={mainClass}>
          <Header label="Student Panel" />
          <Outlet />
          <ThemeSelector />
          <Footer />
        </div>
      </div>
    </div>
  );
}
