import { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import {AiOutlineClose} from "react-icons/ai"

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden max-lg:flex">
          <div>
            <img
            className="cursor-pointer"
              src={hamburger}
              alt="Hamburger"
              width={25}
              height={25}
              onClick={() => {
                setToggleMenu(true);
              }}
            />
          </div>
          {toggleMenu && (
            <div className="w-full h-screen flex  justify-center items-center z-30 fixed top-0 left-0 flex-col bg-orange-600">
              <AiOutlineClose className="absolute top-8 right-8 cursor-pointer text-white text-3xl"
                onClick={() => {
                  setToggleMenu(false);
                }}
              />
              <ul >
                {navLinks.map((item) => (
                  <li className="m-8 text-center cursor-pointer" key={item.label}>
                    <a
                      href={item.href}
                      className="font-montserrat leading-normal text-3xl text-white"
                      onClick={()=>setToggleMenu(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
