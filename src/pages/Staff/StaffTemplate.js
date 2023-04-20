/*
This file generates the Administrator Panel template site(Header, Navbar, Footer). 
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
  IoCheckmarkCircleOutline,
  IoLockClosedOutline,
} from "react-icons/io5";

export default function StaffTemplate() {
  const { show, dark, themeNo } = useContext(SharingContext);

  //   import("./theme-css/color-".concat(themeNo.toString()).concat(".css"));
  //   console.log("./theme-css/color-".concat(themeNo.toString()).concat(".css"));

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
      title: "Approve Outpass",
      to: "approve",
      icon: <IoCheckmarkCircleOutline />,
    },
    {
      title: "Logout",
      to: "login",
      icon: <IoLockClosedOutline />,
    },
  ];

  return (
    <div className={bodyClass}>
      <NavBar links={links} />
      <div className={mainClass}>
        <Header label="Staff Panel" />
        <Outlet />
        <ThemeSelector />
        <Footer />
      </div>
    </div>
  );
}
