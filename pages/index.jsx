import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <div>
      <Navbar bg="#070707" textColor="white" />
      <div className="h-screen w-screen"></div>
      <Footer />
    </div>
  );
}
