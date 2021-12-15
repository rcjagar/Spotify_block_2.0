import Head from "next/head";
import Sidebar from "./../Components/Sidebar/Sidebar";
import Center from "./../Components/Sidebar/center"

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
    
      <main className="flex">
       <Sidebar />
       <Center />
      </main>

      <footer className=""></footer>
    </div>
  );
}
