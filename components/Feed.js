import Stories from "./Stories";
import Posts from "./Posts";
import MiniProfile from "./MiniProfile";
import Suggestions from "./Suggestions";
import { signIn, signOut, useSession } from "next-auth/react";

function Feed() {
    const { data: session } = useSession();
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-4xl mx-auto">
            {session?(
                <>
            <section className="col-span-2">

                {/* Stories*/}
                <Stories/>
                {/* Posts*/}
                <Posts/>
            
            </section>

            <section className="hidden xl:inline-grid md:col-span-1">
                <div className=" fixed top-20">
                    <MiniProfile/>
                    {/* Suggestions */}
                    <Suggestions/>
                </div>
                {/* Mini Profile*/}

            </section>
            </>
            ):(
                <section className=" col-span-3 grid items-center justify-center mt-[10rem] font-semibold text-gray-400" onClick={signIn}>
                    Please Login to continue
                </section>
            )}
        </main>
    )
}

export default Feed
