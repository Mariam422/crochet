import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 max-w-[1100px] w-full mx-auto px-4 py-6">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}