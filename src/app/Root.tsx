import { Outlet } from "react-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { ScrollToTop } from "./components/ScrollToTop";

export default function Root() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
}