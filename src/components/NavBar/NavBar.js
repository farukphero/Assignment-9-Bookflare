import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import './NavBar.css'

const NavBar = () => {
   const [open, setOpen] = useState(false);
  return (
    <div className="navbar-container bg-slate-200 p-5 rounded">
      <h1 className="text-4xl">Bookflare</h1>
      <nav
        className={`bg-blue-200 lg:bg-slate-200 text-center ml-0 md:flex p-6 absolute md:static duration-500 ease-in ${
          open ? "top-20" : "top-[-250px]"
        }`}
      >
        <Link className="mr-24  block md:flex" to="/"></Link>
        <Link className="mr-24  block md:flex" to="/home">
          Home
        </Link>
        <Link className="mr-24  block md:flex" to="/topics">
          Topics
        </Link>
        <Link className="mr-24  block md:flex" to="/statistics">
          Statistics
        </Link>
        <Link className="mr-24 md:mr-0 block md:flex" to="/blog">
          Blog
        </Link>
      </nav>
      <div onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden">
        {open ? <XMarkIcon /> : <Bars3Icon />}
      </div>
    </div>
  );
};

export default NavBar;