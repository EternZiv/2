import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Toaster } from "./ui/sonner";
import { ScrollToTop } from "./ScrollToTop";

export default function Layout() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}