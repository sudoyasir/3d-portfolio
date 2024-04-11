import React from "react";
import { createClient } from "@/prismicio";
import Link from "next/link";
import { PrismicNextLink } from "@prismicio/next";

export default async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return (
    <header className="top-0 mx-auto z-50 max-w-7xl md:sticky md:top-4">
      <nav>
        <ul>
          <li>
            <Link href="/" aria-label="Homepage">
              {settings.data.name}
            </Link>
          </li>
          {settings.data.nav_item.map(({ link, label }, index) => (
            <li key={index}>
              <PrismicNextLink field={link}>{label}</PrismicNextLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
