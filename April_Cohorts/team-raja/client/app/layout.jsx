"use client";

import "./globals.css";
import Link from "next/link";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import useDrift from "./_hooks/liveChat-api/useDrift.js";

export default function RootLayout({ children }) {
  const [user, loading, error] = useAuthState(auth);

  useDrift();
  const [shouldUseDrift, setShouldUseDrift] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    let adminURL = pathname.includes("admin");

    console.log(pathname, shouldUseDrift);
    if (adminURL && window.drift?.api?.widget) {
      window.drift.api.widget.hide();
    } else if (!adminURL && window.drift?.api?.widget) {
      window.drift.api.widget.show();
    }
    setShouldUseDrift(adminURL ? false : true);
  }, [pathname]);

  return (
    <html
      lang="en"
      data-theme="light">
      <body>
        <div className="max-w-screen-2xl mx-auto px-4 py-8">
          <header className="flex bg-gray-100 border rounded-xl p-6 items-center">
            <Link
              href={"/"}
              className="font-bold text-xl flex-1">
              <div>Broken Pipe Plumbing</div>
            </Link>
            <nav className="flex gap-4 items-center">
              <Link href={"/appointment"}>
                <div className="font-bold">Book Now</div>
              </Link>

              <Link href={"/companyservices"}>
                <div className="font-bold">Services</div>
              </Link>
              {!user && (
                <>
                  <Link href={"/signup"}>
                    <div className="border font-bold border-slate-900 p-2 rounded-lg w-24 text-center">
                      Sign Up
                    </div>
                  </Link>

                  <Link href={"/login"}>
                    <div className="bg-slate-900 font-bold p-2 rounded-lg text-white w-24 text-center">
                      Login
                    </div>
                  </Link>
                </>
              )}
              {user && (
                <Link
                  className="btn btn-sm btn-warning"
                  href={"/signout"}>
                  <div>Sign out</div>
                </Link>
              )}
            </nav>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
