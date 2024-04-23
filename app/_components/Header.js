'use client'
import React, { useEffect, useState } from "react";
import localFont from 'next/font/local'
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { Aperture, File, Home, Lightbulb, Moon, Upload, X } from 'lucide-react';
import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";

//👇 Configure my local font object
const myFont = localFont({ src: '../../fonts/DancingScript-Bold.ttf' })

function Header() {

  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const [navToggle, setNavToggle] = useState(false);

  const handleSignUpClicked = () => {
    router.push('/upload');
  }

  const menuList = [
    {
      id: 1,
      name: 'Home',
      icon: Home,
      path: '/'
    },
    {
      id: 2,
      name: 'Upload',
      icon: Upload,
      path: '/upload'
    },
    {
      id: 3,
      name: 'Files',
      icon: File,
      path: '/files'
    },
  ]

  const handleNavbarClicked = () => {
    setNavToggle(!navToggle);
  }
  const handleCloseNavbar = () => {
    setNavToggle(false);
  }

  return (
    <div>
      <header className="bg-white dark:bg-zinc-900 container mx-auto md:px-0 px-3">
        <div className="relative flex flex-wrap items-center justify-between w-full bg-white dark:bg-zinc-900 group py-7 shrink-0">
          <Link href='/'>
            <div className="flex items-center gap-3">
              <Image src='/logo-1.png' width={50} height={50} alt='ShareFilesLogo' className='h-8 w-8' />
              <span className={`${myFont.className} text-2xl`}>Share Files</span>
            </div>
          </Link>
          <div className="items-center justify-between hidden gap-12 md:flex">

            <SignedIn>
              {menuList.map((item) => (
                <Link
                  key={item.id}
                  className="flex justify-center items-center gap-1 text-sm font-normal hover:text-purple-900 transition duration-300 rounded-2xl hover:bg-gray-100 cursor-pointer py-2 px-5"
                  href={item.path}
                >
                  <span><item.icon className="h-4 p-0" /></span>
                  {item.name}
                </Link>
              ))}
            </SignedIn>
          </div>
          <div className="items-center hidden gap-8 md:flex">

            <SignedIn>
              <div className="flex items-center p-1 rounded-full text-sm font-bold hover:text-purple-900 transition duration-300 hover:bg-gray-100 cursor-pointer"><UserButton afterSignOutUrl='/' /></div>
            </SignedIn>

            <button
              className="p-1 hover:text-purple-900 transition duration-300 rounded-full hover:bg-gray-100 cursor-pointer border"
              onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}>
              {theme === "light" ? (
                <Moon />
              ) : (
                <Lightbulb />
              )}
            </button>

          </div>
          <div className="flex md:hidden justify-center items-center gap-2">
            <SignedIn>
              <div className="h-9 w-9 flex items-center justify-center rounded-full p-4 text-sm font-bold hover:text-purple-900 transition duration-300 hover:bg-gray-100 cursor-pointer"><UserButton afterSignOutUrl='/' /></div>
            </SignedIn>
            <div className="h-9 w-9 p-1 pb-0 hover:text-purple-900 transition duration-300 rounded-full hover:bg-gray-100 cursor-pointer text-center">
              <button
                className="rounded-full h"
                onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}>
                {theme === "light" ? (
                  <Moon />
                ) : (
                  <Lightbulb />
                )}
              </button>
            </div>

            <SignedIn>
              <button
                className={`border p-1 rounded-full bg-dark hover:bg-gray-100 hover:text-purple-900 ${navToggle == true ? 'animate-spin bg-gray-100 text-purple-900' : null} transition duration-300`}
                onClick={() => handleNavbarClicked()}
              >
                <Aperture />
              </button>
            </SignedIn>
          </div>


          <div className={`transition duration-300 w-full h-auto ${navToggle == true ? 'absolute' : 'hidden'} flex md:hidden flex-col shadow-lg shadow-slate-800 justify-center items-center gap-3 overflow-hidden bg-white dark:bg-zinc-900 rounded-2xl top-full z-20`}>
            <SignedIn>
              <div className="w-full flex justify-end items-center pr-3 pt-2">
                <div
                  className="border rounded-full p-1 text-red-600 hover:bg-slate-500 border-slate-500 transition duration-300 cursor-pointer"
                  onClick={() => handleCloseNavbar()}
                >
                  <X className="h-4 w-4" />
                </div>
              </div>
              {menuList.map((item) => (
                <p key={item.id} className="w-full my-1">
                  <Link
                    className="flex justify-start items-center gap-1 text-sm font-normal hover:text-purple-900 transition duration-300 rounded-2xl hover:bg-gray-100 cursor-pointer py-4 px-5"
                    href={item.path}
                  >
                    <span><item.icon className="h-4 p-0" /></span>
                    {item.name}
                  </Link>
                </p>
              ))}
            </SignedIn>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
