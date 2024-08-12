import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Gem, TrendingUp, Users, Crown, Clover } from "lucide-react";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(0);
  const [imageLoadError, setImageLoadError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const currentPath = SIDEBAR_LINKS.findIndex(link => link.path === location.pathname);
    if (currentPath !== -1) {
      setActiveLink(currentPath);
    }
  }, [location]);

  const handleImageError = () => {
    console.error("Error loading WebP image");
    setImageLoadError(true);
  };

  const SIDEBAR_LINKS = [
    { id: 1, path: "/", name: "Home", icon: Crown },
    { id: 2, path: "/luckydraw", name: "Lucky Draw Calculator", icon: Clover },
    { id: 3, path: "/diamonddraw", name: "Diamond Draw Calculator", icon: Gem },
    { id: 4, path: "/rankup", name: "Rank Up Calculator", icon: TrendingUp },
    { id: 5, path: "/partners", name: "Partners Project", icon: Users },
  ];

  return (
    <nav className="w-16 md:w-56 fixed left-0 top-0 z-10 h-screen border-r pt-8 px-2 md:px-4 bg-white flex flex-col overflow-y-auto">
      <div className="mb-8 flex justify-center items-center">
        <picture>
          <source srcSet="/logodesk.webp" type="image/webp" media="(min-width: 768px)" />
          <source srcSet="/logomob.webp" type="image/webp" />
          <img
            src="/logodesk.png"
            alt="Company Logo"
            className="w-8 md:w-40"
            onError={handleImageError}
          />
        </picture>
        {imageLoadError && <p className="text-red-500 text-xs mt-2">Image failed to load</p>}
      </div>

      <ul className="mt-6 space-y-6 flex-grow">
        {SIDEBAR_LINKS.map((link, index) => (
          <li
            key={link.id}
            className={`font-medium rounded-md py-2 px-2 md:px-5 hover:bg-gray-100 hover:text-indigo-500 ${
              activeLink === index ? "bg-indigo-100 text-indigo-500" : ""
            }`}
          >
            <Link
              to={link.path}
              className="flex justify-center md:justify-start items-center md:space-x-5 w-full h-full"
              onClick={() => setActiveLink(index)}
              aria-label={link.name}
            >
              {React.createElement(link.icon, { 
                size: 24, 
                className: "md:w-6 md:h-6",
                "aria-hidden": "true"
              })}
              <span className="sr-only md:not-sr-only md:inline text-xs md:text-sm text-gray-500">
                {link.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="w-full px-2 md:px-4 py-2 text-center hidden md:block">
        <p className="text-xs text-gray-500">Built by Rsyx</p>
      </div>
    </nav>
  );
};

export default Sidebar;