import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MainBody from "@/components/MainBody";
import Buyer from "@/components/Buyer";
import Footer from "@/components/Footer";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <header>
        <nav className="flex items-center justify-between px-5 py-3">
          <div>
            <Image src="/logo.png" alt="appLogo" width={100} height={100} />
          </div>
          <ul className="flex items-center gap-5">
            <Navbar />
          </ul>
          <div>
            <button>Build Now</button>
          </div>
        </nav>
        <Hero />
      </header>
      <MainBody />
      <Buyer />
      <Footer />
    </>
  );
};

export default Home;