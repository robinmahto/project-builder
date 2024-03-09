import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MainBody from "@/components/MainBody";
import Buyer from "@/components/Buyer";
import Footer from "@/components/Footer";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <nav className="flex items-center justify-between px-5 py-3">
        <div>
          <Image src="/logo.png" alt="appLogo" width={100} height={100} />
        </div>
        <ul className="flex items-center gap-5">
          <Navbar />
        </ul>
        <div>
          <button className="px-5 py-2 rounded-md text-white text-sm font-bold bg-gradient-to-r hover:bg-gradient-to-l  from-purple-700 via-purple-500 to-cyan-400 transform hover:scale-110 transition-transform duration-300">
            Build Now
          </button>
        </div>
      </nav>
      <header className="w-screen min-h-[600px] flex flex-col items-center justify-center">
        <Hero />
      </header>
      <MainBody />
      <Buyer />
      <Footer />
    </>
  );
};

export default Home;
