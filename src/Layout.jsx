import { Toaster } from "sonner";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Layout({ children }) {
  return (
    <>
      <div className="min-h-screen bg-[#0b0f17] text-white">
      <Header />
      <main className="min-h-[calc(100vh-160px)]" dir="rtl">{children}</main>
      <Toaster />
      <Footer />
    </div>
    </>
  );
}
