import { signOut, useSession } from "next-auth/react";

function MiniProfile() {
    const { data: session } = useSession();
    return (
        <div className="flex items-center justify-between mt-12 ml-10">
            <img className=" rounded-full border p-[2px] w-14 h-14" src={session?.user?.image}
            alt="Profile Picture"/>

            <div className="flex-1 ml-4 mr-14 text-left">
                <h2 className="font-bold">{session?.user?.username}</h2>
                <h3 className=" text-sm text-gray-400">{session?.user?.name}</h3>
            </div>

            <button className=" text-blue-400 text-sm font-semibold" onClick={signOut}>
                Sign Out
            </button>
        </div>
    )
}

export default MiniProfile
