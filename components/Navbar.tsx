"use client";

import Link from "next/link";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">

      <Link href="/home" className="navItem">
        Home
      </Link>

      <Link href="/create" className="navItem">
        Details
      </Link>

      <Link href="/create/details" className="navItem">
        Campaigns
      </Link>

      <Link href="/create/preview" className="navItem">
        Preview
      </Link>

    </nav>
  );
}