import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  ChatIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/react";

import { HomeIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import { useState } from "react";

function Header() {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("in toggle menu");
    if (menuOpen) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
    console.log(menuOpen);
  };

  console.log(session);
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between bg-white max-w-4xl mx-5 lg:mx-auto">
        {/* Left */}
        <div
          className="relative hidden lg:inline-grid w-24 cursor-pointer"
          onClick={router.push}
        >
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div
          className="relative w-8 lg:hidden flex-shrink-0 cursor-pointer"
          onClick={router.push}
        >
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* Middle - Search*/}
        <div className="max-w-xs mx-5">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>{" "}
            <input
              className="bg-gray-100 block w-full md:w-full pl-10 sm:text-sm border-0 focus:ring-0 focus:border-black rounded-md"
              type="text"
              placeholder="Search"
            ></input>{" "}
          </div>{" "}
        </div>{" "}
        {/* Right */}
        <div className="flex items-center justify-end space-x-5">
          {session ? (
            <>
              <MenuIcon
                className="h-6 md:hidden cursor-pointer"
                onClick={() => toggleMenu()}
              />
              <HomeIcon className="navBtn" onClick={router.push} />
              <div className="navBtn relative">
                <ChatIcon className="navBtn" />
                <div className="absolute -top-2 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center  justify-center text-right text-white">
                  3
                </div>
              </div>
              <PlusCircleIcon
                className="navBtn"
                onClick={() => setOpen(true)}
              />
              <UserGroupIcon className="navBtn" />
              <div className="navBtn relative">
                <HeartIcon className="navBtn" />
                <div className="absolute -top-0 -right-0 text-xs w-2 h-2 bg-red-500 rounded-full flex items-center  justify-center text-right"></div>
              </div>
              <img
                onClick={signOut}
                src={session?.user?.image}
                alt="profile pic"
                className="navBtn rounded-full cursor-pointer"
              />
            </>
          ) : (
            <buton onClick={signIn} className=" cursor-pointer">
              Login
            </buton>
          )}
        </div>
      </div>
      {session && menuOpen && (
        <div className="grid items-center justify-center space-y-5 mt-8 mb-8 md:hidden transition duration-150 ease-out">
          <div className="flex items-center cursor-pointer">
            <div className="w-15">
              <HomeIcon className="w-8" />
            </div>
            <div className="px-3 w-25">Home</div>
          </div>

          <div className="flex items-center cursor-pointer">
            <div className="w-15">
              <ChatIcon className="w-8" />
            </div>
            <div className="px-3 w-25">Messages</div>
          </div>

          <div className="flex items-center cursor-pointer" onClick={() => {toggleMenu();setOpen(true)}}>
            <div className="w-15">
              <PlusCircleIcon className="w-8" />
            </div>
            <div className="px-3 w-25">Add Post</div>
          </div>

          <div className="flex items-center cursor-pointer">
            <div className="w-15">
              <UserGroupIcon className="w-8" />
            </div>
            <div className="px-3 w-25">Explore</div>
          </div>

          <div className="flex items-center cursor-pointer">
            <div className="w-15">
              <HeartIcon className="w-8" />
            </div>
            <div className="px-3 w-25">Notificatitons</div>
          </div>

          <div className="flex items-center cursor-pointer" onClick={signOut}>
            <div className="w-15">
              <img src={session?.user?.image} className="w-8 rounded-full" />
            </div>
            <div className="px-3 w-25">{session?.user?.username}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
