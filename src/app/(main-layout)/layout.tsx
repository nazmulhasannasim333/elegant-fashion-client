import { Inter } from "next/font/google";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={inter.className}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
