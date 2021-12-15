import React from "react";
import { getProviders, signIn } from "next-auth/react";

export default function Login({ providers }) {
  return (
    <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
      <h1>this is login page</h1>
      <img
        className="w-52 mb-5"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button className="bg-[#18D860] text-white p-5 rounded-lg"  onClick={() => signIn(provider.id, { callbackUrl: "/"})}>
            login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
