import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon, Bars3Icon ,BookOpenIcon } from "@heroicons/react/24/solid";
import './NavBar.css'

const NavBar = () => {
   const [open, setOpen] = useState(false);
  return (
    <div className="navbar-container bg-slate-200 rounded">
      <h1 className="text-4xl flex p-5">
        <BookOpenIcon className="h-12 w-10 text-orange-300" />
        Bookflare
      </h1>
      <nav
        className={` bg-blue-200 md:bg-slate-200 lg:bg-slate-200 text-center ml-0 md:flex p-6 absolute md:static duration-500 ease-in ${
          open ? "top-20" : "top-[-250px]"
        }`}
      >
        <Link className="mr-6 lg:mr-24 block md:flex" to="/"></Link>
        <Link
          className="mr-6 lg:mr-24  block md:flex hover:bg-slate-400 p-3 rounded"
          to="/home"
        >
          Home
        </Link>
        <Link
          className="mr-6 lg:mr-24 block md:flex hover:bg-slate-400 p-3 rounded"
          to="/topics"
        >
          Topics
        </Link>
        <Link
          className="mr-6 lg:mr-24  block md:flex hover:bg-slate-400 p-3 rounded"
          to="/statistics"
        >
          Statistics
        </Link>
        <Link
          className="mr-6 lg:mr-24 md:mr-0 block md:flex hover:bg-slate-400 p-3 rounded"
          to="/blog"
        >
          Blog
        </Link>
      </nav>
      <div onClick={() => setOpen(!open)} className="h-6 w-6 mt-6 mr-6 md:hidden">
        {open ? <XMarkIcon /> : <Bars3Icon />}
      </div>
    </div>
  );
};

export default NavBar;