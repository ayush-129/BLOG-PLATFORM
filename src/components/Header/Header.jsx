import React from "react";
import { Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "Login", slug: "login", active: !authStatus },
    { name: "Signup", slug: "signup", active: !authStatus },
    { name: "All Posts", slug: "all-posts", active: authStatus },
    { name: "Add Post", slug: "add-post", active: authStatus },
  ];

  return (
    <div className="py-3 shadow bg-blue-200">
      <div className="flex items-center justify-between mx-4 md:mx-8 lg:mx-16">
        <Link to="/" className="mr-4">
          <Logo width="70px" />
        </Link>
        <nav className="flex-grow">
          <ul className="flex justify-end space-x-4 md:space-x-6 lg:space-x-8">
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className="inline-bock px-6 py-2 duration-200 hover:bg-purple-300 rounded-full font-semibold uppercase tracking-wider"
                    >
                      {item.name}
                    </button>
                  </li>
                )
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
