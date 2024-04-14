import { Inter } from "next/font/google";
import Sidebar from "../components/Dashboard/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={inter.className}>
      <Sidebar />
      {children}
    </div>
  );
}
