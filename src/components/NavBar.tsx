"use client"

import clsx from "clsx";
import React, { useState } from "react";
import { Content, KeyTextField, asLink } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import { MdMenu, MdClose } from "react-icons/md";
import Button from "./Button";
import { usePathname } from "next/navigation";

export default function NavBar({
  settings,
}: {
  settings: Content.SettingsDocument;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation">
      <ul className="flex flex-col justify-between rounded-b-lg bg-slate-50 px-4 py-2 md:m-4 md:flex-row md:items-center md:rounded-xl">
        <div className="flex items-center justify-between">
          <NameLogo name={settings.data.name} />
          <button
            aria-expanded={open}
            aria-label="Open menu"
            className="block p-2 text-2xl text-slate-800 md:hidden"
            onClick={() => setOpen(!open)} // Toggle open state
          >
            {open ? <MdClose /> : <MdMenu />}
          </button>
        </div>
        <div
          className={clsx(
            "absolute left-0 right-0 z-50 bg-slate-50 px-4 pt-2 transition-height duration-300 ease-in-out overflow-hidden md:hidden",
            open ? "h-auto" : "h-0" // Adjust height based on open state
          )}
        >
          {settings.data.nav_item.map(({ link, label }, index) => (
            <PrismicNextLink
              key={label}
              className={clsx(
                "group block overflow-hidden rounded px-3 py-1 text-xl font-bold text-slate-900",
                pathname.includes(asLink(link) as string)
                  ? "text-yellow-500"
                  : "text-slate-900"
              )}
              field={link}
              onClick={() => setOpen(false)}
              aria-current={
                pathname.includes(asLink(link) as string) ? "page" : undefined
              }
            >
              <span className="relative">{label}</span>
            </PrismicNextLink>
          ))}
          <Button
            linkField={settings.data.cta_link}
            label={settings.data.cta_label}
            className="mt-3 ml-3"
          />
        </div>
        <DesktopMenu settings={settings} pathname={pathname} />
      </ul>
    </nav>
  );
}

function NameLogo({ name }: { name: KeyTextField }) {
  return (
    <Link
      href="/"
      aria-label="Home page"
      className="text-xl font-extrabold tracking-tighter text-slate-900"
    >
      {name}
    </Link>
  );
}

function DesktopMenu({
  settings,
  pathname,
}: {
  settings: Content.SettingsDocument;
  pathname: string;
}) {
  return (
    <div className="relative z-50 hidden flex-row items-center gap-1 bg-transparent py-0 md:flex">
      {settings.data.nav_item.map(({ link, label }, index) => (
        <PrismicNextLink
          key={label}
          className={clsx(
            "group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-slate-900"
          )}
          field={link}
          aria-current={
            pathname.includes(asLink(link) as string) ? "page" : undefined
          }
        >
          <span
            className={clsx(
              "absolute inset-0 z-0 h-full rounded bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0",
              pathname.includes(asLink(link) as string)
                ? "translate-y-6"
                : "translate-y-8"
            )}
          />
          <span className="relative">{label}</span>
        </PrismicNextLink>
      ))}
      <Button
        linkField={settings.data.cta_link}
        label={settings.data.cta_label}
        className="ml-3"
      />
    </div>
  );
}
