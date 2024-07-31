import * as React from "react";
import homeIcon from "../../assets/icons/home.svg";
import addIcon from "../../assets/icons/add.svg";
import directIcon from "../../assets/icons/direct.svg";
import logoutIcon from "../../assets/icons/logout.svg";
import myphotoIcon from "../../assets/icons/myphotos.svg";
import settingsIcon from "../../assets/icons/settings.svg";
import notificationIcon from "../../assets/icons/notification.svg";
import profileIcon from "../../assets/icons/profile.svg";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../../lib/utils";
import { buttonVariants } from "../ui/button";
import { useUserAuth } from "../../context/userAuthContext";

interface ISidebarProps {}

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: homeIcon,
  },
  {
    name: "Add Photos",
    link: "/post",
    icon: addIcon,
  },
  {
    name: "My Photos",
    link: "/myphotos",
    icon: myphotoIcon,
  },
  {
    name: "Profile",
    link: "/profile",
    icon: profileIcon,
  },
  {
    name: "Notifications",
    link: "#",
    icon: notificationIcon,
  },
  {
    name: "Direct",
    link: "/direct",
    icon: directIcon,
  },
  {
    name: "Settings",
    link: "/settings",
    icon: settingsIcon,
  },
];

const Sidebar: React.FunctionComponent<ISidebarProps> = () => {
  const { pathname } = useLocation();
  const { logOut } = useUserAuth();

  return (
    <nav className="flex flex-col relative h-screen max-w-sm w-full">
      <div className="flex justify-center m-5">
        <div className="text-white text-lg">PhotoGram</div>
      </div>
      {navItems.map((item) => (
        <Link to={item.link} key={item.name} className="flex">
          <div
            className={cn(
              buttonVariants({ variant: "default" }),
              pathname === item.link
                ? "bg-white text-white-800 hover:bg-white rounded cursor-pointer"
                : "hover:bg-slate-950 hover:text-white bg-transparent rounded-none cursor-pointer",
              "justify-start flex items-center w-full"
            )}
          >
            <span>
              <img
                src={item.icon}
                className="w-5 h-5 mr-2"
                style={{
                  filter: pathname === item.link ? "invert(0)" : "invert(1)",
                }}
              />
            </span>
            <span>{item.name}</span>
          </div>
        </Link>
      ))}
      <Link to="/login" className="flex" onClick={logOut}>
        <div
          className={cn(
            buttonVariants({ variant: "default" }),
            pathname === "/login"
              ? "bg-white text-white-800 hover:bg-white rounded cursor-pointer"
              : "hover:bg-slate-950 hover:text-white bg-transparent rounded-none cursor-pointer",
            "justify-start flex items-center w-full"
          )}
        >
          <span>
            <img
              src={logoutIcon}
              className="w-5 h-5 mr-2"
              style={{
                filter: pathname === "/login" ? "invert(0)" : "invert(1)",
              }}
            />
          </span>
          <span>Logout</span>
        </div>
      </Link>
    </nav>
  );
};

export default Sidebar;
