import { getProviders, signIn as SignIntoProvider } from "next-auth/react";

function signin({ providers }) {
  const checkProviders = console.log(providers);

  return (
    <body className=" bg-gray-50">
      <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl mx-auto">
        <section className=" col-span-1 mt-10 hidden md:inline-grid">
          {/*Home Image*/}
          <img src="/Instagram_home_screen.png" />
        </section>

        <section className=" col-span-1">
          {/*Login*/}
          <div className=" border mt-[4.5rem] ml-10 mr-10 rounded-sm bg-white md:mr-0">
            <img
              src="https://links.papareact.com/ocw"
              alt="Instagram Logo"
              className=" max-w-[200px] mx-auto pt-10"
            />
            <div className="mt-6 pb-10 items-center justify-between mx-10">
              <input
                placeholder="Phone/Username/Email"
                className=" p-2 text-sm rounded-sm border w-full"
              />
              <input
                placeholder="Password"
                className=" p-2 text-sm rounded-sm border w-full mt-3 mb-5"
              />
              <button className=" w-full bg-blue-300 text-sm p-2 text-white mb-6 hover:font-semibold hover:bg-blue-400 ease-out transition">
                Log In
              </button>
              <p className="text-center pb-3 font-medium border-b-2 text-gray-400">
                Or Login Using
              </p>
              <div className=" grid justify-center items-center">
                <div key={providers.google.name}>
                  <button
                    onClick={() => SignIntoProvider(providers.google.id, {callbackUrl:'/'})}
                    className="flex items-center border p-2 rounded-md mt-5 shadow-sm text-sm ml-1 hover:bg-black hover:text-white transition ease-out"
                  >
                    <img
                      src="/Google_Logo.png"
                      alt="Google Logo"
                      className=" w-5 h-5 mr-2"
                    />
                    Sign in with {providers.google.name}
                  </button>
                </div>
                <div key={providers.google.name}>
                  <button
                    onClick={() => SignIntoProvider(providers.google.id)}
                    className="flex items-center border p-2 rounded-md mt-2 shadow-sm text-sm hover:bg-black hover:text-white transition ease-out"
                  >
                    <img
                      src="/Facebook_Logo.png"
                      alt="Google Logo"
                      className=" rounded-sm w-5 h-5 mr-2"
                    />
                    Sign in with Facebook
                  </button>
                </div>
              </div>
              <p className=" text-center text-xs mt-5 cursor-pointer">
                Forgotten your Password?
              </p>
            </div>
          </div>
        </section>
      </main>
    </body>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
export default signin;
