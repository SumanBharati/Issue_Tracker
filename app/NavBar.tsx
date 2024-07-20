'use client';

import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import { usePathname } from "next/navigation";
import classnames from 'classnames';

const NavBar = () => {
  const currentPath = usePathname();
  // usePathname hook comes with Next JS to get the current path ot the current route.
  // We are using this hook in this component, and this hook is dependent on the browser APIs we have to
  //    convert this component to a client component, and we know that we can only access browser APIs in
  //    client compnent.

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-8 border-b mb-5 px-5 h-14 items-center">
      <Link className="text-2xl" href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            className={classnames({
              'text-sky-600': link.href === currentPath,
              'text-zinc-500': link.href !== currentPath,
              'text-xl font-semibold hover:text-zinc-800 transition-colors': true
            })}
            // className={`${link.href === currentPath ? 'text-sky-600' : 'text-zinc-500'} text-xl font-semibold hover:text-zinc-800 transition-colors`}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
