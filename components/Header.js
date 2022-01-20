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
import {modalState} from "../atoms/modalAtom";

function Header() {
  const { data: session } = useSession();
  const [open, setOpen]= useRecoilState(modalState);
  const router=useRouter();

  console.log(session);
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between bg-white max-w-4xl mx-5 lg:mx-auto">
        {/* Left */}
        <div className="relative hidden lg:inline-grid w-24 cursor-pointer" onClick={router.push}>
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
            
          />
        </div>
        <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer" onClick={router.push}>
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* Middle - Search*/}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>{" "}
            <input
              className="bg-gray-100 block w-full pl-10 sm:text-sm border-0 focus:ring-0 focus:border-black rounded-md"
              type="text"
              placeholder="Search"
            ></input>{" "}
          </div>{" "}
        </div>{" "}
        {/* Right */}
        <div className="flex items-center justify-end space-x-5">
          <HomeIcon className="navBtn"  onClick={router.push}/>
          <MenuIcon className="h-6 md:hidden cursor-pointer" />
          {session ? (
            <>
              <div className="navBtn relative">
                <ChatIcon className="navBtn" />
                <div className="absolute -top-2 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center  justify-center text-right text-white">
                  3
                </div>
              </div>
              <PlusCircleIcon className="navBtn" onClick={() =>setOpen(true)}/>
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
            <buton onClick={signIn} className=" cursor-pointer">Sign In</buton>
          )}
        </div>
      </div>{" "}
    </div>
  );
}

export default Header;
