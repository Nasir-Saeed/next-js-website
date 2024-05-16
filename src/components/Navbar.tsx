"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      {" "}
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Our Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Website development</HoveredLink>
            <HoveredLink href="/">Corporate website</HoveredLink>
            <HoveredLink href="/">Startup websites</HoveredLink>
            <HoveredLink href="/">Landings and promo sites</HoveredLink>
            <HoveredLink href="/">E-commerce</HoveredLink>
            <HoveredLink href="/">Wordpress development</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar;
