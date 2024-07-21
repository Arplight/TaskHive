import React, { useEffect, useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaListCheck } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { LogOutHandler } from "../../../Context/Auth_Provider/AuthHandler";

const Navbar = () => {
  // Reading state
  const [currentActive, setCurrentActive] = useState("");
  const currentLocation = useLocation().pathname.replace("/", "");
  // State updater
  useEffect(() => {
    setCurrentActive(currentLocation);
  }, [currentLocation]);
  const navItems = [
    { icon: <BiLogOut className="nav-icon" />, path: "" },
    {
      icon: <FaListCheck className="nav-icon" />,
      path: "/list",
      label: "list",
    },
    {
      icon: <CgProfile className="nav-icon" />,
      path: "/profile",
      label: "profile",
    },
  ];

  return (
    <nav className="py-1 flex justify-center" data-testid="navbar">
      <ul className="flex gap-4">
        {navItems.map(({ icon, path, label }, index) => (
          <li
            key={index}
            className={`text-[#ffffffad] ease-in-out duration-300 ${
              currentActive === label && "nav-active"
            } `}
          >
            {path ? (
              <Link to={path} data-testid="path-button">
                {icon}
              </Link>
            ) : (
              <button
                className="flex"
                onClick={() => LogOutHandler()}
                data-testid="logout-button"
              >
                {icon}
              </button>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
