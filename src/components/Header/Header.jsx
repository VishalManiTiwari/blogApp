import React, { useState } from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="py-4 bg-gray-700 shadow-md">
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <button onClick={() => navigate("/")} aria-label="Home">
              <Logo width="70px" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                  }
                />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <ul
            className={`fixed top-0 left-0 w-full h-full bg-gray-800 transform ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform md:relative md:transform-none md:flex md:space-x-6 md:ml-auto md:bg-transparent md:items-center md:h-auto md:top-auto md:left-auto md:justify-end z-50`}
          >
            {/* Close Button for Mobile Menu */}
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-white md:hidden"
              aria-label="Close Menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Navigation Items */}
            <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-6">
              {navItems.map(
                (item) =>
                  item.active && (
                    <li key={item.name} className="md:mr-4">
                      <button
                        onClick={() => {
                          navigate(item.slug);
                          setMenuOpen(false); 
                        }}
                        className="inline-block px-6 py-2 text-white font-semibold rounded-full transition duration-300 ease-in-out transform hover:bg-gray-700 hover:scale-105 focus:ring focus:ring-gray-300"
                      >
                        {item.name}
                      </button>
                    </li>
                  )
              )}

              {/* Logout Button */}
              {authStatus && (
                <li className="my-4 md:my-0">
                  <LogoutBtn />
                </li>
              )}
            </div>
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
