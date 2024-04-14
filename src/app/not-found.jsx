import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex h-[80vh] flex-col items-center justify-center">
      <h1 className="mx-auto text-[30vmin] font-black text-red-600">404</h1>
      <p className="mx-auto text-xl font-medium text-slate-200">
        Whoops, we couldn&apos;d find that page.
      </p>
      <a
        href="/"
        className="border-3 mt-8 rounded border-slate-900 bg-slate-50 px-8 py-2 text-xl font-medium text-slate-900"
      >
        Head Home
      </a>
    </div>
  );
}
