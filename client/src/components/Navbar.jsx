import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import axios from "axios";

// ✅ shadcn imports
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const { valid, user, loading, setValid, setUser } = useContext(AuthContext);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:5000/auth/logout", {
        withCredentials: true,
      });
      setValid(false);
      setUser({});
      navigate("/");
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message);
    }
  };

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-yellow-400 via-yellow-300 to-blue-500"
          : "bg-gradient-to-r from-gray-900 via-violet-500 to-gray-900 shadow-lg shadow-violet-900"
      }`}
    >
      <div
        className={`overflow-x-hidden flex items-center justify-between md:px-6 ${
          scrolled ? "py-6" : "py-4"
        } transition-all`}
      >
        {/* Left buttons */}
        <div className="max-md:hidden flex space-x-4">
          <button className="rounded-full shadow-[0_0_10px_2px_white] text-white hover:text-yellow-400 font-medium px-4 py-2 transition-all duration-200">
            Blog
          </button>
          <button className="rounded-full shadow-[0_0_10px_2px_white] text-white hover:text-yellow-400 font-medium px-4 py-2 transition-all duration-200">
            Help
          </button>
          <button className="rounded-full shadow-[0_0_10px_2px_white] text-white hover:text-yellow-400 font-medium px-4 py-2 transition-all duration-200">
            Community
          </button>
        </div>

        {/* Logo */}
        <div className="ml-10 md:flex-1 flex justify-center items-center">
          <img
            src="https://www.hp.com/content/dam/sites/worldwide/solutions/ai-for-business/_20240126_HPAI_Logo-MAIN@2x.png"
            alt="Logo"
            className="h-7 max-md:h-5 w-auto"
          />
          <h2
            className="max-md:text-xl text-white text-2xl font-bold ml-2 cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            Velora
          </h2>
        </div>

        {/* Auth buttons */}
        {valid ? (
          <div className="flex items-center gap-6 mr-10">
            <button
              onClick={() => {
                navigate("/dashboard");
              }}
              className="max-md:hidden rounded-full shadow-[0_0_10px_2px_white] text-white hover:text-yellow-400 font-medium px-4 py-2 transition-all duration-200 cursor-pointer"
            >
              Dashboard
            </button>

            {/* ✅ shadcn Avatar + Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 focus:outline-none">
                <Avatar>
                  <AvatarImage
                    src="https://imgs.search.brave.com/awksT_Zoh8G9Qn5d-CbZP4gAPcl0EDxLP0J88fgAnB4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTg3/ODA1MTU2L3ZlY3Rv/ci9wcm9maWxlLXBp/Y3R1cmUtdmVjdG9y/LWlsbHVzdHJhdGlv/bi5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9Z2t2TERDZ3NI/SC04SGVRZTdKc2po/bE9ZNnZSQkprX3NL/VzlseWFMZ21Mbz0"
                    alt={user.name}
                  />
                  <AvatarFallback>{user?.name?.[0] || "U"}</AvatarFallback>
                </Avatar>
                <p className="text-white cursor-pointer">{user.name}</p>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-48 mt-4 ml-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                <DropdownMenuLabel>Menu</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate("/")}>
                  Home
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/dashboard")}>
                  Dashboard
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/music")}>
                  Music
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <div className="max-md:text-sm flex items-center space-x-2">
            <Link
              to="/login"
              className="rounded-full shadow-[0_0_10px_2px_white] text-white hover:text-yellow-400 font-medium px-4 py-2 transition-all duration-200"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className={`rounded-full shadow-[0_0_10px_2px_white] font-bold px-4 py-2 transition-all duration-500
              ${
                scrolled
                  ? "bg-yellow-400 text-black translate-x-0 opacity-100"
                  : "bg-yellow-400 text-black translate-x-32 opacity-0 pointer-events-none"
              }
              hover:bg-blue-500 hover:text-white`}
            >
              Create an Account
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
